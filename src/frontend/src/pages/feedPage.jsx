import Feed from "../components/feed";
import Groups from "../components/groups";
import SideBar from "../components/sideBar";

const FeedPage = () => {
  return (
    <div className="flex bg-[#fefaf4]">
      <SideBar/>
      <Feed/>
      <Groups/>
    </div>
  );
};

export default FeedPage;