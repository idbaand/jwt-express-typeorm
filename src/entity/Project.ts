import {Entity, ManyToOne, OneToMany, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm';
import {User} from "./User";

@Entity()
export class Project  {
    @PrimaryColumn()
    name: string;

    @Column()
    description: string;

    
    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(type => Project, category => category.children)
    parent: Project;

    @OneToMany(type => Project, category => category.parent)
    children: Project[];

    @ManyToOne(type=> User)
    owner: User;

}