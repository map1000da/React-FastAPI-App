//Outletコンポーネントが親コンポーネントで子ルートをレンダリングするためのコンポーネント

import { memo, VFC } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { HomeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router: VFC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Outlet />}>
          {HomeRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<HeaderLayout>{route.children}</HeaderLayout>}
            ></Route>
          ))}
        </Route>
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </LoginUserProvider>
  );
});
