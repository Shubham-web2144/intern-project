import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./Componants/Sidebar";
import NewsPost from "./Componants/NewsPost";
import { Pagination } from "@mui/material";
import Pegination from "./Componants/Pegination";

function App() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => setdata(data));
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="app">
      {/* sidebar componants */}
      <Sidebar />

      {/* feed componant */}
      <div className="app_feed">
        {data.length > 0 ? (
          <Pegination
            data={data}
            Componant={NewsPost}
            pageLimit={3}
            dataLimit={5}
          />
        ) : (
          <h1>No post message...</h1>
        )}
      </div>
    </div>
  );
}

export default App;
