import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const initialData = [
    { year: 1, revenue: 100 },
    { year: 2, revenue: 115 },
    { year: 3, revenue: 132.25 },
    { year: 4, revenue: 152.088 },
    { year: 5, revenue: 174.901 }
];

function App() {
    const [growthRate, setGrowthRate] = useState(0.15); // 15% default growth

    const calculateFutureData = () => {
        return initialData.map((entry, index) => ({
            year: entry.year,
            revenue: initialData[0].revenue * Math.pow(1 + growthRate, index),
        }));
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>Revenue Growth Graph</h2>
            <label>Growth Rate (%): </label>
            <input
                type="number"
                value={growthRate * 100}
                onChange={(e) => setGrowthRate(e.target.value / 100)}
            />
            <ResponsiveContainer width="80%" height={400}>
                <LineChart data={calculateFutureData()}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default App;
