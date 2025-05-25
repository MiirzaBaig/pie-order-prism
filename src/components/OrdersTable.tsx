import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Mock data for pizza orders
const mockOrders = [
  { id: 'PZ001', customer: 'John Doe', pizza: 'Margherita', quantity: 2, date: '2024-12-20', status: 'Delivered' },
  { id: 'PZ002', customer: 'Jane Smith', pizza: 'Pepperoni', quantity: 1, date: '2024-12-20', status: 'Pending' },
  { id: 'PZ003', customer: 'Mike Johnson', pizza: 'Hawaiian', quantity: 3, date: '2024-12-19', status: 'Preparing' },
  { id: 'PZ004', customer: 'Sarah Wilson', pizza: 'Meat Lovers', quantity: 2, date: '2024-12-19', status: 'Out for Delivery' },
  { id: 'PZ005', customer: 'Tom Brown', pizza: 'Veggie Supreme', quantity: 1, date: '2024-12-18', status: 'Delivered' },
  { id: 'PZ006', customer: 'Lisa Davis', pizza: 'BBQ Chicken', quantity: 2, date: '2024-12-18', status: 'Cancelled' },
  { id: 'PZ007', customer: 'David Miller', pizza: 'Four Cheese', quantity: 1, date: '2024-12-17', status: 'Delivered' },
  { id: 'PZ008', customer: 'Emma Garcia', pizza: 'Spicy Italian', quantity: 3, date: '2024-12-17', status: 'Pending' },
  { id: 'PZ009', customer: 'James Taylor', pizza: 'Mediterranean', quantity: 2, date: '2024-12-16', status: 'Preparing' },
  { id: 'PZ010', customer: 'Maria Rodriguez', pizza: 'Buffalo Chicken', quantity: 1, date: '2024-12-16', status: 'Out for Delivery' },
  { id: 'PZ011', customer: 'Chris Anderson', pizza: 'Supreme', quantity: 4, date: '2024-12-15', status: 'Delivered' },
  { id: 'PZ012', customer: 'Ashley Thomas', pizza: 'White Pizza', quantity: 2, date: '2024-12-15', status: 'Pending' },
  { id: 'PZ013', customer: 'Kevin Martinez', pizza: 'Mushroom & Sausage', quantity: 1, date: '2024-12-14', status: 'Delivered' },
  { id: 'PZ014', customer: 'Nicole Lee', pizza: 'Prosciutto', quantity: 2, date: '2024-12-14', status: 'Preparing' },
  { id: 'PZ015', customer: 'Ryan Clark', pizza: 'Pesto Chicken', quantity: 3, date: '2024-12-13', status: 'Cancelled' },
  { id: 'PZ016', customer: 'Stephanie Hall', pizza: 'Taco Pizza', quantity: 1, date: '2024-12-13', status: 'Delivered' },
  { id: 'PZ017', customer: 'Brandon Young', pizza: 'Seafood Special', quantity: 2, date: '2024-12-12', status: 'Out for Delivery' },
  { id: 'PZ018', customer: 'Amanda King', pizza: 'Capricciosa', quantity: 1, date: '2024-12-12', status: 'Pending' },
  { id: 'PZ019', customer: 'Justin Wright', pizza: 'Diavola', quantity: 2, date: '2024-12-11', status: 'Delivered' },
  { id: 'PZ020', customer: 'Melissa Lopez', pizza: 'Truffle Mushroom', quantity: 1, date: '2024-12-11', status: 'Preparing' },
];

const OrdersTable = () => {
  const [orders, setOrders] = useState(mockOrders);
  const [sortBy, setSortBy] = useState('date');
  const [filterStatus, setFilterStatus] = useState('all');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50';
      case 'Preparing': return 'bg-blue-500/20 text-blue-300 border-blue-500/50';
      case 'Out for Delivery': return 'bg-purple-500/20 text-purple-300 border-purple-500/50';
      case 'Delivered': return 'bg-green-500/20 text-green-300 border-green-500/50';
      case 'Cancelled': return 'bg-red-500/20 text-red-300 border-red-500/50';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/50';
    }
  };

  const filteredOrders = orders.filter(order => 
    filterStatus === 'all' || order.status === filterStatus
  );

  const sortedOrders = [...filteredOrders].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return a.id.localeCompare(b.id);
  });

  return (
    <div className="glass-card space-y-4 sm:space-y-6 animate-fade-in-up">
      <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:justify-between lg:items-center">
        <h2 className="text-xl sm:text-2xl font-bold text-white">Pizza Orders</h2>
        <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-full sm:w-[180px] glass focus-ring">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent className="glass bg-slate-900/95 border-white/20">
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Preparing">Preparing</SelectItem>
              <SelectItem value="Out for Delivery">Out for Delivery</SelectItem>
              <SelectItem value="Delivered">Delivered</SelectItem>
              <SelectItem value="Cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-[180px] glass focus-ring">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="glass bg-slate-900/95 border-white/20">
              <SelectItem value="date">Sort by Date</SelectItem>
              <SelectItem value="id">Sort by Order ID</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="w-full overflow-x-auto rounded-lg glass">
        <div className="block md:hidden space-y-4 p-4">
          {sortedOrders.map((order, index) => (
            <div 
              key={order.id}
              className="glass-card hover-lift transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="font-medium text-pizza-orange text-sm">{order.id}</div>
                  <div className="text-white font-semibold">{order.customer}</div>
                </div>
                <Badge className={`${getStatusColor(order.status)} animate-pulse-glow border text-xs`}>
                  {order.status}
                </Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Pizza:</span>
                  <span className="text-white">{order.pizza}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Quantity:</span>
                  <span className="text-white">{order.quantity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Date:</span>
                  <span className="text-white">{order.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          <Table>
            <TableHeader className="bg-white/5 sticky top-0">
              <TableRow className="border-white/10 hover:bg-white/5">
                <TableHead className="text-white font-semibold text-sm lg:text-base">Order ID</TableHead>
                <TableHead className="text-white font-semibold text-sm lg:text-base">Customer</TableHead>
                <TableHead className="text-white font-semibold text-sm lg:text-base hidden lg:table-cell">Pizza Type</TableHead>
                <TableHead className="text-white font-semibold text-sm lg:text-base">Qty</TableHead>
                <TableHead className="text-white font-semibold text-sm lg:text-base hidden xl:table-cell">Order Date</TableHead>
                <TableHead className="text-white font-semibold text-sm lg:text-base">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedOrders.map((order, index) => (
                <TableRow 
                  key={order.id} 
                  className="border-white/10 hover:bg-white/5 transition-all duration-300 hover-lift"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <TableCell className="font-medium text-pizza-orange text-xs sm:text-sm">{order.id}</TableCell>
                  <TableCell className="text-white text-xs sm:text-sm">{order.customer}</TableCell>
                  <TableCell className="text-white text-xs sm:text-sm hidden lg:table-cell">{order.pizza}</TableCell>
                  <TableCell className="text-white text-xs sm:text-sm">{order.quantity}</TableCell>
                  <TableCell className="text-white text-xs sm:text-sm hidden xl:table-cell">{order.date}</TableCell>
                  <TableCell>
                    <Badge 
                      className={`${getStatusColor(order.status)} animate-pulse-glow border text-xs whitespace-nowrap`}
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default OrdersTable;
