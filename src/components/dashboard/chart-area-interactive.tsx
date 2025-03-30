import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const salesData = [
  { date: "2024-03-01", revenue: 5000, profit: 1500 },
  { date: "2024-03-02", revenue: 7200, profit: 2100 },
  { date: "2024-03-03", revenue: 6100, profit: 1800 },
  { date: "2024-03-03", revenue: 8400, profit: 2500 },
  { date: "2024-03-05", revenue: 9200, profit: 3000 },
  { date: "2024-03-06", revenue: 7600, profit: 2300 },
  { date: "2024-03-07", revenue: 8300, profit: 2700 },
  { date: "2024-03-08", revenue: 10300, profit: 3500 },
  { date: "2024-03-09", revenue: 4800, profit: 1200 },
  { date: "2024-03-10", revenue: 6900, profit: 2000 },
  { date: "2024-03-11", revenue: 8800, profit: 2900 },
  { date: "2024-03-12", revenue: 7500, profit: 2600 },
  { date: "2024-03-13", revenue: 9100, profit: 3100 },
  { date: "2024-03-14", revenue: 6200, profit: 1900 },
  { date: "2024-03-15", revenue: 5800, profit: 1700 },
  { date: "2024-03-16", revenue: 6100, profit: 2000 },
  { date: "2024-03-17", revenue: 11500, profit: 4100 },
  { date: "2024-03-18", revenue: 9400, profit: 3300 },
  { date: "2024-03-19", revenue: 7300, profit: 2400 },
  { date: "2024-03-20", revenue: 4600, profit: 1400 },
  { date: "2024-03-21", revenue: 6200, profit: 2000 },
  { date: "2024-03-22", revenue: 7200, profit: 2500 },
  { date: "2024-03-23", revenue: 6300, profit: 2200 },
  { date: "2024-03-24", revenue: 9900, profit: 3600 },
  { date: "2024-03-25", revenue: 7800, profit: 2800 },
  { date: "2024-03-26", revenue: 5100, profit: 1600 },
  { date: "2024-03-27", revenue: 10500, profit: 4000 },
  { date: "2024-03-28", revenue: 6700, profit: 2300 },
  { date: "2024-03-29", revenue: 8900, profit: 3200 },
  { date: "2024-03-30", revenue: 11800, profit: 4500 },
];

const chartConfig = {
  revenue: {
    label: "Revenue ($)",
    color: "hsl(var(--chart-1))",
  },
  profit: {
    label: "Profit ($)",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const ChartAreaInteractive = () => {
  const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>("revenue");

  const total = React.useMemo(
    () => ({
      revenue: salesData.reduce((acc, curr) => acc + curr.revenue, 0),
      profit: salesData.reduce((acc, curr) => acc + curr.profit, 0),
    }),
    []
  );

  return (
    <Card className="p-0 shadow-none border-2 rounded-md">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b !p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-4 pt-4 lg:pt-0 lg:pb-0 pb-2">
          <CardTitle>Sales Overview</CardTitle>
          <CardDescription>
            Showing total revenue and profit for the last month
          </CardDescription>
        </div>
        <div className="flex">
          {["revenue", "profit"].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6 cursor-pointer"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  ${total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:px-4">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={salesData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="sales"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default ChartAreaInteractive;