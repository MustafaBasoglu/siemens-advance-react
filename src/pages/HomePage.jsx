import { useCallback, useMemo, useState } from "react";
import Button from "../components/UI/Button";
import List from "../components/List";

const HomePage = () => {
  const [title, setTitle] = useState("Title");

  console.log("HomePage çalıştı!");

  const changeTitleHandler = useCallback(() => {
    setTitle("Title Changed!");
  }, []);

  const listItems = useMemo(() => [1, 2, 3, 4, 5], []);

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <p>{title}</p>
      <Button onClick={changeTitleHandler}>Title Change</Button>
      <List items={listItems} />
    </div>
  );
};

export default HomePage;
