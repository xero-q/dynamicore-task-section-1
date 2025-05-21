import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex justify-center items-center">
        <Nav />
      </header>
      <main className="flex-1 flex justify-center items-center">
        <Outlet />
      </main>

      <footer className="h-[100px] flex justify-center items-center bg-blue-400 text-white font-bold">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <a href="https://github.com/xero-q" target="_blank">
            xero-q
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
