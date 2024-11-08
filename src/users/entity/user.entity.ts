import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Role } from 'src/roles/entity/role.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  passwordHash: string;  // Здесь храним хешированный пароль

  @Column()
  fullName: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  roleId: number;  // Это поле хранит ID роли пользователя

  @ManyToOne(() => Role)
  @JoinColumn({ name: 'roleId' })  // Связь с сущностью Role
  role: Role;
  userRoles: any;
}
