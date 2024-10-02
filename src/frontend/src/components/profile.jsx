export default function Profile() {
    return (
  <div className="bg-[#ffffff] p-6">
    <div className="flex items-center">
      <img
        className="w-24 h-24 rounded-full border-4 border-[#d1d5db]"
        src="https://picsum.photos/100"
        alt="Profile"
      />
      <div className="ml-6">
        <h1 className="text-2xl font-bold text-[#000000]">Eliora Sage</h1>
        <p className="text-lg text-[#6b7280]">@SereneAura</p>
      </div>
      <div className="ml-auto flex items-center space-x-2">
        <button className="bg-[#319795] text-white px-4 py-2 rounded-full">Follow</button>
        <button className="bg-[#319795] text-white px-2 py-2 rounded-full">
          <i className="fas fa-chevron-down"></i>
        </button>
        <button className="text-[#000000]">
          <i className="fas fa-ellipsis-h"></i>
        </button>
      </div>
    </div>
    <div className="mt-4 flex space-x-4">
      <div className="text-center">
        <span className="font-bold text-[#000000]">100</span>
        <span className="text-[#6b7280]"> posts</span>
      </div>
      <div className="text-center">
        <span className="font-bold text-[#000000]">100</span>
        <span className="text-[#6b7280]"> threads</span>
      </div>
      <div className="text-center">
        <span className="font-bold text-[#000000]">100</span>
        <span className="text-[#6b7280]"> following</span>
      </div>
      <div className="text-center">
        <span className="font-bold text-[#000000]">100</span>
        <span className="text-[#6b7280]"> followers</span>
      </div>
    </div>
    <div className="mt-4 text-[#000000]">
      <p>Chasing sunsets & good vibes 🌅 | Coffee lover ☕ | Dreamer with a plan ✨</p>
      <p>Exploring life one day at a time | Living for the moments that take your breath away 💫</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <a href="#" className="text-[#000000]">more</a>
    </div>
    <div className="mt-4 flex justify-end">
      <button className="bg-[#6b4f8a] text-white p-2 rounded-full">
        <i className="fas fa-user-friends"></i>
      </button>
    </div>
  </div>
);
}