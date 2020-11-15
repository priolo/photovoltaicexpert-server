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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountDB = exports.ProviderCode = void 0;
const typeorm_1 = require("typeorm");
//import { User } from "./User";
const typexpress_1 = require("typexpress");
var ProviderCode;
(function (ProviderCode) {
    ProviderCode[ProviderCode["Unknow"] = 0] = "Unknow";
    ProviderCode[ProviderCode["Google"] = 1] = "Google";
    ProviderCode[ProviderCode["Facebook"] = 2] = "Facebook";
})(ProviderCode = exports.ProviderCode || (exports.ProviderCode = {}));
let AccountDB = class AccountDB extends typexpress_1.ModelBase {
};
__decorate([
    typeorm_1.Column({ name: "provider_code", type: "smallint", nullable: true }),
    __metadata("design:type", Number)
], AccountDB.prototype, "providerCode", void 0);
__decorate([
    typeorm_1.Column({ name: "provider_id", nullable: true }),
    __metadata("design:type", String)
], AccountDB.prototype, "providerId", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], AccountDB.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], AccountDB.prototype, "surname", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], AccountDB.prototype, "email", void 0);
AccountDB = __decorate([
    typeorm_1.Entity("account")
], AccountDB);
exports.AccountDB = AccountDB;
//# sourceMappingURL=AccountDB.js.map