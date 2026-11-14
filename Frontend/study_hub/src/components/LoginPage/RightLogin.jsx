import { useState } from 'react'
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiEyeOff } from "react-icons/fi";
import { FaUser,FaUserTie,FaUserPlus  } from "react-icons/fa6";



const RightLogin = () => {
  const [role, setRole] = useState('Student')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()

    // Connect your authentication API here.
    console.log('Selected role:', role)
    console.log('Remember me:', rememberMe)
  }

  return (
    <div className="w-full max-w-md">

      {/* StudyHub Logo */}
      <div className="mb-5">

        <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
          <span className="text-2xl text-[#48aaff]">🎓</span>
          <span>StudyHub</span>
        </div>

        <p className="mt-1 text-xs tracking-wide text-[#91b6d5]">
          Learn · Grow · Succeed
        </p>

      </div>

      {/* Login Card */}
      <div className="rounded-md border border-[#12324b] bg-[#04182b]/80 p-4 shadow-[0_0_20px_rgba(0,0,0,0.15)] sm:p-6">

        <h2 className="text-xl font-bold text-white sm:text-2xl">
          Welcome Back!
        </h2>

        <p className="mt-1 text-xs text-[#91b6d5] sm:text-sm">
          Login to your account to continue
        </p>

        {/* User Role Selection */}
<div className="mt-5 grid grid-cols-3 gap-2">
  {['Student', 'Instructor', 'Admin'].map((item) => (
    <button
      key={item}
      type="button"
      onClick={() => setRole(item)}
      className={`rounded-md border px-1 py-2.5 text-xs font-medium transition-all sm:text-sm ${
        role === item
          ? 'border-[#087fff] bg-[#0757a8]/40 text-white shadow-[0_0_10px_rgba(0,119,255,0.12)]'
          : 'border-[#15354e] bg-[#071d32] text-[#a6bfd5] hover:border-[#087fff] hover:text-white'
      }`}
    >
      <span className="flex items-center justify-center gap-1">
        {item === 'Student' && <FaUser className='mr-1' /> }
        {item === 'Instructor' && <FaUserPlus className='mr-1' />}
        {item === 'Admin' && <FaUserTie   className='mr-1'/>}
        <span>{item}</span>
      </span>
    </button>
  ))}
</div>

        {/* Login Form */}
        <form
          className="mt-5 space-y-4"
          onSubmit={handleLogin}
        >

          {/* Email / Registration Number / Mobile Number */}
          <div className="relative">

            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#9ab9d5]">
              <TfiEmail />
            </span>

            <input
              type="text"
              name="identifier"
              placeholder="Email / Registration Number / Mobile Number"
              autoComplete="username"
              required
              className="w-full rounded-md border border-[#24435c] bg-[#061a2e] py-3 pl-9 pr-3 text-xs text-white outline-none transition placeholder:text-[#8ba4bc] focus:border-[#087fff] focus:ring-1 focus:ring-[#087fff] sm:text-sm"
            />

          </div>

          {/* Password */}
          <div className="relative">

            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#9ab9d5]">
              <RiLockPasswordLine />
            </span>

            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              required
              className="w-full rounded-md border border-[#24435c] bg-[#061a2e] py-3 pl-9 pr-14 text-sm text-white outline-none transition placeholder:text-[#8ba4bc] focus:border-[#087fff] focus:ring-1 focus:ring-[#087fff]"
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#9ab9d5] hover:text-white"
            >
              {showPassword ? <MdOutlineRemoveRedEye />:<FiEyeOff /> }
            </button>

          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">

            <label className="flex cursor-pointer items-center gap-2 text-[#b3c9dc]">

              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-3.5 w-3.5 accent-blue-500"
              />

              Remember me

            </label>

            <a
              href="/forgot-password"
              className="text-[#078dff] transition hover:text-[#67baff]"
            >
              Forgot password?
            </a>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-gradient-to-r from-[#087cff] to-[#0062ed] py-3 text-sm font-semibold text-white shadow-[0_0_15px_rgba(0,103,255,0.2)] transition hover:brightness-110 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>

        </form>

      </div>

      {/* Signup / Contact Admin */}
      <p className="mt-5 text-center text-xs text-[#91b6d5]">

        Don't have an account?

        <a
          href="/signup"
          className="ml-1 font-semibold text-[#078dff] hover:text-[#67baff]"
        >
          Contact your admin
        </a>

      </p>

    </div>
  )
}

export default RightLogin