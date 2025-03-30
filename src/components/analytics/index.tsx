import MainChart from "./main-chart";
import RevenueStatsCard from "./cards";

const Analytics = () => {
  return (
    <div className="p-6 space-y-6">
      <RevenueStatsCard />
      <MainChart />
    </div>
  );
};

export default Analytics;
