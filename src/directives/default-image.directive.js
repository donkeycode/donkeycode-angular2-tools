"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var DefaultImageDirective = (function () {
    function DefaultImageDirective() {
    }
    DefaultImageDirective.prototype.onError = function () {
        this.updateUrl();
    };
    DefaultImageDirective.prototype.updateUrl = function () {
        if (this.stopError) {
            return;
        }
        this.stopError = true;
        $('img[id="' + this.selectorImg + '"]').attr('src', this.default);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DefaultImageDirective.prototype, "default", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DefaultImageDirective.prototype, "selectorImg", void 0);
    __decorate([
        core_1.HostListener('error'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], DefaultImageDirective.prototype, "onError", null);
    DefaultImageDirective = __decorate([
        core_1.Directive({
            selector: 'img[default]'
        }), 
        __metadata('design:paramtypes', [])
    ], DefaultImageDirective);
    return DefaultImageDirective;
}());
exports.DefaultImageDirective = DefaultImageDirective;
//# sourceMappingURL=default-image.directive.js.map