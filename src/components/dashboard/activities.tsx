import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle } from "lucide-react";

const activities = [
  { name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/1.jpg", action: "purchased", product: "Wireless Headphones", status: "Completed" },
  { name: "Jane Smith", avatar: "https://randomuser.me/api/portraits/women/2.jpg", action: "placed an order for", product: "Smart Watch", status: "Pending" },
  { name: "Michael Brown", avatar: "https://randomuser.me/api/portraits/men/3.jpg", action: "purchased", product: "Gaming Mouse", status: "Completed" },
  { name: "Alice Johnson", avatar: "https://randomuser.me/api/portraits/women/4.jpg", action: "placed an order for", product: "Bluetooth Speaker", status: "Pending" },
];

const Activities = () => {
  return (
    <Card className="p-0 shadow-none border-2 rounded-md w-full h-full flex flex-col gap-3">
      <h2 className="pt-4 pl-4 text-sm font-semibold text-gray-800">Recent Activity</h2>

      <ScrollArea className="h-[205px] px-3 mx-1">
        <div className="space-y-2">
          {activities.map((user, index) => (
            <div key={index}>
              <div className="flex items-center gap-3 py-2">
                {/* Avatar */}
                <Avatar className="w-8 h-8">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>

                {/* User Info */}
                <div className="flex-1 text-xs text-gray-600">
                  <p className="font-medium text-gray-800">{user.name}</p>
                  <p>
                    {user.action} <span className="font-semibold">{user.product}</span>
                  </p>
                </div>

                {/* Status Badge */}
                <Badge
                  variant={user.status === "Completed" ? "default" : "secondary"}
                  className="text-[10px] px-2 py-1 flex items-center gap-1"
                >
                  <CheckCircle className="w-3 h-3" /> {user.status}
                </Badge>
              </div>

              {/* Separator (except for the last item) */}
              {index < activities.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default Activities;
