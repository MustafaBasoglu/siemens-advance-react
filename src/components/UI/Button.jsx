import PropTypes from "prop-types";

function Button(props) {
  console.log(props);
  return <button>{props.children}</button>;
}

Button.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
