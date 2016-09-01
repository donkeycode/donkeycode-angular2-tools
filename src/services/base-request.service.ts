import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BaseUserService } from './base-user.service';

/**
 * BaseRequestService helps to generate request api : GET - POST - DELETE
 * <br>
 * <strong>Usage</strong>
 * ```
 * import { Injectable } from '@angular/core';
 * import { BaseRequestService } from 'donkeycode-angular2-tools/src/services/base-request.service';
 * import { Http } from '@angular/http';
 * import { contentHeaders } from './headers';
 * import { config } from '../../config';
 *
 * @Injectable()
 * export class RequestService extends BaseRequestService {
 *
 *   constructor(public http: Http) {
 *     super(http);
 *     super.init(config, contentHeaders);
 *   }
 *
 * }
 * ```
 */
@Injectable()
export abstract class BaseRequestService {
  static isRefreshingToken: any = null;
  activeRequest: any = null;
  config: any = {}
  contentHeaders: any  = {}

  constructor(public http: Http) {}

  public init(config: any, contentHeaders: any) {
    this.config = config;
    this.contentHeaders = contentHeaders;
  }

  public transformUrl(url: string) {

    if (url.indexOf('://') === -1) {
      url = this.config.baseApi + url;
    }

    if (url.indexOf('access_token') > -1) {
      return url;
    }

    let accessToken = localStorage.getItem('auth_access_token');
    if (accessToken) {
      let separator = '?';
      if (url.indexOf('?') > -1) {
        separator = '&';
      }
      url += `${separator}access_token=${accessToken}`;
    }

    return url;
  }

  private parseMessage(response: any) {
    if (response && response._body) {
      return JSON.parse(response._body);
    }

    return response;
  }

  private handleUnauthorized(resolve: any, reject: any, self: any, method: string, callbackArgs: any) {
    if (!localStorage.getItem('auth_refresh_token')) {
      resolve('no_refresh_token');
      BaseUserService.redirectLogin();
      return;
    }

    this.refreshToken()
    .then(() => {
      self[method](callbackArgs)
      .then((response : any) => {
        resolve(this.parseMessage(response));
      }, (error : any) => {
        reject(this.parseMessage(error))
      });
    }, (error: any) => {
      resolve(this.parseMessage(error));
      BaseUserService.redirectLogin();
    });
  }

  private handleRequest(self: any, method: string, args: any, originalArgs: any) {
    return new Promise(
      (resolve, reject) => {
        this.activeRequest = self['http']
        [method](...args)
        .subscribe(
          (response: any) => {
            resolve(this.parseMessage(response));
          },
          (error: any) => {
            if (error.status === 401) {
              this.handleUnauthorized(resolve, reject, self, method, originalArgs);
            } else {
              reject(this.parseMessage(error));
            }
          }
        )
      }
    );
  }

  public post(url :string, body = {}): any {
    let args = [this.transformUrl(url), JSON.stringify(body), { headers: this.contentHeaders }];
    let originalArgs = [url, body];
    return this.handleRequest(this, 'post', args, originalArgs);
  }

  public put(url : string, body = {}): any {
    let args = [this.transformUrl(url), JSON.stringify(body), { headers: this.contentHeaders }];
    let originalArgs = [url, body];
    return this.handleRequest(this, 'put', args, originalArgs);
  }

  public get(url :string): any {
    let args = [this.transformUrl(url), { headers: this.contentHeaders }];
    let originalArgs = [url];
    return this.handleRequest(this, 'get', args, originalArgs);
  }

  public delete(url :string): any {
    let args = [this.transformUrl(url), { headers: this.contentHeaders }];
    let originalArgs = [url];
    return this.handleRequest(this, 'delete', args, originalArgs);
  }

  private refresh() {
    let body = {
      client_id: this.config.client_id,
      client_secret: this.config.client_secret,
      refresh_token: localStorage.getItem('auth_refresh_token'),
      grant_type: 'refresh_token'
    };
    return this.post('/noauth/oauth/v2/token', body);
  }

  private refreshToken() {
    if (BaseRequestService.isRefreshingToken) {
      return BaseRequestService.isRefreshingToken;
    }

    BaseRequestService.isRefreshingToken = this.refresh()
    .then((response: any) => {
      localStorage.setItem('auth_access_token', response.access_token);
      localStorage.setItem('auth_expires_in', response.expires_in);
      localStorage.setItem('auth_refresh_token', response.refresh_token);
      localStorage.setItem('auth_scope', response.scope);
      localStorage.setItem('auth_token_type', response.token_type);
      BaseRequestService.isRefreshingToken = null;
    });
    return BaseRequestService.isRefreshingToken;
  }

  public getPaginatedUrl(url: string, page: number, max: number) {
    if (page === 0 && max === 0) {
      return url;
    }
    let separator = '?';
    if (url.indexOf('?') > -1) {
      separator = '&';
    }
    url += `${separator}page=${page}&page_size=${max}`;
    return url;
  }

  public stopRequest() {
    if (this.activeRequest) {
      this.activeRequest.unsubscribe();
    }
    this.activeRequest = null;
  }
}
