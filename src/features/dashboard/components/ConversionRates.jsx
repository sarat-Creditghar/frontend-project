import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
import data from '../data/conversionRatesData.json';

const ConversionRates = () => {
    return (
        <div className="bg-white p-6 rounded-lg h-full flex flex-col">
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800">Conversion rates</h2>
                <p className="text-sm text-gray-500">(+43%) than last year</p>
            </div>

            <div className="flex-1 w-full min-h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        layout="vertical"
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        barGap={0}
                        barCategoryGap="20%"
                    >
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={true} stroke="#eee" />
                        <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                        <YAxis
                            dataKey="country"
                            type="category"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6b7280', fontSize: 14, fontWeight: 500 }}
                            width={80}
                        />
                        <Tooltip
                            cursor={{ fill: 'transparent' }}
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                        />
                        <Bar dataKey="2023" fill="#2e1065" radius={[0, 4, 4, 0]} barSize={10}>
                            <LabelList dataKey="2023" position="right" fill="#2e1065" fontSize={12} fontWeight="bold" />
                        </Bar>
                        <Bar dataKey="2024" fill="#d8b4fe" radius={[0, 4, 4, 0]} barSize={10}>
                            <LabelList dataKey="2024" position="right" fill="#4b5563" fontSize={12} fontWeight="bold" />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ConversionRates;
