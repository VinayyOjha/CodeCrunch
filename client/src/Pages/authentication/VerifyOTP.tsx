import CodeCrunch from '@/components/utilities/CodeCrunch'
import { InputOTPComponent } from '@/components/utilities/OTPComponent'

const VerifyOTP = () => {
  return (
    <div className='w-screen h-screen font-mono bg-black'>
        <div className="max-w-3xl mx-auto h-full flex flex-col items-center justify-center border border-white/2">
            <CodeCrunch className=''/>
            <span className='text-lg md:text-2xl text-white'>Please verify your account</span>
            <div className="h-12 flex items-center justify-center">
                <InputOTPComponent />
            </div>
        </div>
    </div>
  )
}

export default VerifyOTP