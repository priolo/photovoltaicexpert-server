import { Express, Response, Request } from "express";
import { AccountDB } from "../models/AccountDB";
import { RouterRest, RouterBase } from "typexpress";



@RouterBase.Route("/account", AccountDB)
export class RouterAccount extends RouterRest {
}