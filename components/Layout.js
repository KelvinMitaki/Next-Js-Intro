import React from "react";
import Link from "next/link";
const Layout = ({ children, title }) => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <header>{title}</header>
      {children}
      <footer>&copy; {new Date().getFullYear()}</footer>
    </div>
  );
};

export default Layout;
