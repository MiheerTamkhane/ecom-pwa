import { Routes, Route, Navigate } from "react-router-dom";
// import {
//   RegisterPage,
//   HomePage,
//   ProfilePage,
//   BookmarkPage,
//   ExplorePage,
// } from "../pages";
// import { Feed } from "../components";
// import { PrivateRoutes } from "./PrivateRoutes";
// import Mockman from "mockman-js";
import { ProductListingPage } from "../pages/ProductListingPage";
export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/products" replace={true} />} />
      <Route path="/products" element={<ProductListingPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
