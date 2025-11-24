import React from 'react';
import { Heart, Trophy, User } from 'lucide-react';
import authorsData from '../data/topAuthorsData.json';

const TopAuthors = () => {
    return (
        <div className="bg-white p-4 rounded-lg h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-800">Top authors</h2>
            </div>

            <div className="flex-1 overflow-y-auto space-y-6">
                {authorsData.map((author) => (
                    <div key={author.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                                {/* Placeholder for avatar since we don't have the specific 3D images */}
                                <User className="text-gray-400" size={24} />
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-900 text-sm">{author.name}</h3>
                                <div className="flex items-center space-x-1 text-gray-500 text-xs mt-0.5">
                                    <Heart size={12} className="fill-gray-500" />
                                    <span>{author.likes}</span>
                                </div>
                            </div>
                        </div>

                        <div className={`p-2 rounded-full ${author.trophyColor}`}>
                            <Trophy size={20} className="fill-current" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopAuthors;
