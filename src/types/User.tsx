import { AddressEntity } from "./Address";

export interface User {
  id: string;
  nickname: string;
  profile_image: string;
  name: string;
  default_address: number;
  addresses: AddressEntity[];
}

// id: string;

// @Column()
// nickname: string;

// @Column()
// profile_image: string;

// @Column()
// name: string;
