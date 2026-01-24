import React from "react";
import Layout from "../../components/Layouts/layout";
import Section1 from "./Section1";
import "../../styles/HomeStyle.css";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";

function Home() {
  return (
    <>
      <Layout>
        {/* Home section hero bammer */}
        <Section1 />
        {/* home section about */}
        <Section2 />
        {/* home section Menu */}
        <Section3 />
        {/* home section promotion */}
        <Section4 />
        {/* home section shop */}
        <Section5 />
        {/* home section shop */}
        <Section6 />
        {/* home section contact */}
        <Section7 />
      </Layout>
    </>
  );
}

export default Home;
