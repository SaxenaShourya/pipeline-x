import { TrendingDown, TrendingUp } from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  Bar,
  BarChart,
  YAxis,
  RadialBarChart,
  PolarGrid,
  RadialBar,
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

// Updated data for Revenue Analytics
const revenueData = [
  { month: "Nov", value: 4970 },
  { month: "Dec", value: 3650 },
  { month: "Jan", value: 5770 },
  { month: "Feb", value: 5200 },
  { month: "Mar", value: 6250 },
];

const revenueBreakdownData = [
  { source: "Product Sales", revenue: 3200 },
  { source: "Subscriptions", revenue: 1500 },
  { source: "Affiliates", revenue: 800 },
  { source: "Ads", revenue: 1200 },
];

const customerSegments = [
  { segment: "New Customers", customers: 400, fill: "#111" },
  { segment: "Returning Customers", customers: 320, fill: "#555555" },
  { segment: "VIP Customers", customers: 150, fill: "#808080" },
];

// Chart Configurations
const revenueChartConfig = {
  value: {
    label: "Revenue",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

const revenueBreakdownConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const customerSegmentsConfig = {
  customers: {
    label: "Customers",
  },
  "New Customers": {
    label: "New Customers",
    color: "#111",
  },
  "Returning Customers": {
    label: "Returning Customers",
    color: "#555555",
  },
  "VIP Customers": {
    label: "VIP Customers",
    color: "#808080",
  },
} satisfies ChartConfig;

const SectionCards = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Total Revenue Card */}
      <Card className="p-2 shadow-none border-2 flex flex-col justify-between rounded-lg bg-background">
        <CardHeader className="p-2">
          <div className="flex justify-between items-center">
            <div>
              <CardDescription>Monthly Recurring Revenue</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums">
                $6,250.00
              </CardTitle>
            </div>
            <Badge
              variant="outline"
              className="bg-primary text-primary-foreground"
            >
              +4.8% <TrendingUp className="h-4 w-4 ml-1" />
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-2">
          <ChartContainer config={revenueChartConfig}>
            <LineChart
              accessibilityLayer
              data={revenueData}
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

      {/* Revenue Breakdown - Horizontal Bar Chart */}
      <Card className="p-2 shadow-none border-2 flex flex-col justify-between rounded-lg bg-background">
        <CardHeader className="p-2">
          <div className="flex justify-between items-center">
            <div>
              <CardDescription>Revenue Breakdown</CardDescription>
              <CardTitle>By Source</CardTitle>
            </div>
            <Badge
              variant="outline"
              className="bg-primary text-primary-foreground"
            >
              -7.8% <TrendingDown className="h-4 w-4 ml-1" />
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <ChartContainer config={revenueBreakdownConfig}>
            <BarChart
              data={revenueBreakdownData}
              layout="horizontal"
              margin={{ left: 10 }}
              accessibilityLayer
            >
              <CartesianGrid vertical={false} />
              <YAxis type="number" hide />
              <XAxis
                dataKey="source"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="revenue" fill="hsl(var(--primary)" radius={5} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Customer Segments - Radial Chart */}
      <Card className="p-2 shadow-none border-2 flex flex-col justify-between rounded-lg bg-background">
        <CardHeader className="items-center p-2">
          <div className="flex justify-between items-center">
            <div>
              <CardDescription>Customer Segments</CardDescription>
              <CardTitle>March 2025</CardTitle>
            </div>
            <Badge
              variant="outline"
              className="bg-primary text-primary-foreground"
            >
              +6.5% <TrendingUp className="h-4 w-4 ml-1" />
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="flex-1 p-0">
          <ChartContainer
            config={customerSegmentsConfig}
            className="mx-auto aspect-square max-h-[200px]"
          >
            <RadialBarChart
              data={customerSegments}
              innerRadius={30}
              outerRadius={110}
            >
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel nameKey="segment" />}
              />
              <PolarGrid gridType="circle" />
              <RadialBar dataKey="customers" />
            </RadialBarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default SectionCards;
