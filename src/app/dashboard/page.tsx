"use client";
import { useState } from "react";
import { Home } from "lucide-react";
import { BalanceCard } from "@/components/balanceCard";
import { StatsCard } from "@/components/statsCard";
import { TimeFilters } from "@/components/timeFilter";
import { IncomeChart } from "@/components/incomChart";
import { DailySellingChart } from "@/components/dailySelling";
import { BestDishes } from "@/components/bestDishes";

const balanceData = {
  "Today": {
    totalBalance: "₹30,000",
    income: { amount: "₹4,000", change: "(+20% increase)", isPositive: true },
    expense: { amount: "₹4,000", change: "(+10% increase)", isPositive: true },
  },
  "This Week": {
    totalBalance: "₹4,50,000",
    income: { amount: "₹4,000", change: "(+20% increase)", isPositive: true },
    expense: { amount: "₹4,000", change: "(+10% increase)", isPositive: true },
  },
  "This Month": {
    totalBalance: "₹6,50,000",
    income: { amount: "₹4,000", change: "(+20% increase)", isPositive: true },
    expense: { amount: "₹4,000", change: "(+10% increase)", isPositive: true },
  },
  "This Year": {
    totalBalance: "₹10,50,000",
    income: { amount: "₹4,000", change: "(+20% increase)", isPositive: true },
    expense: { amount: "₹4,000", change: "(+10% increase)", isPositive: true },
  },
};

const Index = () => {
  const [activeFilter, setActiveFilter] = useState("This Year");

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="container !mx-auto !px-4 !py-4 lg:!px-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-2">
              <Home className="w-6 h-6 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">Manager Dashboard</h1>
            </div>
            <TimeFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          </div>
        </div>
      </div>
      <div className="container !mx-auto !px-4 !py-6 lg:!px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         
          <StatsCard title="Total Income">
            <IncomeChart />
          </StatsCard>

          
          <StatsCard title="Total Balance">
            <BalanceCard data={balanceData[activeFilter as keyof typeof balanceData]} />
          </StatsCard>

          <StatsCard title="Daily Selling">
            <DailySellingChart />
          </StatsCard>

          <StatsCard title="Best Dishes">
            <BestDishes />
          </StatsCard>
        </div>
      </div>
    </div>
  );
};

export default Index;