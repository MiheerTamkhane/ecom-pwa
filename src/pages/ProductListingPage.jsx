import React from "react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { ProductListing } from "../components/ProductListing";
export const ProductListingPage = () => {
  return (
    <div className="h-full text-2xl text-black flex">
      <div className="h-full">
        <Sidebar />
      </div>
      <div className="w-full p-4 overflow-scroll overflow-x-hidden">
        <ProductListing />
      </div>
    </div>
  );
};
