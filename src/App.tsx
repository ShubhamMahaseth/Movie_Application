import { useEffect } from "react";
import "./App.css";
import { handleGetRequest } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/action";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/common/header";
import Home from "./pages/home";
import Explore from "./pages/explore";
import Details from "./pages/details";
import PageNotFound from "./pages/404";
import SearchResult from "./pages/search-result";
import Footer from "./components/common/footer";

function App() {
  const dispatch = useDispatch();
  // const getApiConfiguration = useSelector((state) => {
  //   state.getApiConfiguration;
  // });
  // console.log("hello", import.meta.env);
  const handleData = function () {
    handleGetRequest("/movie/popular").then((res) => {
      dispatch(getApiConfiguration(res));
    });
  };

  // console.log(getApiConfiguration);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
