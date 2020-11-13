import { Express, Response, Request } from "express";

import { AccountDB } from "../models/AccountDB";
import { User } from "../models/User";

import { RouterRest } from "../../../../dist/routers/RouterRest";
import { RouterBase } from "../../../../dist/routers/core/RouterBase";
import { Enviroment } from "../../../../dist/node/Enviroment";
import { TypeormPlugin } from "../../../../dist/plugins/typeorm/TypeormPlugin";



@RouterBase.Route("/account", AccountDB)
export class RouterAccount extends RouterRest {
  

    protected async save ( req:Request, res:Response ) {
        
        const typeormService = <TypeormPlugin>Enviroment.Current.plugins.getByType(TypeormPlugin);
        const conn = typeormService.connection;
        let reqAccount:AccountDB = req.body;
        let repAccount = conn.getRepository(AccountDB);
        let repUser = conn.getRepository(User);
        
        // cerco l'account per id
        let account:AccountDB = await repAccount.findOne ( { 
            where : { "provider_id": reqAccount.providerId },
            relations: ["user"] 
        });

        // altrimenti cerco l'account per email
        if ( account == null ) {
            account = await repAccount.findOne ( { 
                where : { "email": reqAccount.email },
                relations: ["user"] 
            });
        }

        // altrimenti salvo l'account ricevuto
        if ( account == null ) {
            account = await repAccount.save(reqAccount);
        // se invece c'e' momorizzo eventuali differenze
        } else {
            repAccount.merge ( account, reqAccount );
            await repAccount.save(account);
        }
        
        // se non c'e' lo user per questo account lo creo
        if ( account.user==null ) {
            account.user = repUser.create ( { 
                accounts: [],
            });
            account.user = await repUser.save(account.user);
            account = await repAccount.save(account);
        }
        
        res.json(account);
    }

}