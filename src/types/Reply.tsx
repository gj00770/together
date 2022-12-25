//import { User } from "./User";

import { User } from "./User";

export interface ReplyType {
  id: number;
  content: string;
  time: Date;
  user: User;
}
