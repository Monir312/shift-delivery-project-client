import React, { useState, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

export default function SendParcel() {
  const [parcelType, setParcelType] = useState("Document");

  const { 
    register,
     control,
      handleSubmit,
       setValue,
        formState: { errors } 
      } = useForm();
      const {user} = useAuth();
      console.log(user);
      const axiosSecure = useAxiosSecure();

  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map(c => c.region);
  const regions = [...new Set(regionsDuplicate)];
  const senderRegion = useWatch({ control, name: 'senderRegion' });
  const receiverRegion = useWatch({ control, name: 'receiverRegion' })

  const districtsByRegion = region => {
    const regionDistricts = serviceCenters.filter(c => c.region === region);
    const districts = regionDistricts.map(d => d.district);
    return districts;
  }






  useEffect(() => {
    setValue("parcelType", parcelType);
  }, [parcelType, setValue]);

  const handleSendParcel = (data) => {

    const isDocument = data.parcelType === 'document';

    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    console.log(isSameDistrict);
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      }
      else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    console.log('cost', cost);

    Swal.fire({
      title: "Are you agree with this cost?",
      text: `You will be charged ! ${cost}.BDT`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, take it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.post('/parcels', data)
        .then(res => {
          console.log('after saving parcel', res.data);
        })

        // Swal.fire({
        //   title: "Received ",
        //   text: "Your Parcel within 30 minutes!",
        //   icon: "success"
        // });
      }
    });

  };

  return (
    <div className="min-h-screen bg-[#F3F5F7] p-6 flex justify-center">
      <div className="bg-white w-full max-w-6xl rounded-2xl shadow p-10">
        <h1 className="text-3xl font-bold text-green-900 mb-1">Send A Parcel</h1>
        <p className="text-gray-600 mb-8">Enter your parcel details</p>

        <form onSubmit={handleSubmit(handleSendParcel)}>
          {/* Parcel Type Buttons */}
          <div className="mb-6 flex gap-4">
            <button
              type="button"
              onClick={() => setParcelType("Document")}
              className={`px-5 py-2 rounded-full border flex items-center gap-2 ${parcelType === "Document" ? "bg-green-600 text-white" : "bg-white text-gray-700"
                }`}
            >
              Document
            </button>

            <button
              type="button"
              onClick={() => setParcelType("Not-Document")}
              className={`px-5 py-2 rounded-full border flex items-center gap-2 ${parcelType === "Not-Document" ? "bg-green-600 text-white" : "bg-white text-gray-700"
                }`}
            >
              Not Document
            </button>
          </div>

          {/* Hidden input for parcelType */}
          <input type="hidden" {...register("parcelType", { required: true })} />

          {/* Parcel Name + Weight */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div>
              <label className="label text-[#0f172a]">Parcel Name</label>
              <input
                {...register("parcelName", { required: true })}
                type="text"
                placeholder="Parcel Name"
                className="border border-gray-300 p-3 rounded-lg w-full"
              />
              {errors.parcelName && <span className="text-red-500 text-sm">Parcel Name is required</span>}
            </div>

            <div>
              <label className="label text-[#0f172a]">Parcel Weight</label>
              <input
                {...register("parcelWeight", { required: true })}
                type="text"
                placeholder="Parcel Weight (KG)"
                className="border border-gray-300 p-3 rounded-lg w-full"
              />
              {errors.parcelWeight && <span className="text-red-500 text-sm">Parcel Weight is required</span>}
            </div>
          </div>




          {/* Sender + Receiver Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Sender */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Sender Details</h2>
              <div className="grid grid-cols-1 gap-2">
                <label className="label mt-2 text-[#0f172a]">Sender Name</label>
                <input type="text" {...register("senderName")} defaultValue={user?.displayName}
                className="border p-3 rounded-lg border-gray-300" placeholder="Sender Name" />

                <label className="label mt-2 text-[#0f172a]">Sender Email</label>
                <input type="email" {...register("senderEmail")} 
                defaultValue={user?.email}
                className="border p-3 rounded-lg border-gray-300" placeholder="Sender Email" />

                <label className="label mt-2 text-[#0f172a]">Sender Address</label>
                <input {...register("senderAddress")} className="border p-3 rounded-lg border-gray-300" placeholder="Address" />

                <label className="label mt-2 text-[#0f172a]">Sender Phone No</label>
                <input {...register("senderPhone")} className="border p-3 rounded-lg border-gray-300" placeholder="Sender Phone No" />


                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Sender Regions</legend>
                  <select {...register("senderRegion")} defaultValue="Pick a Region" className="select">
                    <option disabled={true}>Pick a Region</option>
                    {
                      regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                    }

                  </select>
                </fieldset>


                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Sender District</legend>
                  <select {...register("senderDistrict")} defaultValue="Pick a District" className="select">
                    <option disabled={true}>Pick a District</option>
                    {
                      districtsByRegion(senderRegion).map((r, i) => <option key={i} value={r}>{r}</option>)
                    }

                  </select>
                </fieldset>


                <label className="label mt-2 text-[#0f172a]">Pickup Instruction</label>
                <textarea
                  className="border p-3 rounded-lg border-gray-300"
                  placeholder="Pickup Instruction"
                  rows="3"
                ></textarea>
              </div>
            </div>



            {/* Receiver */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Receiver Details</h2>
              <div className="grid grid-cols-1 gap-2">
                <label className="label mt-2 text-[#0f172a]">Receiver Name</label>
                <input {...register("receiverName")} className="border p-3 rounded-lg border-gray-300" placeholder="Receiver Name" />

                <label className="label mt-2 text-[#0f172a]">Receiver Email</label>
                <input type="email" {...register("receiverEmail")} className="border p-3 rounded-lg border-gray-300" placeholder="Receiver Email" />

                <label className="label mt-2 text-[#0f172a]">Receiver Address</label>
                <input {...register("receiverAddress")} className="border p-3 rounded-lg border-gray-300" placeholder="Receiver Address" />

                <label className="label mt-2 text-[#0f172a]">Receiver Contact No.</label>
                <input {...register("receiverPhone")} className="border p-3 rounded-lg border-gray-300" placeholder="Receiver Contact No" />


                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Receiver Regions</legend>
                  <select {...register("receiverRegion")} defaultValue="Pick a Region" className="select">
                    <option disabled={true}>Pick a Region</option>
                    {
                      regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                    }

                  </select>
                </fieldset>


                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Receiver District</legend>
                  <select {...register("receiverDistrict")} defaultValue="Pick a district" className="select">
                    <option disabled={true}>Pick a District</option>
                    {
                      districtsByRegion(receiverRegion).map((d, i) => <option key={i} value={d}>{d}</option>)
                    }

                  </select>
                </fieldset>


                <label className="label mt-2 text-[#0f172a]">Delivery Instruction</label>
                <textarea
                  className="border p-3 rounded-lg border-gray-300"
                  placeholder="Delivery Instruction"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            * Pickup Time 4pm–7pm Approx.
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Proceed to Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}








