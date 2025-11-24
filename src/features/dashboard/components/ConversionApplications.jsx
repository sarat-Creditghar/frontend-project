import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { User, Mail } from 'lucide-react';
import data from '../data/conversionApplicationsData.json';

const ConversionApplications = () => {
    return (
        <div className="h-full flex flex-col gap-4">
            {data.map((item) => (
                <div key={item.id} className={`flex-1 rounded-2xl p-6 relative overflow-hidden ${item.color} flex items-center justify-between`}>
                    <div className="relative z-10 flex items-center gap-4">
                        <div className="w-20 h-20 relative flex items-center justify-center">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={[
                                            { value: item.percentage },
                                            { value: 100 - item.percentage },
                                        ]}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={28} 
                                        outerRadius={36}
                                        startAngle={90}
                                        endAngle={-270}
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        <Cell key={`cell-0`} fill="#fff" fillOpacity={0.8} />
                                        <Cell key={`cell-1`} fill="#fff" fillOpacity={0.1} />
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="absolute inset-0 flex items-center justify-center font-bold text-sm">
                                {item.percentage}%
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-2xl font-bold">{item.value}</span>
                            <span className="text-sm opacity-80">{item.title}</span>
                        </div>
                    </div>

                    <div className="relative z-10 opacity-20">
                        {item.icon === 'user' ? <User size={64} /> : <Mail size={64} />}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ConversionApplications;
