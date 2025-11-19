import React from "react";
import Card from "../ui/Card";
import Carousal from "../ui/Carousal";

const AppPageLayout = () => {
  return (
    <div className="min-h-screen bg-background p-6 space-y-6 mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Welcome Card - spans 2 columns */}
        <div className="lg:col-span-2">
         <Card/>
        </div>

        {/* Featured App Card */}
        <div className="col-span-1">
         <Carousal/>
        </div>
      </div>
    </div>
  );
};

export default AppPageLayout;
