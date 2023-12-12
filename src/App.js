import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import axios from "axios";

function App() {
  const [elements, setElements] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const url = "https://api.punkapi.com/v2/beers";

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(url);
        setElements(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const filteredElements = () => {
    elements.filter((element) => {
      element.name.toLowerCase().includes(searchTerm.toLocaleLowerCase());
    });
  };

  return (
    <div className="center">
      <div className="search">
        <input
          type="text"
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search items..."
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={filteredElements}
        >
          Search
        </button>
      </div>
      <div className="App container">
        {/* {console.log(elements[0])} */}
        {elements.map((item, index) => {
          return (
            <Card
              key={item.id}
              name={item.name}
              imageUrl={item.image_url}
              tagLine={item.tagline}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;
