//import { User } from "./User";

import { User } from "./User";

export interface ReplyType {
  id: number;
  content: string;
  time: Date;
  user: User;
}
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   content: string;
//   @Column()
//   time: Date;

//   @ManyToOne(() => Product, (product) => product.id, { onDelete: 'CASCADE' })
//   @JoinColumn({ name: 'product_id' })
//   product: Product;

//   @ManyToOne(() => UserEntity, (user) => user.id, { onDelete: 'CASCADE' })
//   @JoinColumn({ name: 'user_id' })
//   user: UserEntity;
