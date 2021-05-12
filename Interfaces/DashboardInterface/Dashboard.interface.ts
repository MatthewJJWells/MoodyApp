type DashboardProps = {
  isLoggedIn: boolean;
  userName: string;
} & {
  submit: (userName: string) => void;
};

export { DashboardProps };
