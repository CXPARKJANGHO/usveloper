export interface UserInfo {
  loginID?: String;
  loginPW?: String;
}

export interface Action extends UserInfo {
  type: String;
}

export interface State {
  state: String;
  setState: (value: React.SetStateAction<string>) => void;
}
