import React, { ReactNode } from "react";
import NavigationBar from "./navigation-bar";
import { useSetRecoilState } from "recoil";
import { getUserInfo } from "zmp-sdk";
import { userState } from "../state";

interface IZaloPageLayoutProps {
  children: ReactNode;
}

const ZaloPageLayout: React.FunctionComponent<IZaloPageLayoutProps> = ({children}) => {
  let loginError: undefined | Record<string, unknown> = undefined;
  const setUser = useSetRecoilState(userState);

  getUserInfo()
  .then(
    resp => {
      if (resp.userInfo) {
        setUser(resp.userInfo);
      }
    }
  ).catch(
    error => {
      console.error(error)
      loginError = error;
    }
  )
  return (
    loginError
    ? <div>
        <p>Login Error!!!</p>
        <p>{loginError || {}}</p>
      </div>
    : <section className="tt-pagelayout">
        {children}
        <NavigationBar></NavigationBar>
      </section>
   );
}
 
export default ZaloPageLayout;