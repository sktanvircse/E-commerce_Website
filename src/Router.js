import React, { lazy, Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./configs/Layout";

const Login = lazy(() => import("./views/auth/Login"));


export default class AppRouter extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="" element={<Navigate to="/login" />} />
                        <Route path="/" element={<Navigate to="/login" />} />
                       <Route path="/login" element={<Login />} />
                          {/*<Route element={<Layout />}>
                            <Route path="/dashboard" element={<Dashboard />} />
                        </Route> */}

                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}

