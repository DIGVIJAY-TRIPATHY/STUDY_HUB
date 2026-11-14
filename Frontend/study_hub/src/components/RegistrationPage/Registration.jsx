import LeftRegistration from './LeftRegistration'
import RightRegistration from './RightRegistration'

const Registration = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#020813] p-3 sm:p-6">

      <div className="flex min-h-[620px] w-full max-w-5xl flex-col overflow-hidden rounded-lg border border-[#087dcc] bg-[#031426] shadow-[0_0_25px_rgba(0,145,255,0.12)] md:flex-row">

        {/* Left Panel */}
        <div className="relative flex w-full flex-col border-b border-[#12364e] bg-gradient-to-br from-[#041c30] via-[#031426] to-[#020b16] p-5 sm:p-8 md:w-[38%] md:border-b-0 md:border-r">

          <LeftRegistration />

        </div>

        {/* Right Panel */}
        <div className="flex w-full flex-1 items-center justify-center bg-gradient-to-br from-[#031426] to-[#020d1a] p-5 sm:p-8 md:p-10">

          <RightRegistration />

        </div>

      </div>

    </div>
  )
}

export default Registration