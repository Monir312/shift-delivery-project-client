import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function SendParcel() {
  const [parcelType, setParcelType] = useState("Document");
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    setValue("parcelType", parcelType);
  }, [parcelType, setValue]);

  const handleSendParcel = (data) => {
    console.log(data);
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
                <input {...register("senderName")} className="border p-3 rounded-lg border-gray-300" placeholder="Sender Name" />

                <label className="label mt-2 text-[#0f172a]">Sender Email</label>
                <input type="email" {...register("senderEmail")} className="border p-3 rounded-lg border-gray-300" placeholder="Sender Email" />

                <label className="label mt-2 text-[#0f172a]">Sender Address</label>
                <input {...register("senderAddress")} className="border p-3 rounded-lg border-gray-300" placeholder="Address" />

                <label className="label mt-2 text-[#0f172a]">Sender Phone No</label>
                <input {...register("senderPhone")} className="border p-3 rounded-lg border-gray-300" placeholder="Sender Phone No" />

                <label className="label mt-2 text-[#0f172a]">Select your District</label>
                <select className="border p-3 rounded-lg border-gray-300">
                  <option>Select your District</option>
                </select>

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

                <label className="label mt-2 text-[#0f172a]">Receiver District</label>
                <select className="border p-3 rounded-lg border-gray-300">
                  <option>Select your District</option>
                </select>


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








