import PropTypes from "prop-types";
import useSWR from "swr";
import { getWikiSearchResults } from "../api/wikiApi";
import Item from "./Item";

const List = ({ searchTerm }) => {
  const { isLoading, error, data } = useSWR(
    searchTerm ? searchTerm : null,
    getWikiSearchResults
  );

  if (data) {
    console.log(Object.values(data?.query?.pages));
  }

  let content;
  if (isLoading) content = <p>Loading...</p>;
  else if (error) content = <p>{error.message}</p>;
  else if (data?.query?.pages) {
    const results = data?.query?.pages;
    content = (
      <ul>
        {Object.values(results).map((result) => {
          return <Item key={result.pageid} result={result} />;
        })}
      </ul>
    );
  }

  return content;
};

List.propTypes = {
  searchTerm: PropTypes.string,
};

export default List;
