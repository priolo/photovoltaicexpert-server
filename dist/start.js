"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import * as path from "path";
const path_1 = __importDefault(require("path"));
const typexpress_1 = require("typexpress");
console.log("********3");
const PORT = process.env.PORT || 5000;
let env = new typexpress_1.Root();
env.dispatch({
    type: "START",
    payload: {
        children: [
            {
                name: "http",
                port: PORT,
                // https: {
                // 	privkey: path.join(__dirname, "../assets/privkey.pem"),
                // 	pubcert: path.join(__dirname, "../assets/pubcert.pem"),
                // }
                children: [
                    {
                        name: "http-static",
                        staticPaths: {
                            "/": {
                                dir: path_1.default.join(__dirname, "../public/build"),
                                index: true,
                            }
                        },
                    },
                    // 	// {	
                    // 	// 	name: "http-session" 
                    // 	// },
                    {
                        name: "http-router",
                        dir: `${__dirname}/routers`,
                    },
                ]
            },
            {
                name: "typeorm",
                typeorm: {
                    "type": "sqlite",
                    // "username": null,
                    // "password": null,
                    "database": path_1.default.join(__dirname, "../database/database.sqlite"),
                    "synchronize": true,
                    "logging": true,
                    "entities": [
                        path_1.default.join(__dirname, "./models/**/*.js")
                    ],
                },
            },
        ],
    },
});
console.log("Continue...");
//# sourceMappingURL=start.js.map