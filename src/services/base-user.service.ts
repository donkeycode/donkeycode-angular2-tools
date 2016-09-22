import { Injectable, ReflectiveInjector } from '@angular/core';
import { BaseRequestService } from './base-request.service';

/**
 * BaseUserService
 * <br>
 * <strong>Usage</strong>
 * ```
 * import { Injectable } from '@angular/core';
 * import { BaseUserService } from 'donkeycode-angular2-tools/src/services/user-request.service';
 * import { config } from '../../config';
 *
 * @Injectable()
 * export class RequestService extends BaseUserService {
 *
 *   constructor() {
 *     super();
 *     super.init(config);
 *   }
 *
 * }
 * ```
 */
@Injectable()
export abstract class BaseUserService {

  static account: any = {};
  static config : any = {};
  static requestService: BaseRequestService;

  constructor(requestService : BaseRequestService) {
    BaseUserService.requestService = requestService;
  }

  public init(config: any) {
    BaseUserService.config = config;
  }

  static getProfile(force = false) {
    if (!force && this.account && this.account.groups) {
      return new Promise(
        (resolve, reject) => {
          resolve(this.account);
        });
    }

    return new Promise((resolve, reject) => {
      BaseUserService.requestService.get(BaseUserService.config.apiUrl.profile)
        .then((response: any) => {
          this.account = response;
          resolve(this.account);
        }, (error: any) => {
          console.log(error);
          reject({});
        });
    });
  }

  static redirectLogin() {}

  static hasRole(role : string) {
    if (!this.account || !this.account.roles) {
      return false;
    }

    return this.account.roles.indexOf(role) !== -1;
  }
}
