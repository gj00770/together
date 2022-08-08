import { Product } from "./Product";

export interface cartItem {
  id: number;
  count: number;
  product: Product;
}

//   export class CartItemEntity {
//     @PrimaryGeneratedColumn()
//     id: number;
//     @Column()
//     count: number;
//     @ManyToOne(() => Product, (product) => product.id, { onDelete: 'CASCADE' })
//     @JoinColumn({ name: 'product_id' })
//     product: Product;

//     @ManyToOne(() => UserEntity, (user) => user.id, { onDelete: 'CASCADE' })
//     @JoinColumn({ name: 'user_id' })
//     user: UserEntity;
//   }
