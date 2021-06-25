import { API } from "../components/config/Api";
import { useState, useEffect } from "react";

const Home = () => {
  const [Quote, setQuote] = useState("");
  const [Favourite, setFavourite] = useState("");
  const [myQuote, setMyQuote] = useState("");
  const handleQuote = async () => {
    try {
      const response = await API.get("/");
      setQuote(response.data.quote);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleQuote();
  }, []);
  console.log(Quote);

  const handleMyQuote = async (e) => e.preventDefault;
  return (
    <div>
      <h1>Kanye West Quote</h1>
      <div>{Quote}</div>
      <button onClick={handleQuote}>Get Quote</button>
      <button onClick={() => ({ Quote } = setFavourite)}>Add Favourite</button>
      <h3>My Fav Quote</h3>
      <p>{Favourite}</p>
      <h1>My Quotes</h1>
      <form>
        <input
          type="text"
          placeholder="input your own quote"
          onChange={(e) => setMyQuote(e.target.value)}
        />
        <button onClick={handleMyQuote}> Submit</button>
        <p>{myQuote}</p>
      </form>
    </div>
  );
};

export default Home;
