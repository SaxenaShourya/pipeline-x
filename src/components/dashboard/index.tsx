import { Suspense, lazy } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy Load Components
const SectionCards = lazy(() => import("./section-cards"));
const ChartAreaInteractive = lazy(() => import("./chart-area-interactive"));
const TopSellingProducts = lazy(() => import("./top-selling-products"));
const Activities = lazy(() => import("./activities"));

const Dashboard = () => {
  return (
    <div className="h-full flex flex-1 flex-col">
      <div className="h-full @container/main flex flex-1 flex-col gap-2">
        <div className="h-full grid grid-cols-1 2xl:grid-cols-4 gap-4 px-4 py-2 md:py-3">
          {/* Main Content */}
          <div className="h-full flex flex-col gap-4 2xl:col-span-3">
            <Suspense
              fallback={<Skeleton className="h-64 w-full rounded-md" />}
            >
              <SectionCards />
            </Suspense>

            <Suspense
              fallback={
                <Skeleton className="h-full flex-1 w-full rounded-md" />
              }
            >
              <ChartAreaInteractive />
            </Suspense>
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-3 overflow-hidden flex-1">
            <Suspense
              fallback={<Skeleton className="h-84 w-full rounded-md" />}
            >
              <TopSellingProducts />
            </Suspense>

            <Suspense
              fallback={
                <Skeleton className="h-full w-full rounded-md" />
              }
            >
              <Activities />
            </Suspense>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
