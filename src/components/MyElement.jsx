import React from "react";
import PropTypes from "prop-types";
import MyParagraph from "./MyParagraph";

const MyElement = ({ show }) => {
    console.log("MyElement çalıştı!");
  return <MyParagraph>{show && "My Paragraph"}</MyParagraph>;
};

MyElement.propTypes = {
  show: PropTypes.bool,
};

const MemoizedElement = React.memo(MyElement);

export default MemoizedElement;
