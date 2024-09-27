import React from 'react';
import { FaCalendarAlt, FaQuestionCircle, FaNewspaper } from 'react-icons/fa';

const DashboardSection = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="bg-purple-900 p-8 rounded-lg shadow-lg">
        <div className="text-white flex flex-col md:flex-row justify-around items-center md:items-start py-8 space-y-8 md:space-y-0">
          {/* The Feed */}
          <div className="text-center flex-1">
            <FaNewspaper size={60} className="mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">The Feed</h2>
            <p className="text-md mt-2">
              Stay updated with all the latest information about the college, upcoming events, and important announcements.
            </p>
          </div>

          {/* The Q&A Forum */}
          <div className="text-center flex-1">
            <FaQuestionCircle size={60} className="mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">The Q&A Forum</h2>
            <p className="text-md mt-2">
              Post your questions and get answers from fellow students, fostering a collaborative and helpful environment.
            </p>
          </div>

          {/* The Calendar */}
          <div className="text-center flex-1">
            <FaCalendarAlt size={60} className="mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">The Calendar</h2>
            <p className="text-md mt-2">
              Easily view and track events scheduled for each day, ensuring you never miss out on any campus activities.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Feed */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6 flex flex-col justify-between transform hover:scale-105 transition-transform" style={{ height: '550px' }}>
            <img
              src="https://cdn.iplocation.net/assets/images/pages/featured/Forums.jpg"
              alt="The Feed"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <hr className="my-4 border-t-2 border-gray-300" />
            <h3 className="text-center text-xl font-semibold mb-4"><b>The Feed</b></h3>
            <div className="flex justify-center mt-auto">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg hover:bg-orange-600 transition mt-auto">
                Continue
              </button>
            </div>
          </div>

          {/* Card 2: Q&A Forum */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6 flex flex-col justify-between transform hover:scale-105 transition-transform" style={{ height: '550px' }}>
            <img
              src="https://media.istockphoto.com/id/1337475990/photo/q-and-a-question-and-answer-shot-form-on-wooden-block.webp?a=1&b=1&s=612x612&w=0&k=20&c=hPBWhpA7NcOcfeGu8yasTC13Lr3F95vmbA1dYFNRHcE="
              alt="Q&A Forum"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <hr className="my-4 border-t-2 border-gray-300" />
            <h3 className="text-center text-xl font-semibold mb-4"><b>The Q&A Forum</b></h3>
            <div className="flex justify-center mt-auto">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg hover:bg-orange-600 transition mt-auto">
                Continue
              </button>
            </div>
          </div>

          {/* Card 3: Calendar */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6 flex flex-col justify-between transform hover:scale-105 transition-transform" style={{ height: '550px' }}>
            <img
              src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNhbGVuZGFyfGVufDB8fHx8MTYwNDU1MDYyNA&ixlib=rb-1.2.1&q=80&w=400"
              alt="Calendar"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <hr className="my-4 border-t-2 border-gray-300" />
            <h3 className="text-center text-xl font-semibold mb-4"><b>The Calendar</b></h3>
            <div className="flex justify-center mt-auto">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg hover:bg-orange-600 transition mt-auto">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;
