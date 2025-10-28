"use client";

import { LineChartObject } from "@/utils";
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface LineChartGraphProps {
    data: LineChartObject[];
}

export function LineChartGraph({ data }: LineChartGraphProps) {
  if (!data || data.length === 0) return null;

  const lineKeys = Object.keys(data[0]).filter((key) => key !== "title" && typeof data[0][key] === "number");

  return (
    <ResponsiveContainer width="100%" aspect={1.618}>
      <AreaChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="title" />
        <YAxis />
        <Tooltip />
        <Legend />
        {lineKeys.map((key, index) => (
          <Area
            key={key}
            type="monotone"
            dataKey={key}
            stroke={index % 2 === 0 ? "#90b800" : "#EE2A2E"}
            fill={index % 2 === 0 ? "#90b800" : "#EE2A2E"}
            activeDot={{ r: 8 }}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
}