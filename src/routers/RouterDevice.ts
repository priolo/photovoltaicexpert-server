import { AccountDB } from "../models/AccountDB";
import { RouterRest } from "../../../../dist/routers/RouterRest";
import { RouterBase } from "../../../../dist/routers/core/RouterBase";



@RouterBase.Route("/device", AccountDB)
export class RouterDevice extends RouterRest {

}