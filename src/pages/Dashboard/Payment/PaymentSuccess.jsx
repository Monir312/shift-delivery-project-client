import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PaymentSuccess = () => {
  const [paymentInfo, setPaymentInfo] = useState({});
  const [searchParams] = useSearchParams();
  const axiosSecure = useAxiosSecure();

  const sessionId = searchParams.get('session_id');
  console.log(sessionId);

  useEffect(() => {
    if (sessionId) {
      axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
        .then(res => {
          console.log(res.data);
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId
          })
        })
    }
  }, [sessionId, axiosSecure])

  return (
    <div>
      <h2 className='text-4xl'>Payment successful</h2>
      <p>Your TransactionID: {paymentInfo.transactionId}</p>
      <p>Your parcel Tracking Id: {paymentInfo.trackingId}</p>
    </div>
  );
};

export default PaymentSuccess;