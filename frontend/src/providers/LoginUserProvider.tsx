import { User } from "../types/api/user";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type LoginUserContextType = {
  loginUser: User | null;
  setLoginUser: Dispatch<SetStateAction<User | null>>; //型定義：<User | null>の値を引数として受け取り　新しい<User | null>型の状態を返す関数
};

//コンテキスト：データをpropを使用しず，コンポーネントツリー全体で共有する方法
export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

//プロバイダー：コンテキストの値をコンポーネントツリーの仮想に提供するコンポーネント
//今回は子コンポーネントにloginuserとsetLoginUserの値を提供する
export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<User | null>(null);

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
