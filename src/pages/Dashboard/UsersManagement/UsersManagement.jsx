import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaUserShield } from 'react-icons/fa';
import { FiShieldOff } from 'react-icons/fi';
import Swal from 'sweetalert2';

const UsersManagement = () => {
  const axiosSecure = useAxiosSecure();

  const {refetch, data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    }
  })

  const handleMakeAdmin = user => {
    const roleInfo = { role: 'admin' }
     // must ask for confirmation before Proceed
    axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
      .then(res => {
        if (res.data.modifiedCount) {
          console.log(res.data);
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.displayName} Marked as Admin`,
            showConfirmButton: false,
            timer: 2000
          });
        }
      });
  }


  const handleRemoveAdmin = user => {
    const roleInfo = { role: 'user' }
    // must ask for confirmation before Proceed
    axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
      .then(res => {
        if (res.data.modifiedCount) {
          console.log(res.data);
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.displayName} Remove From Admin`,
            showConfirmButton: false,
            timer: 2000
          });
        }
      });
  }


  return (
    <div>
      <h2 className='text-4xl'>Manage Users: {users.length}</h2>



      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                No.
              </th>
              <th>User</th>
              <th>Role</th>
              <th>Email</th>
              <th>Admin Actions</th>
              <th>Others Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => <tr>
              <td>
                {index + 1}
              </td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={user.photoURL}
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                {user.role}
              </td>
              <td>
                {user.email}
              </td>
              <td>
                {user.role === 'admin' ?
                  <button
                  onClick={()=>handleRemoveAdmin(user)}
                  className='btn bg-red-400'>
                    <FiShieldOff></FiShieldOff>
                  </button> : 
                  <button 
                  onClick={()=>handleMakeAdmin(user)}
                   className='btn bg-green-400'>
                    <FaUserShield></FaUserShield>
                  </button>}
              </td>
              <td>

              </td>
            </tr>)}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManagement;