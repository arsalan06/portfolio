import React from "react";
import Header from "./header";
import MainBanner from "@/components/MainBanner";
import MySkills from "@/components/MySkills";
function Dashboard() {
  return (
    <div className="pl-20 pr-20 bg-custombgcolor">
      {/* @ts-ignore */}
      <MainBanner />
      {/* @ts-ignore */}
      <MySkills />
    </div>
  );
}

export default Dashboard;
