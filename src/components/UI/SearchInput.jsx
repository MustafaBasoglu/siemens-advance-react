import PropTypes from "prop-types";

const SearchInput = ({ searchValue, setSearchValue }) => {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="search"
      autoFocus
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
};

SearchInput.propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
};
export default SearchInput;
