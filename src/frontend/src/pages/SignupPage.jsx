import NavBar from '../components/NavBar'
import logo from '../assets/logo.png'
import lock from '../assets/lock.png'
import two_art from '../assets/two_art.png'

const SignupPage = () => {
  return (
    <div className='relative h-screen w-screen radical-gradient'>
        <NavBar />
        <div className='absolute font-serif font-bold text-gray1 text-5xl text-center top-28 left-80'>
                SIGN UP 
        </div>
        <div className='absolute top-40 left-20'>
            <img src={two_art} alt="" className='w-140' />
        </div>
        <div className="absolute h-120 w-100 top-32 right-28 bg-white">
            <div className="absolute top-6 left-36 flex items-center">
                <img className="h-10 w-12 mr-2" src={logo} alt="" />
                <span className="span tracking-tight font-bold text-2xl font-sans">CSI X VIT AP</span>
            </div>
            <div className="grid gap-8 mb-6 md:grid-cols-2 absolute top-28 left-10">
                <div>
                    <label className="block mb-2 text-sm font-medium text-black">Full Name</label>
                    <input type="text" id="first_name" className="bg-gray-50 border border-black text-black text-sm rounded-lg block w-full p-2.5" placeholder="Your Name" required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-black">User Name</label>
                    <input type="text" id="last_name" className="bg-gray-50 border border-black text-black text-sm rounded-lg block w-full p-2.5" placeholder="Your User Name" required />
                </div>
            </div>
            <div className="mx-8 mb-6 absolute top-54 left-3 w-98">
                <label className="block mb-2 text-sm font-medium text-black">Email address</label>
                <input type="email" id="email" className="bg-gray-50 border border-black text-black text-sm rounded-lg block w-full p-2.5" placeholder="xyz.abc@vitapstudent.ac.in" required />
            </div> 
            <div className="mx-8 mb-6 absolute top-81 left-3 w-98">
                <label className="block mb-2 text-sm font-medium text-black">Password</label>
                <input type="password" id="password" className="bg-gray-50 border border-black text-black text-sm rounded-lg block w-full p-2.5" placeholder="•••••••••" required />
            </div> 
            
            <div className='bg-gradient-to-r from-yellow1 via-yellow2 to-yellow3 p-4 mx-8 mt-9 rounded-lg mb-6 absolute top-98 left-3 w-98 text-center'>
                <button className=' flex flex-row justify-center items-center w-full font-sans font-medium text-xl'><img src={lock} alt="" className='w-4 h-4' />&nbsp;SIGN UP</button>
            </div>
            <div className='absolute bottom-30 left-30 font-sans font-semibold'>
                If you already have an account: &nbsp;
                <a href='/v1/login' className='text-violet-700'>LOG IN</a>
            </div>
            <div className='absolute bottom-7 left-48 font-sans text-xs underline underline-offset-1'>
                © CSI CHAPTER 2024
            </div>
        </div>

    </div>
  )
}

export default SignupPage