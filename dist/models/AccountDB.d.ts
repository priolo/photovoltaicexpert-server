import { ModelBase } from "typexpress";
export declare enum ProviderCode {
    Unknow = 0,
    Google = 1,
    Facebook = 2
}
export declare class AccountDB extends ModelBase {
    providerCode?: ProviderCode;
    providerId?: string;
    name?: string;
    surname?: string;
    email?: string;
}
//# sourceMappingURL=AccountDB.d.ts.map