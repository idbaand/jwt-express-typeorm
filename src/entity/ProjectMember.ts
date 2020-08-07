import { Project } from "./Project";
import { Entity, PrimaryGeneratedColumn, OneToMany, OneToOne, ManyToOne } from "typeorm";
import { User } from "./User";
import { type } from "os";

@Entity()
export class ProjectMember {
    @PrimaryGeneratedColumn()
    id:number;

    @OneToOne(type => Project)
    project: Project;

    @ManyToOne(type => User)
    member: User[];
}