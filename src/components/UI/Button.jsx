import PropTypes from "prop-types";
import "./Button.css";

function Button(props) {
  const sizeClass = `btn-${props.size}`;
  const backgroundClass = `btn-${props.background}`;
  const classes = `${sizeClass} ${backgroundClass} ${props.className}`;

  return <button className={classes} onClick={props.onClick}>{props.children}</button>;
}

Button.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.string,
  background: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
