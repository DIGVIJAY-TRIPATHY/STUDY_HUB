import loginimg from '../../assets/loginimg.png'

const LeftLogin = () => {
  return (
    <div className="relative z-10 flex h-full flex-col items-center justify-center gap-5 py-4 text-center md:gap-7">

      {/* Education Illustration */}
      <div className="w-full max-w-[250px]">
        <img
          src={loginimg}
          alt="StudyHub education illustration"
          className="aspect-square w-full object-contain drop-shadow-[0_0_15px_rgba(0,136,255,0.2)] motion-safe:animate-[bounce_3s_ease-in-out_infinite]"
        />
      </div>

      {/* Quote */}
      <p className="max-w-[250px] text-xs leading-6 text-[#8fb8d9] sm:text-sm">
        "Education is the most powerful weapon which you can use to change the world."
      </p>

    </div>
  )
}

export default LeftLogin