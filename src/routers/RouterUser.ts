import { RouterBase } from "../../../../dist/routers/core/RouterBase";
import { RouterRest } from "../../../../dist/routers/RouterRest";

import { RuleServiceDecorator } from "../../../../dist/plugins/rule/RuleServiceDecorator";
import { RouterServicesBase } from "../../../../dist/routers/core/RouterServicesBase";

import * as express from "express";
import { User } from "../models/User";
import { NotifyService } from "../plugins/firebaseNotify/NotifyService";
import { AuthService } from "../plugins/auth/AuthService";
import { Enviroment } from "../../../../dist/node/Enviroment";





@RouterBase.Route("/user", User)
export class RouterUser extends RouterRest {


    protected async save(req: express.Request, res: express.Response) {
        const authService = <AuthService>Enviroment.Current.plugins.getByName("my-auth");
        let user = await authService.login(req.body, req.session)
        res.json(user);
    }

    @RuleServiceDecorator.Rule("user-service:not-null")
    @RouterServicesBase.Routing({ verb: "post", path: "/send" })
    public async send(req: express.Request, res: express.Response) {

        const notifyService = <NotifyService>Enviroment.Current.plugins.getByName("my-notify");
        let responses: string[] = [];

        req.body.tokens.forEach(async token => {
            let res = await notifyService.sendNotify(
                token,
                "Questo è un messaggio di " + req.session.userId
            );
            responses.push(res);
        });
        res.json({
            responses: responses
        });
    }
}