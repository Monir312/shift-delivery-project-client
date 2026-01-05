import { useForm, useWatch } from "react-hook-form";
import RiderImg from '../../assets/agent-pending.png';
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

export default function Rider() {
  const { user } = useAuth();
  console.log(user);
  const axiosSecure = useAxiosSecure();
  const serviceCenters = useLoaderData();

  const regionsDuplicate = serviceCenters.map(c => c.region);
  const regions = [...new Set(regionsDuplicate)];

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter(c => c.region === region);
    return regionDistricts.map(d => d.district);
  }

  // useForm initialization
  const { register, handleSubmit, control, formState: { errors } } = useForm();

  // useWatch must come after useForm
  const riderRegion = useWatch({ control, name: 'riderRegion', defaultValue: "" });

  const handleBeARiderApply = (data) => {
    console.log(data);
    axiosSecure.post('/riders', data)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Application has been Submitted",
            showConfirmButton: false,
            timer: 2500
          });
        }
      })
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-6">
      <div className="bg-white w-full max-w-5xl rounded-3xl shadow p-10 grid md:grid-cols-2 gap-10">

        {/* Left Form Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Be a Rider</h2>
          <p className="text-gray-500 mt-2 text-sm leading-6">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
            From personal packages to business shipments — we deliver on time, every time.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-4 text-gray-700">
            Tell us about yourself
          </h3>

          <form onSubmit={handleSubmit(handleBeARiderApply)} className="space-y-4">

            {/* Name & Age */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="label mt-2 text-[#0f172a]">Rider Name</label>
                <input {...register("name", { required: "Name is required" })} type="text" placeholder="Your Name" className="input" />
                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
              </div>

              <div>
                <label className="label mt-2 text-[#0f172a]">Rider Age</label>
                <input {...register("age", { required: "Age is required" })} type="number" placeholder="Your Age" className="input" />
                {errors.age && <span className="text-red-500 text-sm">{errors.age.message}</span>}
              </div>
            </div>

            {/* Email & Region */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="label mt-2 text-[#0f172a]">Rider Email</label>
                <input {...register("email", { required: "Email is required" })} type="email" placeholder="Your Email" className="input" />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
              </div>

              <div>
                <label className="label mt-2 text-[#0f172a]">Rider Region</label>
                <select {...register("riderRegion", { required: "Region is required" })} defaultValue="" className="select">
                  <option value="" disabled>Pick a Region</option>
                  {regions.map((r, i) => <option key={i} value={r}>{r}</option>)}
                </select>
                {errors.riderRegion && <span className="text-red-500 text-sm">{errors.riderRegion.message}</span>}
              </div>

              <div>
                <label className="label mt-2 text-[#0f172a]">Rider District</label>
                <select {...register("senderDistrict", { required: "District is required" })} defaultValue="" className="select">
                  <option value="" disabled>Pick a District</option>
                  {riderRegion && districtsByRegion(riderRegion).map((d, i) => <option key={i} value={d}>{d}</option>)}
                </select>
                {errors.senderDistrict && <span className="text-red-500 text-sm">{errors.senderDistrict.message}</span>}
              </div>
            </div>

            {/* NID & Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="label mt-2 text-[#0f172a]">Rider NID</label>
                <input {...register("nid", { required: "NID is required" })} type="text" placeholder="NID No" className="input" />
                {errors.nid && <span className="text-red-500 text-sm">{errors.nid.message}</span>}
              </div>

              <div>
                <label className="label mt-2 text-[#0f172a]">Rider Contact No.</label>
                <input {...register("contact", { required: "Contact is required" })} type="text" placeholder="Contact" className="input" />
                {errors.contact && <span className="text-red-500 text-sm">{errors.contact.message}</span>}
              </div>
            </div>

            {/* Warehouse */}
            <div>
              <label className="label mt-2 text-[#0f172a]">Warehouse</label>
              <select {...register("warehouse", { required: "Warehouse is required" })} defaultValue="" className="input">
                <option value="" disabled>Select warehouse you want to work</option>
                <option>Dhaka Warehouse</option>
                <option>CTG Warehouse</option>
                <option>Khulna Hub</option>
                <option>Rajshahi Hub</option>
              </select>
              {errors.warehouse && <span className="text-red-500 text-sm">{errors.warehouse.message}</span>}
            </div>

            {/* Submit */}
            <button className="w-full py-3 bg-lime-400 hover:bg-lime-500 text-white font-semibold rounded-md">
              Submit
            </button>
          </form>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center items-center">
          <img src={RiderImg} alt="Rider" className="w-80" />
        </div>

      </div>
    </div>
  );
}
