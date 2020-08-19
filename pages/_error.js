import React from "react";
import Layout from "../components/Layout";

const _error = ({ statusCode }) => {
  return (
    <Layout title="Error!!!">
      {statusCode ? (
        `Could not load user data status code: ${statusCode}`
      ) : (
        <h5>couldn't get that page, sorry</h5>
      )}
    </Layout>
  );
};

export default _error;
