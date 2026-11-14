import { Link } from 'react-router-dom'
import { useState } from 'react'
import { MdPersonPinCircle } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { MdPhone } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { FaUser, FaUserPlus } from "react-icons/fa6";

const RightRegistration = () => {
    const [role, setRole] = useState('Student')

    return (
        <div className="w-full">

            <h1 className="text-2xl font-bold tracking-tight text-white">
                Create Account (Admin Only)
            </h1>

            <p className="mt-2 text-sm text-[#a6bfd5]">
                Register a new user (Student or Instructor)
            </p>

            {/* Role Selection */}
            <div className="mt-5 grid grid-cols-2 gap-3">
                {['Student', 'Instructor'].map((item) => (
                    <button
                        key={item}
                        type="button"
                        onClick={() => setRole(item)}
                        className={`flex items-center justify-center rounded-lg border px-3 py-3 text-sm font-medium transition-all duration-200 ${
                            role === item
                                ? 'border-[#087fff] bg-[#0757a8]/40 text-white shadow-[0_0_12px_rgba(0,119,255,0.15)]'
                                : 'border-[#15354e] bg-[#071d32] text-[#a6bfd5] hover:border-[#087fff] hover:bg-[#0b2944] hover:text-white'
                        }`}
                    >
                        <span className="flex items-center justify-center gap-2">
                            {item === 'Student' && <FaUser />}
                            {item === 'Instructor' && <FaUserPlus />}
                            <span>{item}</span>
                        </span>
                    </button>
                ))}
            </div>

            {/* Registration Form */}
            <form
                action=""
                className="mt-5 flex flex-col gap-5 rounded-xl border border-[#24435c] bg-[#061a2e] p-5 shadow-[0_0_20px_rgba(0,119,255,0.10)] sm:p-6 md:p-8"
            >
                <h3 className="border-b border-[#24435c] pb-3 text-lg font-bold text-white">
                    User Details
                </h3>

                {/* Full Name */}
                <div>
                    <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-[#a6bfd5]"
                    >
                        Full Name
                    </label>

                    <div className="relative">
                        <MdPersonPinCircle className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-[#a6bfd5]" />

                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter Full Name"
                            className="w-full rounded-lg border border-[#24435c] bg-[#071d32] py-3 pl-10 pr-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-[#8ba4bc] focus:border-[#087fff] focus:ring-2 focus:ring-[#087fff]/20"
                        />
                    </div>
                </div>

                {/* Email Address */}
                <div>
                    <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-[#a6bfd5]"
                    >
                        Email Address
                    </label>

                    <div className="relative">
                        <TfiEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-base text-[#a6bfd5]" />

                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter Email address"
                            className="w-full rounded-lg border border-[#24435c] bg-[#071d32] py-3 pl-10 pr-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-[#8ba4bc] focus:border-[#087fff] focus:ring-2 focus:ring-[#087fff]/20"
                        />
                    </div>
                </div>

                {/* Mobile Number */}
                <div>
                    <label
                        htmlFor="mobile"
                        className="mb-2 block text-sm font-medium text-[#a6bfd5]"
                    >
                        Mobile Number
                    </label>

                    <div className="relative">
                        <MdPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-[#a6bfd5]" />

                        <input
                            type="text"
                            name="mobile"
                            id="mobile"
                            placeholder="Enter Mobile Number"
                            className="w-full rounded-lg border border-[#24435c] bg-[#071d32] py-3 pl-10 pr-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-[#8ba4bc] focus:border-[#087fff] focus:ring-2 focus:ring-[#087fff]/20"
                        />
                    </div>
                </div>

                {/* Username */}
                <div>
                    <label
                        htmlFor="username"
                        className="mb-2 block text-sm font-medium text-[#a6bfd5]"
                    >
                        Username
                    </label>

                    <div className="relative">
                        <FaUsers className="absolute left-3 top-1/2 -translate-y-1/2 text-base text-[#a6bfd5]" />

                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Enter Username"
                            className="w-full rounded-lg border border-[#24435c] bg-[#071d32] py-3 pl-10 pr-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-[#8ba4bc] focus:border-[#087fff] focus:ring-2 focus:ring-[#087fff]/20"
                        />
                    </div>
                </div>

                {/* Password */}
                <div>
                    <label
                        htmlFor="password"
                        className="mb-2 block text-sm font-medium text-[#a6bfd5]"
                    >
                        Password
                    </label>

                    <div className="relative">
                        <RiLockPasswordLine className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-[#a6bfd5]" />

                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter Password"
                            className="w-full rounded-lg border border-[#24435c] bg-[#071d32] py-3 pl-10 pr-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-[#8ba4bc] focus:border-[#087fff] focus:ring-2 focus:ring-[#087fff]/20"
                        />
                    </div>
                </div>

                {/* Register As */}
                <div>
                    <label
                        htmlFor="role"
                        className="mb-2 block text-sm font-medium text-[#a6bfd5]"
                    >
                        Register As
                    </label>

                    <div className="relative">
                        {role === 'Student' && (
                            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-base text-[#a6bfd5]" />
                        )}

                        {role === 'Instructor' && (
                            <FaUserPlus className="absolute left-3 top-1/2 -translate-y-1/2 text-base text-[#a6bfd5]" />
                        )}

                        <input
                            type="text"
                            name="role"
                            id="role"
                            value={role}
                            disabled
                            className="w-full cursor-not-allowed rounded-lg border border-[#24435c] bg-[#071d32] py-3 pl-10 pr-3 text-sm text-white outline-none disabled:opacity-90"
                        />
                    </div>
                </div>

                {/* Register Button */}
                <button
                    type="submit"
                    className="w-full rounded-lg bg-[#087fff] px-4 py-3 font-semibold text-white transition-all duration-200 hover:bg-[#0757a8] hover:shadow-[0_0_15px_rgba(8,127,255,0.25)] focus:outline-none focus:ring-2 focus:ring-[#087fff] focus:ring-offset-2 focus:ring-offset-[#061a2e] active:scale-[0.99]"
                >
                    Register
                </button>
            </form>

            {/* Login Link */}
            <p className="mt-5 text-center text-xs text-[#91b6d5] sm:text-sm">
                Already have an Account?

                <Link to="/login">
                    <a
                        href="/login"
                        className="ml-1 font-semibold text-[#078dff] transition-colors hover:text-[#67baff]"
                    >
                        Login Here
                </a>
                </Link>
            </p>

        </div>
    )
}

export default RightRegistration
