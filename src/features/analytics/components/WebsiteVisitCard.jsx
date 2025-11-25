import React from "react";
import websiteData from "../data/websitevistidata.json";
import BarChartDiagram from "../../../shared/components/charts/BarChartDiagram";

const WebsiteVisitCard = () => {
  const { title, subtitle, teams, monthlyData } = websiteData.websiteVisits;

  return (
    <div className="bg-white p-6 rounded-xl h-full flex flex-col shadow-sm">
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-500 text-sm font-medium">
          ({subtitle})
        </p>
      </div>

      {/* Legend */}
      <div className="flex justify-end gap-6 mb-4">
        {teams.map((team, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: team.color }}
            ></div>
            <span className="text-gray-600 font-medium text-sm">{team.name}</span>
          </div>
        ))}
      </div>

      <div className="grow min-h-[300px]">
        <BarChartDiagram data={monthlyData} teams={teams} />
      </div>
    </div>
  );
};

export default WebsiteVisitCard;