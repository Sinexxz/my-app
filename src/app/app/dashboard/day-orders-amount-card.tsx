import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DollarSign, Utensils } from "lucide-react";

export default function DayOrdersAmountCard() {
    return (
        <Card>
            <CardHeader className="flex-row items-center space-y-0 justify-between pb-2">
                <CardTitle className="text-base font-semibold">Pedidos (dia)
                </CardTitle>
              <Utensils className="h4 w-4 text-muted-foreground"/>
            </CardHeader>
                <CardContent className="space-y-1">
                    <span className="text-2xl font-bold tracking-tight">
                  12
                    </span>
                <p className="text-xs text-muted-foreground">
                  <span className="text-rose-500 dark:text-rose-400">-4%
                  </span> em relação a ontem
                </p>
                </CardContent>
          </Card>
    )
}