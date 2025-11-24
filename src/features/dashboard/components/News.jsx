import React from 'react';
import { ChevronRight } from 'lucide-react';
import newsData from '../data/newsData.json';

const News = () => {
    return (
        <div className="bg-white p-6 rounded-lg h-full flex flex-col">
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800">News</h2>
            </div>

            <div className="flex-1 overflow-y-auto space-y-6">
                {newsData.map((item) => (
                    <div key={item.id} className="flex items-start space-x-4 group cursor-pointer">
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>

                        <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1 group-hover:text-blue-600 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-xs text-gray-500 line-clamp-1 mb-1">
                                {item.description}
                            </p>
                            <span className="text-xs text-gray-400 block text-right">
                                {item.time}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                <button className="flex items-center text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                    View all <ChevronRight size={16} className="ml-1" />
                </button>
            </div>
        </div>
    );
};

export default News;
