import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = ({ title }) => {
  return (
    <div>
      <li>
        <Link href={`/post?title=${title}`}>
          <a>{title} Post</a>
        </Link>
      </li>
    </div>
  );
};

const blog = () => {
  return (
    <Layout title="My Blog">
      <ul>
        <PostLink title="React" />
        <PostLink title="Angular" />
        <PostLink title="Vue" />
      </ul>
    </Layout>
  );
};

export default blog;
