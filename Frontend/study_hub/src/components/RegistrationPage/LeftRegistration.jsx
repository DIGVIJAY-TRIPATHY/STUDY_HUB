import registration from '../../assets/registration.png'

const LeftRegistration = () => {
  return (
    <div className="relative z-10 flex h-full flex-col items-center justify-center gap-5 py-4 text-center md:gap-7">

      {/* Education Illustration */}
      <div className="w-full max-w-[250px]">
        <img
          src={registration}
          alt="StudyHub registration illustration"
          className="aspect-square w-full object-contain drop-shadow-[0_0_15px_rgba(0,136,255,0.2)] motion-safe:animate-[bounce_3s_ease-in-out_infinite]"
        />
      </div>
      <h2 className="text-xl font-bold text-[#0088ff] sm:text-2xl">
        Admin Registration
      </h2>
      {/* Quote */}
      <p className="max-w-[250px] text-xs leading-6 text-[#8fb8d9] sm:text-sm">
        Only administrators can register students and instructors.
      </p>

    </div>
  )
}

export default LeftRegistration