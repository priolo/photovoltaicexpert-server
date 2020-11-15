"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterAccount = void 0;
const AccountDB_1 = require("../models/AccountDB");
const typexpress_1 = require("typexpress");
let RouterAccount = class RouterAccount extends typexpress_1.RouterRest {
};
RouterAccount = __decorate([
    typexpress_1.RouterBase.Route("/account", AccountDB_1.AccountDB)
], RouterAccount);
exports.RouterAccount = RouterAccount;
//# sourceMappingURL=RouterAccount.js.map