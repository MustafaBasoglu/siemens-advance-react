import Spinner from "../components/UI/Spinner";
import useFetchData from "../hooks/useFetchData";

const HomePage = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useFetchData("https://jsonplaceholder.typicode.com/users");
  
  return (
    <div className="home-page">
      <h1>Home Page</h1>
      {isLoading && <Spinner />}
      {error && <p>Bir hata oluştu.</p>}
      {users.map((user) => (
        <div key={user.id}>
          <strong>Name:</strong>
          <span>{user.name}</span>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
