import React from "react";
import FileCard from "../components/FileCard";
import Layout from "./../components/Layout";

const Homepage = () => {
  return (
    <Layout>
      <FileCard name="test" size="23" url="3545" type="IMAGE" />
    </Layout>
  );
};

export default Homepage;
