import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./configs/Layout";

const Login = lazy(() => import("./views/auth/Login"));
const Home = lazy(() => import("./views/pages/index"));
const Products = lazy(() => import("./views/pages/Products/Products"));
const Items = lazy(() => import("./views/pages/Items/Items"));

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<Login />} />
                    <Route element={<Layout />}>
                        <Route path="/home" element={<Home />} />
                        
                        <Route path="/products" element={<Products />} />
                        <Route path="/products/:id" element={<Products />} />

                        <Route path="/items" element={<Items />} />
                        <Route path="/items/:id" element={<Items />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default AppRouter;
