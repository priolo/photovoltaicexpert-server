import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, UpdateDateColumn, CreateDateColumn} from "typeorm";
import { User } from "./User";
import { ModelBase } from "../../../../dist/plugins/typeorm/models/ModelBase";



export enum DevicePlatform {
    Unknow = 0,
    Android,
    iOS,
} 

@Entity()
export class Device extends ModelBase {

    @Column({name:"device_id"})
    deviceId: string;

    @Column({type:"smallint"})
    platform: DevicePlatform;

    @Column({name:"notify_token"})
    notifyToken: string;


    // RELATIONSHIP

    @ManyToOne(type => User, user => user.accounts)
    user: User;
}