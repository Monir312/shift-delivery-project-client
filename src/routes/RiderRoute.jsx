import React from 'react';
import useRole from '../hooks/useRole';
import useAuth from '../hooks/useAuth';
import Loading from '../components/Loading/Loading';

const RiderRoute = ({children}) => {

  const {loading, user } = useAuth();
  const { role, roleLoading } = useRole();

  if (loading || !user || roleLoading) {
    return <Loading></Loading>
  }

  if (role !== 'rider') {
    return <Forbidden></Forbidden>

  }

  return children;
};

export default RiderRoute;