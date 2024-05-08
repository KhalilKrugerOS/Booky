import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import api from "./api/axiosConfig";

import Layout from "./components/Layout";
import { Camera } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/home/Home";
function App() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    try {
      const response = await api.get("/api/v1/books");
      console.log(response.data);
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home books={books} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
