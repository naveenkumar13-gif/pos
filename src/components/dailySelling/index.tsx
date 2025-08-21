import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", amount: 3500 },
  { day: "Tue", amount: 4200 },
  { day: "Wed", amount: 3000 },
  { day: "Thu", amount: 3800 },
  { day: "Fri", amount: 4500 },
  { day: "Sat", amount: 3200 },
  { day: "Sun", amount: 4000 },
  { day: "Mon", amount: 3700 },
  { day: "Tue", amount: 4100 },
  { day: "Wed", amount: 4800 },
  { day: "Thu", amount: 3600 },
];

export const DailySellingChart = () => {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis 
            dataKey="day" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => `₹${value/1000}k`}
          />
          <Bar 
            dataKey="amount" 
            fill="#ef4444" 
            radius={[4, 4, 0, 0]}
            maxBarSize={40}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};