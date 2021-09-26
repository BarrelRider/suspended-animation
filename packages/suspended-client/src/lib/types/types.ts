export interface IAuthorizedRoute {
  [key: string]: any;
  component: Function;
}

export interface INavRoute {
  to: string | "/";
  navContent: string | null;
  className: string | "";
}

export interface IUser {
  id: string;
  name: string;
}
