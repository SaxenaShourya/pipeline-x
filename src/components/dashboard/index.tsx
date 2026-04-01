import { Suspense, lazy } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy Load Components
const SectionCards = lazy(() => import("./section-cards"));
const ChartAreaInteractive = lazy(() => import("./chart-area-interactive"));
const TopSellingProducts = lazy(() => import("./top-selling-products"));
const Activities = lazy(() => import("./activities"));

const Dashboard = () => {
  return (
    <div className="flex flex-col h-full overflow-auto">
      <div className="flex-1 @container/main flex flex-col">
        <div className="flex-1 grid grid-cols-1 2xl:grid-cols-4 gap-4 px-4 py-2 md:py-3">
          {/* Main Content */}
          <div className="flex flex-col gap-4 2xl:col-span-3 min-h-0">
            <Suspense
              fallback={<Skeleton className="h-64 w-full rounded-md" />}
            >
              <SectionCards />
            </Suspense>

            {/* Chart takes remaining height */}
            <div className="flex-1 min-h-0">
              <Suspense
                fallback={<Skeleton className="h-full w-full rounded-md" />}
              >
                <ChartAreaInteractive />
              </Suspense>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-3 min-h-0">
            <Suspense
              fallback={<Skeleton className="h-64 w-full rounded-md" />}
            >
              <TopSellingProducts />
            </Suspense>

            {/* Activities fills remaining space */}
            <div className="flex-1 min-h-0">
              <Suspense
                fallback={<Skeleton className="h-full w-full rounded-md" />}
              >
                <Activities />
              </Suspense>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
