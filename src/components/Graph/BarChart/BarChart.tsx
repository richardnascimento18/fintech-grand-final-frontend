"use client";

import { LineChartObject } from "@/utils";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface BarChartGraphProps {
  data: LineChartObject[];
}

export function BarChartGraph({ data }: BarChartGraphProps) {
  if (!data || data.length === 0) return null;

  const totalReceita = data.reduce((acc, cur) => acc + (cur.receita as number || 0), 0);
  const totalGasto = data.reduce((acc, cur) => acc + (cur.gasto as number || 0), 0);
  const chartData = [{ name: "Totais", Receita: totalReceita, Gasto: totalGasto }];

  return (
    <ResponsiveContainer width="100%" aspect={1.618}>
      <BarChart data={chartData} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Receita" fill="#90b800" barSize={60} />
        <Bar dataKey="Gasto" fill="#EE2A2E" barSize={60} />
      </BarChart>
    </ResponsiveContainer>
  );
}
