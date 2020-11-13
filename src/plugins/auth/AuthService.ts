import { Plugin } from "../../../../../dist/plugins/core/Plugin";
import { UserService } from "../../../../../dist/plugins/user/UserService";
import { TypeormPlugin } from "../../../../../dist/plugins/typeorm/TypeormPlugin";

import { AccountDB } from "../../models/AccountDB";
import { User } from "../../models/User";
import { Device } from "../../models/Device";



export class AuthService extends Plugin {

    public async login(userPartial:User, session?:any): Promise<User> {

        const userService = <UserService>this.enviroment.plugins.getByType(UserService);
        const typeormService = <TypeormPlugin>this.enviroment.plugins.getByType(TypeormPlugin);
        const conn = typeormService.connection;

        const repAccount = conn.getRepository(AccountDB);
        const repUser = conn.getRepository(User);
        const repDevice = conn.getRepository(Device);

        const reqAccount = userPartial.accounts[0];


        
        // ACCOUNT

        // cerco l'account per id
        let account: AccountDB = await repAccount.findOne({
            where: { "provider_id": reqAccount.providerId },
            relations: ["user", "user.devices", "user.accounts"]
        });

        // non trovato...  cerco l'account per email
        if (account == null) {
            account = await repAccount.findOne({
                where: { "email": reqAccount.email },
                relations: ["user", "user.devices", "user.accounts"]
            });
        }

        // non trovato... salvo l'account ricevuto
        if (account == null) {
            account = await repAccount.save(reqAccount);

            // trovato... momorizzo eventuali differenze
        } else {
            repAccount.merge(account, reqAccount);
            await repAccount.save(account);
        }



        // USER

        let user = account.user;
        // se non c'e' lo user per questo account lo creo
        if (!user) {
            user = await repUser.save(new User());
            account.user = null; // per prevenire il loop nella trasformazione json
            user.accounts = [account];
        }



        // DEVICE

        let reqDevice = userPartial.devices[0];
        // se il device arrivato dal client non c'e' nel db lo creo
        if (!user.devices) user.devices = [];
        let device = user.devices.find(d => d.deviceId == reqDevice.deviceId);
        if (!device) {
            device = await repDevice.save(reqDevice);
            user.devices.push(device);
        }

        // salva lo user in sessione
        userService.setSessionUser (session, user);
        
        return user;
    }

    public async logout(): Promise<void> {
    }

}




