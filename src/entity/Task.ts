import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { CipherNameAndProtocol } from "tls";
import { Project } from "./Project";
import { type } from "os";


@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column()
    description: string;


    @OneToOne(type => Project)
    @JoinColumn()
    project: Project;

}