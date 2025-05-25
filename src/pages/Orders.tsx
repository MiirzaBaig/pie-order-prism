
import Layout from '@/components/Layout';
import OrdersTable from '@/components/OrdersTable';

const Orders = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="text-center space-y-4 animate-fade-in-up">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pizza-orange to-pizza-sauce bg-clip-text text-transparent">
            Pizza Orders Management 🍕
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Monitor, filter, and manage all your pizza orders in one beautiful dashboard
          </p>
        </div>
        
        <OrdersTable />
      </div>
    </Layout>
  );
};

export default Orders;
