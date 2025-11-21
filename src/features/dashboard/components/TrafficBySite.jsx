
import trafficData from "../data/trafficBySiteData.json";
import { iconRegistry } from "../../../config/iconRegistry";

const TrafficBySite = () => {
    const { title, sites } = trafficData.trafficBySite;

    return (
        <div className="bg-white p-6 rounded-xl  h-full">
            <h3 className="text-xl font-bold text-gray-800 mb-6">{title}</h3>
            <div className="grid grid-cols-2 gap-4">
                {sites.map((site) => {
                    const Icon = iconRegistry[site.icon];
                    return (
                        <div
                            key={site.id}
                            className="border border-gray-100 rounded-xl p-6 flex flex-col items-center justify-center gap-2 hover:shadow-md transition-shadow"
                        >
                            <Icon
                                className="w-8 h-8 mb-1"
                                style={{ color: site.color }}
                                strokeWidth={2} 
                            />
                            <span className="text-2xl font-bold text-gray-800">
                                {site.value}
                            </span>
                            <span className="text-gray-500 text-sm font-medium">
                                {site.name}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TrafficBySite;
