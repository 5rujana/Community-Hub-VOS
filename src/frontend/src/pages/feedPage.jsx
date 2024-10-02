import Feed from "../components/feed";
import Groups from "../components/groups";
import SideBar from "../components/sideBar";
import Navbar from "../components/NavBar"; // Import the Navbar component

const FeedPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#fefaf4]">
      <Navbar className="fixed top-0 left-0 right-0 z-50" />{" "}
      {/* Fixed Navbar */}
      <div className="flex flex-1">
        {" "}
        {/* Add top margin to account for fixed Navbar */}
        <SideBar />
        <Feed />
        <Groups />
      </div>
    </div>
  );
};

export default FeedPage;
