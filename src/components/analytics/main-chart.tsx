"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// region-wise revenue data
const chartData = [
    { date: "2025-03-01", usRevenue: 5800, europeRevenue: 4100, asiaRevenue: 4700 },
    { date: "2025-03-02", usRevenue: 5200, europeRevenue: 450, asiaRevenue: 4900 },
    { date: "2025-03-03", usRevenue: 6100, europeRevenue: 3900, asiaRevenue: 530 },
    { date: "2025-03-04", usRevenue: 4900, europeRevenue: 4300, asiaRevenue: 5100 },
    { date: "2025-03-05", usRevenue: 600, europeRevenue: 4700, asiaRevenue: 4900 },
    { date: "2025-03-06", usRevenue: 5400, europeRevenue: 4000, asiaRevenue: 5200 },
    { date: "2025-03-07", usRevenue: 6200, europeRevenue: 4600, asiaRevenue: 4800 },
    { date: "2025-03-08", usRevenue: 5000, europeRevenue: 400, asiaRevenue: 5500 },
    { date: "2025-03-09", usRevenue: 6300, europeRevenue: 4200, asiaRevenue: 5700 },
    { date: "2025-03-10", usRevenue: 3600, europeRevenue: 450, asiaRevenue: 5100 },
    { date: "2025-03-11", usRevenue: 6100, europeRevenue: 4700, asiaRevenue: 500 },
    { date: "2025-03-12", usRevenue: 530, europeRevenue: 4000, asiaRevenue: 5000 },
    { date: "2025-03-13", usRevenue: 6400, europeRevenue: 4800, asiaRevenue: 5600 },
    { date: "2025-03-14", usRevenue: 510, europeRevenue: 4300, asiaRevenue: 4900 },
    { date: "2025-03-15", usRevenue: 5700, europeRevenue: 4500, asiaRevenue: 5200 },
    { date: "2025-03-16", usRevenue: 5900, europeRevenue: 4200, asiaRevenue: 5300 },
    { date: "2025-03-17", usRevenue: 5500, europeRevenue: 460, asiaRevenue: 5000 },
    { date: "2025-03-18", usRevenue: 6200, europeRevenue: 4000, asiaRevenue: 5700 },
    { date: "2025-03-19", usRevenue: 400, europeRevenue: 4300, asiaRevenue: 500 },
    { date: "2025-03-20", usRevenue: 6600, europeRevenue: 490, asiaRevenue: 5800 },
    { date: "2025-03-21", usRevenue: 5100, europeRevenue: 4500, asiaRevenue: 5000 },
    { date: "2025-03-22", usRevenue: 590, europeRevenue: 4600, asiaRevenue: 5400 },
    { date: "2025-03-23", usRevenue: 5300, europeRevenue: 4000, asiaRevenue: 5200 },
    { date: "2025-03-24", usRevenue: 6400, europeRevenue: 4700, asiaRevenue: 5600 },
    { date: "2025-03-25", usRevenue: 4000, europeRevenue: 4400, asiaRevenue: 500 },
    { date: "2025-03-26", usRevenue: 6000, europeRevenue: 4800, asiaRevenue: 5300 },
    { date: "2025-03-27", usRevenue: 5700, europeRevenue: 4300, asiaRevenue: 500 },
    { date: "2025-03-28", usRevenue: 6500, europeRevenue: 4900, asiaRevenue: 5800 },
    { date: "2025-03-29", usRevenue: 520, europeRevenue: 460, asiaRevenue: 5400 },
    { date: "2025-03-30", usRevenue: 6700, europeRevenue: 5000, asiaRevenue: 5900 },
  ];
  

const chartConfig = {
  usRevenue: {
    label: "US Revenue",
    color: "#111",
  },
  europeRevenue: {
    label: "Europe Revenue",
    color: "#444",
  },
  asiaRevenue: {
    label: "Asia Revenue",
    color: "#888",
  },
} satisfies ChartConfig

const MainChart = () => {
  const [timeRange, setTimeRange] = React.useState("30d");

  // Get the latest date from the dataset
  const latestDate = new Date(chartData[chartData.length - 1].date);

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    let daysToSubtract = 30;

    if (timeRange === "14d") {
      daysToSubtract = 14;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }

    const startDate = new Date(latestDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);

    return date >= startDate;
  });

  return (
    <Card className="shadow-none border-2 p-2">
      <CardHeader className="flex flex-col sm:items-center gap-2 space-y-0 border-b p-2 sm:flex-row">
        <div className="grid flex-1 gap-1 text-left">
          <CardTitle>Region-Wise Revenue</CardTitle>
          <CardDescription>
            Showing revenue from different regions for the selected period
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-md">
          <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="14d" className="rounded-lg">
              Last 2 weeks
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="p-2">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillUS" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#111" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#111" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillEurope" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#444" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#444" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillAsia" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#888" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#888" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="usRevenue"
              type="natural"
              fill="url(#fillUS)"
              stroke="#111"
              stackId="a"
            />
            <Area
              dataKey="europeRevenue"
              type="natural"
              fill="url(#fillEurope)"
              stroke="#444"
              stackId="a"
            />
            <Area
              dataKey="asiaRevenue"
              type="natural"
              fill="url(#fillAsia)"
              stroke="#888"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default MainChart;
