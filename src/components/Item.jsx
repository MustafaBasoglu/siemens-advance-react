import PropTypes from "prop-types";

const Item = ({ result }) => {

  const itemTextCol = () => (
    <div className="item-column">
      <h2>
        <a href="">{result.title}</a>
      </h2>
      <p>{result.extract}</p>
    </div>
  );

  const content = (<article>{itemTextCol()}</article>);

  return content;
};

Item.propTypes = {
  result: PropTypes.object,
};

export default Item;
