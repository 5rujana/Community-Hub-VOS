export default function feedPage() {
  return (
    <div className="min-h-screen p-4 w-1/2">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center border-b-[1px] border-[#000000] pb-2 mb-4">
          <div className="relative">
            <button className="text-[20px] font-bold text-[#000000] px-4 py-2 rounded-[8px] bg-[#e0e0e0] hover:bg-[#d4d4d4] focus:outline-none focus:ring-2 focus:ring-[#000000]">
              Feed
            </button>
            <div className="absolute top-0 left-0 w-full h-full bg-[#000000] rounded-[8px] opacity-10"></div>
          </div>
          <div className="relative">
            <button className="text-[20px] font-bold text-[#b3b3b3] px-4 py-2 rounded-[8px] bg-[#e0e0e0] hover:bg-[#d4d4d4] focus:outline-none focus:ring-2 focus:ring-[#000000]">
              Replies
            </button>
            <div className="absolute top-0 left-0 w-full h-full bg-[#000000] rounded-[8px] opacity-10"></div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-[8px] shadow-md">
            <div className="flex items-start space-x-4">
              <img
                src="https://picsum.photos/50"
                alt="profile"
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div className="text-[16px] font-bold text-[#000000]">
                    csi
                  </div>
                  <div className="text-[14px] text-[#b3b3b3]">33m</div>
                </div>
                <div className="text-[16px] text-[#000000]">
                  New event coming soon...
                </div>
                <img
                  src="https://picsum.photos/200"
                  alt="event"
                  className="w-full mt-2 rounded-[8px]"
                />
                <div className="flex items-center space-x-4 mt-2">
                  <i className="far fa-heart text-[20px] text-[#000000]"></i>
                  <i className="far fa-comment text-[20px] text-[#000000]"></i>
                  <i className="fas fa-share text-[20px] text-[#000000]"></i>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <img
                    src="https://picsum.photos/20"
                    alt="profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <img
                    src="https://picsum.photos/20"
                    alt="profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <div className="text-[14px] text-[#000000]">
                    26 replies • 112 likes
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-[8px] shadow-md">
            <div className="flex items-start space-x-4">
              <img
                src="https://picsum.photos/50"
                alt="profile"
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div className="text-[16px] font-bold text-[#000000]">
                    ahana
                  </div>
                  <div className="text-[14px] text-[#b3b3b3]">33m</div>
                </div>
                <div className="text-[16px] text-[#000000]">
                  can’t wait to see it all unfold
                </div>
                <div className="flex items-center space-x-4 mt-2">
                  <i className="far fa-heart text-[20px] text-[#000000]"></i>
                  <i className="far fa-comment text-[20px] text-[#000000]"></i>
                  <i className="fas fa-share text-[20px] text-[#000000]"></i>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <img
                    src="https://picsum.photos/20"
                    alt="profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <img
                    src="https://picsum.photos/20"
                    alt="profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <div className="text-[14px] text-[#000000]">
                    26 replies • 112 likes
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-[8px] shadow-md">
            <div className="flex items-start space-x-4">
              <img
                src="https://picsum.photos/50"
                alt="profile"
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div className="text-[16px] font-bold text-[#000000]">
                    ahana
                  </div>
                  <div className="text-[14px] text-[#b3b3b3]">45m</div>
                </div>
                <div className="text-[16px] text-[#000000]">
                  This is going to be exciting!!
                </div>
                <div className="flex items-center space-x-4 mt-2">
                  <i className="far fa-heart text-[20px] text-[#000000]"></i>
                  <i className="far fa-comment text-[20px] text-[#000000]"></i>
                  <i className="fas fa-share text-[20px] text-[#000000]"></i>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <img
                    src="https://picsum.photos/20"
                    alt="profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <img
                    src="https://picsum.photos/20"
                    alt="profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <div className="text-[14px] text-[#000000]">
                    14 replies • 98 likes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
