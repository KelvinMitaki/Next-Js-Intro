import React from "react";
import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import nProgress from "nprogress";

Router.onRouteChangeStart = url => {
  console.log(url);
  nProgress.start();
};
Router.onRouteChangeComplete = () => nProgress.done();
Router.onRouteChangeError = () => nProgress.done();
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
      <Head>
        <title>nextPortForlio</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossorigin="anonymous"
        />
      </Head>
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
