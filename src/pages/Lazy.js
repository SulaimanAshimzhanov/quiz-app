import React from "react";

const Login = React.lazy(() => import("../apps/Auth/Login/Login"));
const Main = React.lazy(() => import("../apps/Layout/main/Main"));

export const AuthPages = {
    Login
};

export const LayoutPages = {
    Main
};

