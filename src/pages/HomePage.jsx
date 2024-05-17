import { useState } from "react";
import List from "../components/List";
import SearchInput from "../components/UI/SearchInput";
import useDebounce from "../hooks/useDebounce";

const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 1000);

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <List searchTerm={debouncedSearchValue} />
    </div>
  );
};

export default HomePage;
