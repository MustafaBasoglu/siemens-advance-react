import { useState } from "react";
import List from "../components/List";
import SearchInput from "../components/UI/SearchInput";

const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <List searchTerm={searchValue} />
    </div>
  );
};

export default HomePage;
