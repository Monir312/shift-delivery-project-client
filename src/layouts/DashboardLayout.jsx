import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import { FiMenu, FiHome, FiSettings } from "react-icons/fi";
import { CiDeliveryTruck } from 'react-icons/ci';
import { FaMotorcycle, FaRegCreditCard, FaUsers } from 'react-icons/fa';
import useRole from '../hooks/useRole';

const DashboardLayout = () => {

  const {role} = useRole();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">
          <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
            {/* Sidebar toggle icon */}
            <FiMenu className="my-1.5 inline-block size-4" />
          </label>
          <div className="px-4">Zap Shift Dashboard</div>
        </nav>

        {/* Page content here */}
        <Outlet></Outlet>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          
          {/* Sidebar content here */}
          <ul className="menu w-full grow">

            {/* Homepage */}
            <li>
              <Link to="/" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                <FiHome className="my-1.5 inline-block size-4" />
                <span className="is-drawer-close:hidden">Homepage</span>
              </Link>
            </li>


            {/* our dashboard links  */}
            <li>
              <NavLink to="/dashboard/my-parcels" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="MyParcels">
              <CiDeliveryTruck className="my-1.5 inline-block size-5 font-bold"></CiDeliveryTruck>
              <span className="is-drawer-close:hidden">My Parcels</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/payment-history" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Payment History">
              <FaRegCreditCard className="my-1.5 inline-block size-5 font-bold"></FaRegCreditCard>
              <span className="is-drawer-close:hidden">Payment History</span>
              </NavLink>
            </li>

            {
              role === 'admin' && <>
                          <li>
              <NavLink to="/dashboard/approve-riders" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Approve-Riders">
              <FaMotorcycle className="my-1.5 inline-block size-5 font-bold"></FaMotorcycle>
              <span className="is-drawer-close:hidden">Approve Riders</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/users-management" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Users Management">
              <FaUsers className="my-1.5 inline-block size-5 font-bold"></FaUsers>
              
              <span className="is-drawer-close:hidden">Users Management</span>
              </NavLink>
            </li>
              </>
            }


            {/* Settings */}
            <li>
              <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
                <FiSettings className="my-1.5 inline-block size-4" />
                <span className="is-drawer-close:hidden">Settings</span>
              </button>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;






// import React, { useState } from "react";
// import { FiCircle } from "react-icons/fi";
// import { useForm } from "react-hook-form";

// export default function AddParcel() {
//   const [parcelType, setParcelType] = useState("Document");
//   const { register, handleSubmit } = useForm();

//   const handleSendParcel = (data) => {
//     console.log("FORM DATA:", data);
//   };

//   return (
//     <div className="w-full bg-white p-6 md:p-10 rounded-xl shadow-sm">
//       <h1 className="text-3xl font-bold text-[#0f172a]">Add Parcel</h1>

//       {/* ==== PARCEL TYPE ==== */}
//       <div className="mt-6">
//         <h2 className="text-xl font-semibold text-[#0f172a]">
//           Enter your parcel details
//         </h2>

//         <div className="flex items-center gap-8 mt-4">
//           <label
//             onClick={() => setParcelType("Document")}
//             className="flex cursor-pointer items-center gap-2 text-[#0f172a]"
//           >
//             <FiCircle
//               className={`text-xl ${
//                 parcelType === "Document"
//                   ? "text-green-600 fill-green-600"
//                   : ""
//               }`}
//             />
//             Document
//           </label>

//           <label
//             onClick={() => setParcelType("Non-Document")}
//             className="flex cursor-pointer items-center gap-2 text-[#0f172a]"
//           >
//             <FiCircle
//               className={`text-xl ${
//                 parcelType === "Non-Document"
//                   ? "text-green-600 fill-green-600"
//                   : ""
//               }`}
//             />
//             Non-Document
//           </label>
//         </div>
//       </div>

//       {/* FORM START */}
//       <form onSubmit={handleSubmit(handleSendParcel)} className="mt-8">

//         {/* PARCEL NAME + WEIGHT */}
//         <div className="grid md:grid-cols-2 gap-6">
//           <div>
//             <label className="label text-[#0f172a]">Parcel Name</label>
//             <input
//               {...register("parcelName")}
//               className="input input-bordered w-full"
//               placeholder="Parcel Name"
//             />
//           </div>

//           <div>
//             <label className="label text-[#0f172a]">Parcel Weight (KG)</label>
//             <input
//               {...register("parcelWeight")}
//               className="input input-bordered w-full"
//               placeholder="Parcel Weight (KG)"
//             />
//           </div>
//         </div>

//         {/* ==== SENDER / RECEIVER SECTION ==== */}
//         <div className="grid md:grid-cols-2 gap-10 mt-10">

//           {/* ------- SENDER DETAILS ------- */}
//           <div>
//             <h3 className="text-lg font-bold text-[#0f172a]">Sender Details</h3>

//             <div className="mt-4 space-y-4">
//               <div>
//                 <label className="label">Sender Name</label>
//                 <input
//                   {...register("senderName")}
//                   className="input input-bordered w-full"
//                   placeholder="Sender Name"
//                 />
//               </div>

//               <div>
//                 <label className="label">Sender Pickup Wire house</label>
//                 <select {...register("senderWireHouse")} className="select select-bordered w-full">
//                   <option>Select Wire house</option>
//                   <option>Dhaka</option>
//                   <option>Chittagong</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="label">Address</label>
//                 <input
//                   {...register("senderAddress")}
//                   className="input input-bordered w-full"
//                   placeholder="Address"
//                 />
//               </div>

//               <div>
//                 <label className="label">Sender Contact No</label>
//                 <input
//                   {...register("senderContact")}
//                   className="input input-bordered w-full"
//                   placeholder="Contact No"
//                 />
//               </div>

//               <div>
//                 <label className="label">Your Region</label>
//                 <select {...register("senderRegion")} className="select select-bordered w-full">
//                   <option>Select your region</option>
//                   <option>Dhaka</option>
//                   <option>Khulna</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="label">Pickup Instruction</label>
//                 <textarea
//                   {...register("pickupInstruction")}
//                   className="textarea textarea-bordered w-full"
//                   placeholder="Pickup Instruction"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* ------- RECEIVER DETAILS ------- */}
//           <div>
//             <h3 className="text-lg font-bold text-[#0f172a]">Receiver Details</h3>

//             <div className="mt-4 space-y-4">
//               <div>
//                 <label className="label">Receiver Name</label>
//                 <input
//                   {...register("receiverName")}
//                   className="input input-bordered w-full"
//                   placeholder="Receiver Name"
//                 />
//               </div>

//               <div>
//                 <label className="label">Receiver Delivery Wire house</label>
//                 <select {...register("receiverWireHouse")} className="select select-bordered w-full">
//                   <option>Select Wire house</option>
//                   <option>Dhaka</option>
//                   <option>Sylhet</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="label">Receiver Address</label>
//                 <input
//                   {...register("receiverAddress")}
//                   className="input input-bordered w-full"
//                   placeholder="Address"
//                 />
//               </div>

//               <div>
//                 <label className="label">Receiver Contact No</label>
//                 <input
//                   {...register("receiverContact")}
//                   className="input input-bordered w-full"
//                   placeholder="Contact No"
//                 />
//               </div>

//               <div>
//                 <label className="label">Receiver Region</label>
//                 <select {...register("receiverRegion")} className="select select-bordered w-full">
//                   <option>Select region</option>
//                   <option>Dhaka</option>
//                   <option>Jessore</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="label">Delivery Instruction</label>
//                 <textarea
//                   {...register("deliveryInstruction")}
//                   className="textarea textarea-bordered w-full"
//                   placeholder="Delivery Instruction"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* SUBMIT BUTTON */}
//         <div className="mt-10">
//           <button className="btn bg-green-600 hover:bg-green-700 text-white px-6 w-full md:w-auto">
//             Proceed to Confirm Booking
//           </button>
//         </div>

//         <p className="text-sm mt-4 text-gray-500">
//           * PickUp Time 4pm–7pm Approx.
//         </p>
//       </form>
//     </div>
//   );
// }

