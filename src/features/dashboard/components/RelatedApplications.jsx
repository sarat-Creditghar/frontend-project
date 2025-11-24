import React from 'react';
import { Download, HardDrive, Star, FileText, Globe, Image, FileType, LayoutGrid } from 'lucide-react';
import relatedApps from '../data/relatedApplicationsData.json';

const iconMap = {
    microsoft: LayoutGrid,
    opera: Globe,
    adobe: FileText,
    joplin: FileType,
    topaz: Image,
};

const RelatedApplications = () => {
    return (
        <div className="bg-white p-4 rounded-lg h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Related applications</h2>
            </div>

            <div className="flex space-x-4 mb-6 text-sm text-gray-500 border-b border-gray-100 pb-2">
                <button className="font-semibold text-gray-900 border-b-2 border-gray-900 pb-2 -mb-2.5">Top 7 days</button>
                <button className="hover:text-gray-700">Top 30 days</button>
                <button className="hover:text-gray-700">All times</button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                {relatedApps.map((app) => {
                    const IconComponent = iconMap[app.icon] || LayoutGrid;
                    const isFree = app.price === 'Free';

                    return (
                        <div key={app.id} className="flex items-start space-x-3 group cursor-pointer">
                            <div className={`p-3 rounded-xl ${app.icon === 'microsoft' ? 'bg-blue-50 text-blue-600' :
                                    app.icon === 'opera' ? 'bg-red-50 text-red-600' :
                                        app.icon === 'adobe' ? 'bg-red-50 text-red-700' :
                                            app.icon === 'joplin' ? 'bg-blue-50 text-blue-500' :
                                                'bg-indigo-50 text-indigo-600'
                                }`}>
                                <IconComponent size={24} />
                            </div>

                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-medium text-gray-900 text-sm">{app.name}</h3>
                                    <span className={`text-xs px-2 py-0.5 rounded font-medium ${isFree ? 'bg-gray-100 text-gray-600' : 'bg-green-100 text-green-700'
                                        }`}>
                                        {app.price}
                                    </span>
                                </div>

                                <div className="flex items-center space-x-3 mt-1 text-xs text-gray-500">
                                    <div className="flex items-center space-x-1">
                                        <Download size={12} />
                                        <span>{app.downloads}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <HardDrive size={12} />
                                        <span>{app.size}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Star size={12} className="text-yellow-400 fill-yellow-400" />
                                        <span>{app.rating}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RelatedApplications;
