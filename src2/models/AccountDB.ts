import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, UpdateDateColumn, CreateDateColumn} from "typeorm";
//import { User } from "./User";
import { ModelBase } from "typexpress";


export enum ProviderCode {
    Unknow = 0,
    Google,
    Facebook,
} 

@Entity("account")
export class AccountDB extends ModelBase {

    
    @Column ( { name: "provider_code", type: "smallint", nullable: true } )
    providerCode?: ProviderCode;

    @Column ( { name: "provider_id", nullable: true } )
    providerId?: string;


    @Column({nullable:true})
    name?: string;

    @Column({nullable:true})
    surname?: string;

    @Column()
    email?: string;



    // RELATIONSHIP

    //@ManyToOne(type => User, user => user.accounts)
    //user?: User;
}