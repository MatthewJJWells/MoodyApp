type HomeProps = {
  isLoggedIn: boolean;
  userName: string;
} & {
  login: (userName: string) => void;
};

export { HomeProps };
