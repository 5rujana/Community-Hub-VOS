import { useState, useEffect } from "react";
import GroupItem from "./groupItem";

export default function Groups() {
  const [groups, setGroups] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredGroups, setFilteredGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchGroups();
  }, []);

  useEffect(() => {
    try {
      const filtered = groups.filter((group) =>
        group.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredGroups(filtered);
      setError(null);
    } catch (err) {
      setError("An error occurred while filtering groups. Please try again.");
      console.error("Error filtering groups:", err);
    }
  }, [searchTerm, groups]);

  const fetchGroups = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/groups"); // Replace with your actual API endpoint
      if (!response.ok) {
        throw new Error("Failed to fetch groups");
      }
      const data = await response.json();
      setGroups(data);
      setFilteredGroups(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch groups. Please try again later.");
      console.error("Error fetching groups:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="p-4 rounded-[20px] w-[375px]">
      <div className="bg-[#f0f4f8] rounded-full p-2 flex items-center mb-4">
        <i className="fas fa-search text-[#b0b7c3] ml-2"></i>
        <input
          type="text"
          placeholder="Search Feed"
          className="bg-transparent outline-none ml-2 text-[#b0b7c3]"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {isLoading ? (
        <div>Loading groups...</div>
      ) : filteredGroups.length > 0 ? (
        <div className="space-y-6">
          {filteredGroups.map((group) => (
            <GroupItem key={group.id} group={group} />
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
