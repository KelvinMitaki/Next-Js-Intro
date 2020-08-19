import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const blog = () => {
  return (
    <Layout title="My Blog">
      <ul>
        <li>
          <Link href="/post?title=React">
            <a>React Post</a>
          </Link>
        </li>
      </ul>
    </Layout>
  );
};

export default blog;
