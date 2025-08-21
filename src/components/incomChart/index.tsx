"use client";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Foodies", value: 45, color: "#ef4444" },
  { name: "Cold Drinks", value: 40, color: "#1f2937" },
  { name: "Others", value: 15, color: "#f97316" },
];

export const IncomeChart = () => {
  return (
    <div className="h-64 w-full ">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
            wrapperStyle={{ fontSize: "14px" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
