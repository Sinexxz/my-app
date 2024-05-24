import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import MonthRevenueCard from "./month-revenue-card";
import MonthOrdersAmountCard from "./month-orders-amount-card";
import DayOrdersAmountCard from "./day-orders-amount-card";
import MonthCaceledOrdersAmountCard from "./month-canceled-orders-amount-card";
import RevenueChart from "./revenue-chart";

export default function Home() {
  return (

    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
            <MonthRevenueCard />
            <MonthOrdersAmountCard />
            <DayOrdersAmountCard />
            <MonthCaceledOrdersAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
        </div>
    </div>
  )
}


