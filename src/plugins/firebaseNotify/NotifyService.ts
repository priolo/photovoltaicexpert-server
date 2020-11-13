import { Plugin } from "../../../../../dist/plugins/core/Plugin";

import * as admin from "firebase-admin";
//import * as serviceAccount from "../../brave-design-525-firebase-adminsdk-j2w2i-ada9de7aef.json";



export class NotifyService extends Plugin {

    constructor () {
        super();
        var serviceAccount = require("../../../assets/brave-design-525-firebase-adminsdk-j2w2i-ada9de7aef.json");
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://brave-design-525.firebaseio.com"
        });
    }


    public async sendNotify ( token:string, msg:string ):Promise<string> {
        // This registration token comes from the client FCM SDKs.
        //var registrationToken = 'YOUR_REGISTRATION_TOKEN';

        // See documentation on defining a message payload.
        var message:admin.messaging.Message = {
            // data: {
            //     score: '850',
            //     time: '2:45',
            //     msg: msg,
            // },
            notification: {
                title: "Titolone",
                body: msg,
            },
            token: token
        };

        // Send a message to the device corresponding to the provided
        // registration token.
        return await admin.messaging().send(message)
    }
}