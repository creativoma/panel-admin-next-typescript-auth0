export type Data = {
  name: string;
};

export interface User {
  id: number;
  name: string;
  email: string;
  website: string;
  company: {
    name: string;
  };
}

export type HeaderProps = {
  user?: any;
  loading: boolean;
};

export type LayoutProps = {
  user?: any;
  loading?: boolean;
  children: React.ReactNode;
};
