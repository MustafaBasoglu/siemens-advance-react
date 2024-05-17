import { useCallback, useState } from "react";
import MyElement from "../components/MyElement";
import Button from "../components/UI/Button";

const HomePage = () => {
  const [toggleParagraph, setToggleParagraph] = useState(false);
  const [toggleAllow, setToggleAllow] = useState(false);

  console.log("HomePage çalıştı!");

  const toggleParagraphHandler = useCallback(() => {
    if(toggleAllow){
      setToggleParagraph((prevState) => !prevState);
    }
  }, [toggleAllow]);

  const toggleAllowHandler = () =>{
    setToggleAllow(true)
  }

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <MyElement show={toggleParagraph} />
      <br />
      <Button onClick={toggleAllowHandler}>Toggle Allow</Button>
      <br />
      <br />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
};

export default HomePage;
