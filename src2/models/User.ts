import {Entity, PrimaryGeneratedColumn, Column, OneToMany, UpdateDateColumn, CreateDateColumn} from "typeorm";
import { ModelBase } from "typexpress";



@Entity()
export class User extends ModelBase {
}