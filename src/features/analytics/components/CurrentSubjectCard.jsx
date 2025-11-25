
import pieData from "../data/piechartanalyticdata.json";
import SpecifiedDomainRadarChart from "./SpecifiedDomainRadarChart";


function CurrentSubjectCard() {
  const { title, segments } = pieData.currentVisits;

  return (
    <div className="bg-white p-6 rounded-xl h-full flex flex-col justify-between shadow-sm">
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>

      <div className="grow min-h-[250px]">
       <SpecifiedDomainRadarChart/>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-6 mt-4 border-t border-dashed border-gray-200 pt-4">
        {segments.map((entry, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            ></div>
            <span className="text-gray-600 font-medium">{entry.region}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurrentSubjectCard;