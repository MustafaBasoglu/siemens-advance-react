import { useState } from "react";
import MyElement from "../components/MyElement";
import Button from "../components/UI/Button";

const HomePage = () => {
  const [toggleParagraph, setToggleParagraph] = useState(false);

  console.log("HomePage çalıştı!");

  const toggleParagraphHandler = () => {
    setToggleParagraph(!toggleParagraph);
  };

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <MyElement show={false} />
      <br />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
};

export default HomePage;
