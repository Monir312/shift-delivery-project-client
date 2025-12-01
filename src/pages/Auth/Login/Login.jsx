import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { FaGoogle } from 'react-icons/fa';
import Logo from '../../../components/Logo/Logo';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router';

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { signInUser } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  console.log('in the login page', location);


  const handleLogin = (data) => {
    console.log('form data', data);
    signInUser(data.email, data.password)
      .then(result => {
        console.log(result.user);
        navigate(location?.state || '/');
      })
      .catch(error => {
        console.log(error);
      })

  }


  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-1">
      {/* Left Section */}
      <div className="flex flex-col justify-center px-10 md:px-20 mt-10">

        {/* <div className="mb-10">
        </div> */}

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
        <p className="text-gray-600 mb-6">Login with ZapShift</p>

        {/* Form */}
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
          <div>
            <label className="text-gray-700 text-sm">Email</label>
            <input
              type="email"
              {...register('email', { required: true })}
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-green-400"
            />
            {
              errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>
            }
          </div>

          <div>
            <label className="text-gray-700 text-sm">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-green-400"
              {...register('password', {
                required: true, minLength: 6
              })} />
            {
              errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 character or longer</p>
            }
          </div>

          <div className="text-right">
            <button className="text-sm text-green-600 hover:underline">
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button className="w-full bg-green-400 hover:bg-green-500 transition text-white font-semibold py-2 rounded-lg">
            Login
          </button>

          <p className="text-sm text-gray-600 text-center">
            Don’t have any account?{" "}
            <Link to="/register" 
            state={location.state}
            className="text-green-600 font-medium hover:underline">
              Register
            </Link>
          </p>

          <div className="flex items-center gap-2 my-4">
            <span className="flex-1 h-px bg-gray-300"></span>
            <span className="text-gray-500 text-sm">OR</span>
            <span className="flex-1 h-px bg-gray-300"></span>
          </div>

          {/* Google Login */}
          {/* <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-100">
           */}

        </form>
            <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
