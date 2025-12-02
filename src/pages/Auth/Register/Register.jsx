import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { registerUser, updateUserProfile } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);




  const handleRegistration = (data) => {
    console.log('After registration', data.photo[0]);

    const profileImg = data.photo[0];



    registerUser(data.email, data.password)
      .then(result =>{
        console.log(result.user)
        // store the image and get the photo url 
        const formData = new FormData();
        formData.append('image', profileImg);

        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`

        axios.post(image_API_URL, formData)
        .then(res => {
          console.log('after image upload', res.data.data.url);

           // update user profile
           const userProfile = {
            displayName: data.name,
            photoURL : res.data.data.url,
           }

           updateUserProfile(userProfile)
           .then(()=>{
            console.log('user profile updated done');
            navigate(location.state || '/');
           })
           .catch(error=>{
            console.log(error);
           })
        })

     })
      .catch(error =>{
        console.log(error)
      });
  }

  return (
  <div className="min-h-screen grid grid-cols-1 md:grid-cols-1">
    {/* Left Section */} 
    <div className="flex flex-col justify-center px-10 md:px-20 mt-10">
      {/* Logo */} 

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800">Create an Account</h1>
      <p className="text-gray-600 mb-6">Register with ZapShift</p>

      {/* Form */}
      <form onSubmit={handleSubmit(handleRegistration)} className="space-y-4">
        {/* Email */}
        <div>
          <label className="text-gray-700 text-sm">Photo</label>
          <input
            type="file"
            {...register('photo', { required: true })}
            placeholder="Your Photo"
            className="file-input w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-green-400"
          />
          {errors.email?.type === 'required' && <p className='text-red-500'>Photo is required</p>}
        </div>


        {/* Name */}
        <div>
          <label className="text-gray-700 text-sm">Full Name</label>
          <input
            type="text"
            {...register('name', { required: true })}
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-green-400"
          />
          {errors.name?.type === 'required' && <p className='text-red-500'>Name is required</p>}
        </div>

        {/* Email */}
        <div>
          <label className="text-gray-700 text-sm">Email</label>
          <input
            type="email"
            {...register('email', { required: true })}
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-green-400"
          />
          {errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>}
        </div>

        {/* Password */}
        <div>
          <label className="text-gray-700 text-sm">Password</label>
          <input
            type="password"
            {...register('password', {
              required: true,
              minLength: 8,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            })}
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-green-400"
          />
          {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}
          {errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 8 characters or longer</p>}
          {errors.password?.type === 'pattern' && <p className='text-red-500'>Password must have at least 1 uppercase, 1 lowercase, 1 number & 1 special character</p>}
        </div>

        <div className="text-right">
          <button className="text-sm text-green-600 hover:underline">
            Forgot Password?
          </button>
        </div>

        {/* Register Button */}
        <button className="w-full bg-green-400 hover:bg-green-500 transition text-white font-semibold py-2 rounded-lg">
          Register
        </button>

        <p className="text-sm text-gray-600 text-center">
          Already have an account?{" "}
          <Link to="/login" 
          state={location.state}
          className="text-green-600 font-medium hover:underline">
            Login
          </Link>
        </p>

        <div className="flex items-center gap-2 my-4">
          <span className="flex-1 h-px bg-gray-300"></span>
          <span className="text-gray-500 text-sm">OR</span>
          <span className="flex-1 h-px bg-gray-300"></span>
        </div>

        {/* Google Register */}
      </form>
      <SocialLogin></SocialLogin>
    </div>
  </div>


  );
};

export default Register;
