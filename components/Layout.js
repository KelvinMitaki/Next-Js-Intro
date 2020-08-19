import React from "react";
import Link from "next/link";
const Layout = ({ children, title }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <header
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          padding: "1em",
          fontSize: "1.2rem",
          background: "indigo"
        }}
      >
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/hireme">
          <a>Hire Me</a>
        </Link>
      </header>
      <h1>{title}</h1>
      {children}
      <footer>&copy; {new Date().getFullYear()}</footer>
      <style jsx>
        {`
          header a {
            color: darkgrey;
            text-decoration: none;
          }
          header a:hover {
            font-weight: bold;
            color: lightgrey;
          }
          footer {
            padding: 1em;
          }
        `}
      </style>

      <style global jsx>
        {`
          body {
            margin: 0;
            font-size: 110%;
            background: #fofofo;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
