import React from "react";
import AnalyticCard from "../components/AnalyticCard";
import analyticData from "../data/analyticCards.json";
import Visitpiechart from "../components/Visitpiechart";
import WebsiteVisitCard from "../components/WebsiteVisitCard";
import CurrentSubjectCard from "../components/CurrentSubjectCard";
import OrderTimeline from "../components/OrderTimeline";
import TrafficBySite from "../components/TrafficBySite";
import News from "../components/News";
import ConversionRates from "../components/ConversionRates";
import Tasks from "../components/Tasks";

const AnalyticPage = () => {
  return (
    <div
      className="w-full p-6 grid gap-6
                grid-cols-1 
                sm:grid-cols-2 
                lg:grid-cols-8"
    >
      {analyticData.cards.map((card) => (
        <div key={card.id} className="col-span-1 lg:col-span-2">
          <AnalyticCard data={card} />
        </div>
      ))}

      <div className=" border rounded-lg  sm:col-span-full lg:col-span-3   bg-accent">
        <Visitpiechart />
      </div>
      <div className=" border border-green-300 rounded-lg sm:col-span-1 lg:col-span-5 w  bg-accent">
        <WebsiteVisitCard />
      </div>
      <div className=" border border-green-300 rounded-lg sm:col-span-1 lg:col-span-5 w  bg-accent">
        <ConversionRates/>
      </div>
      <div className=" border rounded-lg  sm:col-span-full lg:col-span-3   bg-accent">
        <CurrentSubjectCard />
      </div>
      <div className=" border border-green-300 rounded-lg sm:col-span-1 lg:col-span-5 w  bg-accent">
        {<News/>}
      </div>
      <div className=" bg-white border rounded-lg  sm:col-span-full lg:col-span-3 flex  justify-center">
        <OrderTimeline />
      </div>
      <div className=" bg-white border rounded-lg  sm:col-span-full lg:col-span-3 flex  justify-center">
        <TrafficBySite />
      </div>
      <div className=" bg-white border rounded-lg  sm:col-span-full lg:col-span-5 flex  justify-center">
        <Tasks/>
      </div>
    </div>
  );
};

export default AnalyticPage;
