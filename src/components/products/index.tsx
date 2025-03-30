import { Suspense } from "react";
import { DataTable } from "./data-table";
import { Skeleton } from "../ui/skeleton";

const data = [
  {
    "id": 1,
    "header": "Smart Watch",
    "type": "Wearable Tech",
    "status": "Delivered",
    "target": "50",
    "limit": "20",
    "reviewer": "Apex Couriers"
  },
  {
    "id": 2,
    "header": "Portable Bluetooth Speaker",
    "type": "Audio Equipment",
    "status": "Pending",
    "target": "30",
    "limit": "10",
    "reviewer": "Assign reviewer"
  },
  {
    "id": 3,
    "header": "Noise Cancelling Earbuds",
    "type": "Audio Equipment",
    "status": "Delivered",
    "target": "40",
    "limit": "15",
    "reviewer": "Apex Couriers"
  },
  {
    "id": 4,
    "header": "Mechanical Keyboard",
    "type": "Computer Accessories",
    "status": "Pending",
    "target": "25",
    "limit": "8",
    "reviewer": "Assign reviewer"
  },
  {
    "id": 5,
    "header": "Gaming Mouse",
    "type": "Computer Accessories",
    "status": "Delivered",
    "target": "60",
    "limit": "25",
    "reviewer": "Apex Couriers"
  },
  {
    "id": 6,
    "header": "Wireless Charger",
    "type": "Mobile Accessories",
    "status": "Pending",
    "target": "45",
    "limit": "18",
    "reviewer": "Assign reviewer"
  },
  {
    "id": 7,
    "header": "4K Monitor",
    "type": "Display Devices",
    "status": "Delivered",
    "target": "20",
    "limit": "7",
    "reviewer": "Apex Couriers"
  },
  {
    "id": 8,
    "header": "Smart Thermostat",
    "type": "Home Automation",
    "status": "Pending",
    "target": "35",
    "limit": "12",
    "reviewer": "Swift Cargo"
  },
  {
    "id": 9,
    "header": "VR Headset",
    "type": "Gaming Equipment",
    "status": "Delivered",
    "target": "15",
    "limit": "6",
    "reviewer": "Assign reviewer"
  },
  {
    "id": 10,
    "header": "Smart Doorbell",
    "type": "Home Security",
    "status": "Pending",
    "target": "40",
    "limit": "16",
    "reviewer": "Swift Cargo"
  },
  {
    "id": 11,
    "header": "External Hard Drive",
    "type": "Storage Devices",
    "status": "Delivered",
    "target": "50",
    "limit": "22",
    "reviewer": "Apex Couriers"
  },
  {
    "id": 12,
    "header": "Fitness Tracker",
    "type": "Wearable Tech",
    "status": "Pending",
    "target": "30",
    "limit": "9",
    "reviewer": "Swift Cargo"
  },
  {
    "id": 13,
    "header": "Smart Light Bulb",
    "type": "Home Automation",
    "status": "Delivered",
    "target": "55",
    "limit": "23",
    "reviewer": "Assign reviewer"
  },
  {
    "id": 14,
    "header": "Noise Cancelling Headphones",
    "type": "Audio Equipment",
    "status": "Pending",
    "target": "35",
    "limit": "14",
    "reviewer": "Swift Cargo"
  },
  {
    "id": 15,
    "header": "E-Reader",
    "type": "Portable Devices",
    "status": "Delivered",
    "target": "25",
    "limit": "11",
    "reviewer": "Apex Couriers"
  },
  {
    "id": 16,
    "header": "Drone Camera",
    "type": "Photography Equipment",
    "status": "Pending",
    "target": "10",
    "limit": "4",
    "reviewer": "Swift Cargo"
  },
  {
    "id": 17,
    "header": "Smart Home Hub",
    "type": "Home Automation",
    "status": "Delivered",
    "target": "50",
    "limit": "20",
    "reviewer": "Apex Couriers"
  },
  {
    "id": 18,
    "header": "Portable Power Bank",
    "type": "Mobile Accessories",
    "status": "Pending",
    "target": "60",
    "limit": "25",
    "reviewer": "Assign reviewer"
  },
  {
    "id": 19,
    "header": "Digital Drawing Tablet",
    "type": "Creative Tools",
    "status": "Delivered",
    "target": "15",
    "limit": "6",
    "reviewer": "Apex Couriers"
  },
  {
    "id": 20,
    "header": "Smart Security Camera",
    "type": "Home Security",
    "status": "Pending",
    "target": "45",
    "limit": "18",
    "reviewer": "Swift Cargo"
  }
]

const TableSkeleton = () => {
  return (
    <div className="space-y-2 p-4 h-full w-full ">
        <Skeleton className="h-full w-full rounded-md" />
    </div>
  );
};

const Products = () => {
  return (
    <div className="h-full w-full">
      <Suspense fallback={<TableSkeleton />}>
        <DataTable data={data} />
      </Suspense>
    </div>
  );
};


export default Products;
