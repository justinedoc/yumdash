import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useState } from "react";

const COLORS = ["#10B981", "#CBD5E0"];

const dashboardData = {
  metrics: [
    { title: "Total Orders", value: "1,250", color: "bg-purple-600" },
    { title: "Total Products", value: "1,250", color: "bg-emerald-500" },
    { title: "Total Customers", value: "1,250", color: "bg-cyan-500" },
    { title: "Website Visit", value: "1,250", color: "bg-blue-900" },
  ],
  chart: [
    { month: "Jan", sales: 400000, online: 300000, net: 200000 },
    { month: "Feb", sales: 900000, online: 500000, net: 200000 },
    { month: "Mar", sales: 1000000, online: 600000, net: 200000 },
    { month: "Apr", sales: 350000, online: 200000, net: 200000 },
    { month: "May", sales: 700000, online: 400000, net: 200000 },
    { month: "Jun", sales: 800000, online: 500000, net: 200000 },
    { month: "Jul", sales: 450000, online: 300000, net: 200000 },
    { month: "Aug", sales: 950000, online: 600000, net: 200000 },
    { month: "Sept", sales: 900000, online: 500000, net: 200000 },
    { month: "Oct", sales: 600000, online: 300000, net: 200000 },
    { month: "Nov", sales: 950000, online: 500000, net: 200000 },
  ],
  customers: [
    { name: "New", value: 300 },
    { name: "Returning", value: 1200 },
  ],
  topSources: ["Direct", "Facebook", "Instagram"].map((s) => ({
    source: s,
    count: 12,
  })),
};

export default function Analytics() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-6 py-8">
      <h1 className="text-xl font-semibold">Hi Jane!</h1>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {dashboardData.metrics.map((m) => (
          <Card
            key={m.title}
            className={cn("rounded-lg p-4 text-white", m.color)}
          >
            <CardContent>
              <p className="text-sm opacity-80">{m.title}</p>
              <p className="text-2xl font-bold">{m.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Overview + Pie */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="md:col-span-3">
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Business Overview</CardTitle>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-auto justify-start gap-2 text-sm"
                >
                  <CalendarIcon className="h-4 w-4" />
                  {date ? format(date, "dd/MM/yyyy") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dashboardData.chart}>
                <XAxis dataKey="month" stroke="#888" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card className="flex flex-col items-center justify-center">
          <CardHeader className="w-full">
            <CardTitle>New vs Returning Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <PieChart width={200} height={200}>
              <Pie
                data={dashboardData.customers}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={70}
                innerRadius={50}
                fill="#8884d8"
                label
              >
                {dashboardData.customers.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
            <div className="mt-2 flex justify-center space-x-4 text-sm">
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                New ({dashboardData.customers[0].value})
              </div>
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-gray-300"></span>
                Returning ({dashboardData.customers[1].value})
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Order History */}
      <Card>
        <CardHeader>
          <CardTitle>Order History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-muted-foreground py-12 text-center">
            <img
              src="/no-order.svg"
              alt="No Order"
              className="mx-auto mb-4 h-24"
            />
            <p className="text-sm">No Order History!</p>
          </div>
        </CardContent>
      </Card>

      {/* Visitors */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Know your visitors</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-3">
          <div>
            <p className="font-semibold">Sessions over time</p>
            <p className="text-muted-foreground mt-2">
              0 Sessions on Jan 26, 2025
            </p>
          </div>
          <div>
            <p className="font-semibold">Top traffic sources</p>
            <ul className="mt-2 space-y-1">
              {dashboardData.topSources.map((src) => (
                <li key={src.source} className="flex justify-between">
                  <span>{src.source}</span>
                  <span>{src.count}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold">Sessions by location</p>
            <p className="text-muted-foreground mt-2">—</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
