import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

const IndexLayout = () => {
  return (
    <div>
      <div className="flex w-full">
        <div className="z-10 min-w-70  h-150 hidden md:block">
          <Sidebar />
        </div>

        <div className="main w-full">
          <div className="sticky top-0 w-full z-10 bg-white md:bg-white/10 backdrop-blur-3xl">
            <Navbar />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default IndexLayout;
