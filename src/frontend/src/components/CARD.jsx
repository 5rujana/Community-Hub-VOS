export default function Card() {
    return (
  <div className="w-[250px] p-4 border-[1px] border-[#E0E0E0] rounded-[8px] shadow-md text-center">
    <div className="flex justify-center mb-4">
      <img
        className="w-[80px] h-[80px] rounded-full"
        src="https://picsum.photos/80"
        alt="Profile"
      />
    </div>
    <div className="text-[#000000] text-[16px] font-medium mb-4">@CosmicWanderer</div>
    <button className="bg-[#5D3A9B] text-[#FFFFFF] text-[16px] font-medium py-2 px-4 rounded-[8px]">
      Follow
    </button>
  </div>
);
}