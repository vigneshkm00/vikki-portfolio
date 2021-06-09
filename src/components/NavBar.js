import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 py-3 mr-3 text-red-100 hover:text-blue-800 text-4xl font-bold cursive tracking-widest"
          >
            Vikki
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex intems-center py-3 px-3 my-6 rounded text-red-200 hover:text-blue-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex intems-center py-3 px-3 my-6 rounded text-red-200 hover:text-blue-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Blog Posts
          </NavLink>

          <NavLink
            to="/about"
            className="inline-flex intems-center py-3 px-3 my-6 rounded text-red-200 hover:text-blue-800"
            activeClassName="text-red-100 bg-red-700"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://twitter.com/VIGNESH16164923"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/vignesh-km-946a2a151/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.instagram.com/__.vikki.___/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
