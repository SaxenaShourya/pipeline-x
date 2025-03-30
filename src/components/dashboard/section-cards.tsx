import React from "react";
import { TrendingDown, TrendingUp } from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  Pie,
  Label,
  PieChart,
} from "recharts";

import { Badge } from "@/components/ui/badge";
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

const transactionsData = [
  { month: "Nov", value: 1500 },
  { month: "Dec", value: 1700 },
  { month: "Jan", value: 1600 },
  { month: "Feb", value: 1850 },
  { month: "Mar", value: 1750 },
];

const accountsData = [
  { month: "Nov", value: 220 },
  { month: "Dec", value: 280 },
  { month: "Jan", value: 250 },
  { month: "Feb", value: 210 },
  { month: "Mar", value: 290 },
];

const customersData = [
  { browser: "chrome", visitors: 275, fill: "#1A1A1A" },
  { browser: "safari", visitors: 200, fill: "#333333" },
  { browser: "firefox", visitors: 287, fill: "#4D4D4D" },
  { browser: "edge", visitors: 173, fill: "#666666" },
  { browser: "other", visitors: 190, fill: "#808080" },
];

const customersChartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "#1A1A1A",
  },
  safari: {
    label: "Safari",
    color: "#333333",
  },
  firefox: {
    label: "Firefox",
    color: "#4D4D4D",
  },
  edge: {
    label: "Edge",
    color: "#666666",
  },
  other: {
    label: "Other",
    color: "#808080",
  },
} satisfies ChartConfig;

const transactionsChartConfig = {
  value: {
    label: "Transactions",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

const accountsChartConfig = {
  value: {
    label: "Accounts",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

const SectionCards = () => {
  const totalVisitors = React.useMemo(() => {
    return customersData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* Transactions Revenue Card */}
      <Card className="p-2 shadow-none border-2 flex flex-col justify-between rounded-md">
        <CardHeader className="p-2">
          <div className="flex justify-between items-center">
            <div>
              <CardDescription>Total Transactions</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums">
                $1,750.00
              </CardTitle>
            </div>
            <Badge
              variant="outline"
              className="bg-neutral-900 text-neutral-100"
            >
              -9.8% <TrendingDown className="h-4 w-4 ml-1" />
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-2">
          <ChartContainer config={transactionsChartConfig}>
            <LineChart
              accessibilityLayer
              data={transactionsData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                dataKey="value"
                type="natural"
                stroke="var(--color-primary)"
                strokeWidth={2}
                dot={{
                  fill: "var(--color-primary)",
                }}
                activeDot={{
                  r: 6,
                }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Active Accounts Card */}
      <Card className="p-2 shadow-none border-2 flex flex-col justify-between rounded-md">
        <CardHeader className="p-2 ">
          <div className="flex justify-between items-center">
            <div>
              <CardDescription>Active Accounts</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums">
                290
              </CardTitle>
            </div>
            <Badge
              variant="outline"
              className="bg-neutral-900 text-neutral-100"
            >
              +5.6% <TrendingUp className="h-4 w-4 ml-1" />
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-2">
          <ChartContainer config={accountsChartConfig}>
            <LineChart data={accountsData} margin={{ left: 12, right: 12 }}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                dataKey="value"
                type="natural"
                stroke="var(--color-primary)"
                strokeWidth={2}
                dot={{
                  fill: "var(--color-primary)",
                }}
                activeDot={{
                  r: 6,
                }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* New Customers Card */}
      <Card className="shadow-none border-2 flex flex-col p-2 gap-0 rounded-md">
        <CardHeader className="items-center pl-2 pt-2">
          <CardDescription>New Customers</CardDescription>
          <CardTitle>March 2025</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 p-0">
          <ChartContainer
            config={customersChartConfig}
            className="mx-auto aspect-square max-h-[200px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={customersData}
                dataKey="visitors"
                nameKey="browser"
                innerRadius={45}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-2xl font-bold"
                          >
                            {totalVisitors.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 18}
                            className="fill-muted-foreground"
                          >
                            Visitors
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default SectionCards;
