import React from "react";
import Layout from "../components/Layout";
import { withRouter } from "next/router";

const post = props => {
  return (
    <Layout title={props.router.query.title}>
      <p style={{ width: "80vw" }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
        incidunt obcaecati consectetur maiores rem sunt itaque, libero ex magni
        mollitia, veritatis accusamus et quasi molestias unde pariatur provident
        iure? Nesciunt hic debitis nam quos quod labore quas earum totam
        dolorum, culpa doloribus fugit temporibus, omnis cumque est beatae
        aperiam illum.
      </p>
    </Layout>
  );
};

export default withRouter(post);
