import { TrendingUp, TrendingDown } from "lucide-react";

interface BalanceData {
  totalBalance: string;
  income: { amount: string; change: string; isPositive: boolean };
  expense: { amount: string; change: string; isPositive: boolean };
}

interface BalanceCardProps {
  data: BalanceData;
}

export const BalanceCard = ({ data }: BalanceCardProps) => {
  return (
    <div className="!space-y-6">
      <div className="text-center">
        <div className="text-3xl font-bold text-success">{data.totalBalance}</div>
      </div>
      
      <div className="!space-y-4">
        <div className="flex items-center justify-between p-3 bg-secondary/10 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-secondary-foreground" />
            </div>
            <div>
              <div className="font-medium text-sm">Total Income</div>
              <div className="font-semibold">{data.income.amount}</div>
            </div>
          </div>
          <div className={`text-sm ${data.income.isPositive ? 'text-success' : 'text-destructive'}`}>
            {data.income.change}
          </div>
        </div>

        <div className="flex items-center justify-between !p-3 bg-primary/10 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <TrendingDown className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <div className="font-medium text-sm">Total Expense</div>
              <div className="font-semibold">{data.expense.amount}</div>
            </div>
          </div>
          <div className={`text-sm ${data.expense.isPositive ? 'text-success' : 'text-destructive'}`}>
            {data.expense.change}
          </div>
        </div>
      </div>
    </div>
  );
};