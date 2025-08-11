import React from "react";
import Hero from "../components/hero";
import Homecards from "../components/Homecards";
import Joblistings from "../components/Joblistings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero />;
      <Homecards />
      <Joblistings isHome = {true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
