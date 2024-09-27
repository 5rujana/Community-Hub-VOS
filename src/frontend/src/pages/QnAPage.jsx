import NavBar from '../components/NavBar'
import gear from '../assets/gear.png'
import logo from '../assets/logo.png'
import ask from '../assets/Ask.png'
import answer from '../assets/answer.png'
import post from '../assets/post.png'

const QnAPage = () => {
  return (
    <div className="relative h-screen w-screen">
        <NavBar />
        <div className='absolute w-11/12 h-16 top-24 left-16 rounded-full bg-gray2'>
            <input type="search" id="search" className="bg-gray2 border border-gray3 text-gray3 font-serif font-normal text-3xl rounded-full relative h-full w-full p-2.5" placeholder="Search Question" />
        </div>
        <div className="absolute bg-gray4 h-100 w-80 top-48 left-16 rounded-3xl">
          <input type="search" id="search" className="bg-gray2 border border-gray3 text-gray3 font-serif font-normal text-xl rounded-full h-10 w-72 p-2.5 mx-4 my-4" placeholder="Search Topic" />
          <div className="flex flex-row items-center gap-x-36">
            <p className='text-purple-900 text-xl font-serif font-black mx-5'>Hot Topics</p>
            <a href=""><img src={gear} alt="" className='h-6 w-6' /></a>
          </div>
        </div>
        <div className="absolute bg-white h-28 w-170 top-48 left-98 rounded-3xl">
          <div className="flex flex-row items-center mt-5 mx-4">
            <img src={logo} alt="" className='h-10' />
            <input type="search" id="search" className="bg-gray4 border border-gray3 text-gray3 font-serif font-normal text-xl rounded-full relative h-10 w-full px-5 py-2.5" placeholder="What do you want to ask or share?" />
          </div>
          <div className='flex flex-row justify-center items-center gap-28 mt-3'>
            <a href=""><img src={ask} alt="" className='h-8 w-20' /></a>
            <p className='text-2xl text-gray3'>|</p>
            <a href=""><img src={answer} alt="" className='h-9 w-24' /></a>
            <p className='text-2xl text-gray3'>|</p>
            <a href=""><img src={post} alt="" className='h-7 w-24' /></a>
          </div>
        </div>
        <div className="absolute bg-white h-96 w-170 top-80 left-98 rounded-3xl">

        </div>
    </div>
  )
}

export default QnAPage