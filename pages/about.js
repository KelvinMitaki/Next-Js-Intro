import React, { Component } from "react";
import Layout from "../components/Layout";
import Axios from "axios";

export class about extends Component {
  static async getInitialProps() {
    const res = await Axios.get("https://api.github.com/users/KelvinMitaki");
    return { user: res.data };
  }
  render() {
    console.log(this.props.user);
    const { bio, avatar_url, name } = this.props.user;
    return (
      <Layout title="About Page">
        <h4>{name}</h4>
        <p>{bio} </p>
        <img src={avatar_url} alt={name} />
      </Layout>
    );
  }
}
export default about;
