import NavBar from "../components/NavBar"
import flask from "../assets/Landing Page/flask.png"
import scale from "../assets/Landing Page/scale.png"
import computer from "../assets/Landing Page/computer.png"
import bulb from "../assets/Landing Page/bulb.png"
import three_art from "../assets/Landing Page/three_art.png"
import circle from "../assets/Landing Page/circle.png"
import triscale from "../assets/Landing Page/triscale.png"
import bubble from "../assets/Landing Page/bubble.png"
import solar from "../assets/Landing Page/solar.png"

const LandingPage = () => {
  return (
    <div className="relative h-screen w-screen">
      <NavBar />
      <div className="absolute top-28 left-28">
        <img src={bubble} alt="" className="w-14 h-12" />
      </div>
      <div className="absolute top-28 right-1/2">
        <img src={scale} alt="" className="h-24 w-16" />
        <div className="relative bottom-20 left-52">
          <img src={computer} alt="" className="h-24 w-24" />
          <div className="relative bottom-36 left-72">
            <img src={bulb} alt="" className="h-24 w-20"/>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 end-0">
          <div className="relative bottom-8 right-20 z-10 ">
            <img src={three_art} alt="" className="h-100 w-160"/>
          </div>
          
          <div className="absolute bottom-72 end-0">
            <img src={circle} alt="" className="h-80 w-80" />
          </div>
        </div>
      <div className="absolute bottom-3 left-6 ">
        <img src={flask} alt="" className="h-20 w-16" />
      </div>
      <div className="absolute top-48 left-6">
        <div className="flex flex-row text-6xl">
          <p className="text-orange font-serif font-extrabold">Community&nbsp;</p>
          <br />
          <p className="font-serif font-extrabold">Hub</p>
        </div>
        <div className=" mt-5 w-86">
          <p className="font-serif font-medium text-xl text-gray">
          Welcome to Community Hub, the ultimate online destination for college students to connect, share, and thrive together. This platform is designed to bring students from all disciplines together, fostering collaboration, communication, and camaraderie. 
            <br />
            <br />
            Join us today and be a part of something greater!
          </p>
          <div className="absolute top-48 right-0">
              <img src={solar} alt="" className="h-16 w-16" />
            </div>
        </div>
        <div className="h-36">
          <button className="bg-purple-900 p-2 px-6 my-5 text-white border-none rounded-full" onClick={() => {window.location.href = '/signup'}}>
            Continue
          </button>
        </div>
        <div className="absolute bottom-3 left-72 ">
            <img className="h-28 w-20" src={triscale} alt="" />
          </div>
      </div>
         
    </div>
  )
}

export default LandingPage