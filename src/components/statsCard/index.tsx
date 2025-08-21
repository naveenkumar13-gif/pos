import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const StatsCard = ({ title, children, className = "" }: StatsCardProps) => {
  return (
    <Card className={`shadow-sm border-0 ${className} !p-4`}>
      <CardHeader className="!pb-3">
        <CardTitle className="text-lg font-semibold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="">
        {children}
      </CardContent>
    </Card>
  );
};