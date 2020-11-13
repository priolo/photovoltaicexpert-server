import {Entity, PrimaryGeneratedColumn, Column, OneToMany, UpdateDateColumn, CreateDateColumn} from "typeorm";
import { AccountDB } from "./AccountDB";
import { Device } from "./Device";
import { UserBase } from "../../../../dist/plugins/typeorm/models/UserBase";



@Entity()
export class User extends UserBase {

    // RELATIONSHIP

    @OneToMany(type => AccountDB, account => account.user )
    accounts: AccountDB[];

    @OneToMany(type => Device, device => device.user )
    devices: Device[];
    
}