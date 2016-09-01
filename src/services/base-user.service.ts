import { Injectable, ReflectiveInjector } from '@angular/core';
import { BaseRequestService } from './base-request.service';
import { HTTP_PROVIDERS } from '@angular/http';

@Injectable()
export class BaseUserService {

  constructor(config: any = {}) {
    BaseUserService.config = config;
  }

  static account: any = {};
  static config : any = {};

  static getProfile(force = false) {
    if (!force && this.account && this.account.groups) {
      return new Promise(
        (resolve, reject) => {
          resolve(this.account);
        });
    }

    let injector = ReflectiveInjector.resolveAndCreate([
      BaseRequestService, HTTP_PROVIDERS
    ]);
    let requestService = injector.get(BaseRequestService);

    return new Promise((resolve, reject) => {
      requestService
        .get(BaseUserService.config.apiUrl.profile)
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
