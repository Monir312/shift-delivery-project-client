import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [], isLoading } = useQuery({
    enabled: !!user?.email,     
    queryKey: ['payments', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      return res.data;
    }
  });

  if (isLoading) return <p className="text-2xl font-bold">Loading...</p>;

  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">
        Payment History: {payments.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Amount</th>
              <th>Paid Time</th>
              <th>Transaction Id</th>
            </tr>
          </thead>

          <tbody>
            {
              payments.map((payment, index) =>
                <tr key={payment._id}>
                  <td>{index + 1}</td>
                  <td>{payment.customerEmail}</td>
                  <td>${payment.amount}</td>
                  <td>{payment.paidAt}</td>
                  <td>{payment.transactionId}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
