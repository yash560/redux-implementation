import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest } from "./store/actions";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  useEffect(() => {
    setFilteredData(
      state.data &&
        state.data.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )
    );
  }, [state.data, search]);

  if (state.loading) {
    return <>Loading ....</>;
  }

  if (state.error || state.error !== "") {
    return <>ERROR</>;
  }

  return (
    <div className="App">
      <p>Dev</p>
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="text"
        value={search}
        placeholder="Search to apply filter"
      />
      <ul>
        {filteredData.map((element, key) => {
          return <li key={key}>{element.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
