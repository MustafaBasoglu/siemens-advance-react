import PropTypes from "prop-types";

const Item = ({ result }) => {
  const itemTextCol = () => (
    <div className="item-column">
      <img src={result?.thumbnail?.source} alt="" width={200} />
      <h2>
        <a target="_blank" href={`https://en.wikipedia.org/?curid=${result.pageid}`}>
          {result.title}
        </a>
      </h2>
      <p>{result.extract}</p>
    </div>
  );

  const content = <article>{itemTextCol()}</article>;

  return content;
};

Item.propTypes = {
  result: PropTypes.object,
};

export default Item;
