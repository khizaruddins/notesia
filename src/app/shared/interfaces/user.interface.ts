import { ILinks } from "../../pages/home/home.component";

export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  phone: number;
  avatar: string;
  role_id: number;
  username: string;
  email: string;
  cv_link: string;
  social_links: {
    data: ILinks[]
  };
}