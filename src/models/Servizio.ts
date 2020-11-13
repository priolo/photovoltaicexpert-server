import {Entity, Column, ManyToOne} from "typeorm";
import { ModelBase } from "../../../../dist/plugins/typeorm/models/ModelBase";
import { User } from "./User";



@Entity()
export class Servizio extends ModelBase {
    
    @Column()
    title: string;

    @Column()
    description: string;

    
    
    // RELATIONSHIP

    @ManyToOne(type => User, user => user.accounts)
    author: User;
}