import React from 'react';
import { Smartphone, Monitor, Apple } from 'lucide-react'; // Using generic icons for platforms
import countriesData from '../data/topInstalledCountriesData.json';

const TopInstalledCountries = () => {
    return (
        <div className="bg-white p-4 rounded-lg h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-800">Top installed countries</h2>
            </div>

            <div className="flex-1 overflow-y-auto space-y-6">
                {countriesData.map((item) => (
                    <div key={item.id} className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-3 w-1/4">
                            <span className="text-2xl">{item.flag}</span>
                            <span className="font-medium text-gray-700">{item.country}</span>
                        </div>

                        <div className="flex items-center space-x-2 text-gray-600 w-1/4 justify-center">
                            <Smartphone size={16} className="text-gray-500" />
                            <span>{item.android}</span>
                        </div>

                        <div className="flex items-center space-x-2 text-gray-600 w-1/4 justify-center">
                            <Monitor size={16} className="text-gray-500" />
                            <span>{item.windows}</span>
                        </div>

                        <div className="flex items-center space-x-2 text-gray-600 w-1/4 justify-end">
                            <Apple size={16} className="text-gray-500" />
                            <span>{item.apple}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopInstalledCountries;
