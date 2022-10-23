import Buton from "./compoents/Button";
import Cards from "./compoents/Card";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [person, setPerson] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "https://randomuser.me/api/";

  const getPerson = async () => {
    setLoading(false);

    try {
      const { data } = await axios(url);
      console.log(data);
      setPerson(data.results[0]);
      console.log(person);
    } catch (error) {
      console.log(error);
    }
    setLoading(true);
  };

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div className="App">
      <Cards person={person} />
      <Buton getPerson={getPerson} loading={loading} />
    </div>
  );
}

export default App;
