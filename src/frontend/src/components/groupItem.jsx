const GroupItem = () => {
  return (
    <div className="bg-white p-4 rounded-[20px] shadow-sm">
      <h2 className="text-[#000000] text-[24px] font-bold">
        The Computer Society of India
      </h2>
      <p className="text-[#000000] text-[16px]">csi</p>
      <div className="flex items-center mt-2">
        <img src="https://picsum.photos/24" className="w-6 h-6 rounded-full" />
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
  );
};

export default GroupItem;
