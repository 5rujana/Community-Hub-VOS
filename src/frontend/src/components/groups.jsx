export default function Groups() {
  return (
    <div className="p-4 rounded-[20px] w-[375px]">
      <div className="bg-[#f0f4f8] rounded-full p-2 flex items-center mb-4">
        <i className="fas fa-search text-[#b0b7c3] ml-2"></i>
        <input
          type="text"
          placeholder="Search Feed"
          className="bg-transparent outline-none ml-2 text-[#b0b7c3]"
        />
      </div>
      <div className="space-y-6">
        <div className="bg-white p-4 rounded-[20px] shadow-sm">
          <h2 className="text-[#000000] text-[24px] font-bold">
            The Computer Society of India
          </h2>
          <p className="text-[#000000] text-[16px]">csi</p>
          <div className="flex items-center mt-2">
            <img
              src="https://picsum.photos/24"
              className="w-6 h-6 rounded-full"
            />
            <img
              src="https://picsum.photos/24"
              className="w-6 h-6 rounded-full -ml-2"
            />
            <img
              src="https://picsum.photos/24"
              className="w-6 h-6 rounded-full -ml-2"
            />
            <p className="text-[#000000] text-[14px] ml-2">2 k followers •</p>
          </div>
          <button className="bg-[#4b215f] text-white w-full py-2 mt-4 rounded-[10px]">
            Follow
          </button>
        </div>
        <div className="bg-white p-4 rounded-[20px] shadow-sm">
          <h2 className="text-[#000000] text-[24px] font-bold">
            NextGen Cloud
          </h2>
          <p className="text-[#000000] text-[16px]">ngc</p>
          <div className="flex items-center mt-2">
            <img
              src="https://picsum.photos/24"
              className="w-6 h-6 rounded-full"
            />
            <img
              src="https://picsum.photos/24"
              className="w-6 h-6 rounded-full -ml-2"
            />
            <img
              src="https://picsum.photos/24"
              className="w-6 h-6 rounded-full -ml-2"
            />
            <p className="text-[#000000] text-[14px] ml-2">1.5 k followers •</p>
          </div>
          <button className="bg-[#4b215f] text-white w-full py-2 mt-4 rounded-[10px]">
            Follow
          </button>
        </div>
        <div className="bg-white p-4 rounded-[20px] shadow-sm">
          <h2 className="text-[#000000] text-[24px] font-bold">
            Be A Nerd Club
          </h2>
          <p className="text-[#000000] text-[16px]">ban_club</p>
          <div className="flex items-center mt-2">
            <img
              src="https://picsum.photos/24"
              className="w-6 h-6 rounded-full"
            />
            <img
              src="https://picsum.photos/24"
              className="w-6 h-6 rounded-full -ml-2"
            />
            <img
              src="https://picsum.photos/24"
              className="w-6 h-6 rounded-full -ml-2"
            />
            <p className="text-[#000000] text-[14px] ml-2">1 k followers •</p>
          </div>
          <button className="bg-[#4b215f] text-white w-full py-2 mt-4 rounded-[10px]">
            Follow
          </button>
        </div>
        <div className="bg-white p-4 rounded-[20px] shadow-sm">
          <h2 className="text-[#000000] text-[24px] font-bold">
            VIT AP University
          </h2>
          <p className="text-[#000000] text-[16px]">vitap</p>
          <div className="flex items-center mt-2">
            <img
              src="https://picsum.photos/24"
              className="w-6 h-6 rounded-full"
            />
            <img
              src="https://picsum.photos/24"
              className="w-6 h-6 rounded-full -ml-2"
            />
            <img
              src="https://picsum.photos/24"
              className="w-6 h-6 rounded-full -ml-2"
            />
            <p className="text-[#000000] text-[14px] ml-2">1 k followers •</p>
          </div>
          <button className="bg-[#4b215f] text-white w-full py-2 mt-4 rounded-[10px]">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}
