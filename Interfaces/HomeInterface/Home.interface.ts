type HomeProps = {
  isLoggedIn: boolean;
  userName: string;
} & {
  submit: (userName: string) => void;
};

export { HomeProps };
