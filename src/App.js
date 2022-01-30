import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "./components/Coin";

function App() 
{

  const [listOfItems,setListOfItems] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then((res) => {
      setListOfItems(res.data.coins);
    })
  }, [])

  const filteredCoins = listOfItems.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <div className="App">
        <div className="search">
          <input type="text" placeholder="Search..."           
            onChange={(event) => {
              setSearchWord(event.target.value);
            }} 
          />
        </div>

        <div className="coins">
            {
              filteredCoins.map( (coin) => {
                return (
                  <Coin 
                    icon = {coin.icon}
                    name = {coin.name}
                    symbol = {coin.symbol}
                    price = {coin.price}
                  />
                );
              })
            }
        </div>
    </div>
  );
}

export default App;