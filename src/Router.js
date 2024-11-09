import React, { lazy, Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./configs/Layout";

const FirstPage = lazy(() => import("./views/pages/index"));


export default class AppRouter extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="" element={<Navigate to="/index" />} />
                        <Route path="/" element={<Navigate to="/index" />} />
                       <Route path="/index" element={<FirstPage />} />
                          {/*<Route element={<Layout />}>
                            <Route path="/dashboard" element={<Dashboard />} />
                        </Route> */}

                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}

