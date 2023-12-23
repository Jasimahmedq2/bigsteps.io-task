/* eslint-disable @typescript-eslint/no-explicit-any */
// DataList.js
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../components/ui/button";
import PokemonCard from "../components/ui/PokemonCard";
import ManageFilter from "../components/ui/ManageFilter";

const Home = () => {
  const [data, setData] = useState<any[]>([]);
  const [details, setDetails] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(20);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?limt=${limit}&offset=${currentPage}`
      );
      setData(response.data.results);
      const detailsPromises = response.data.results.map((item) =>
        axios.get(item.url)
      );
      const detailsResponses = await Promise.all(detailsPromises);
      const detailsData = detailsResponses.map((response) => response.data);
      setDetails(detailsData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 20);
    console.log(limit);
    console.log(currentPage);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <ManageFilter />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {details?.map((item) => (
          <PokemonCard item={item} />
        ))}
      </div>
      <Button
        variant="outline"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        Previous Page
      </Button>
      <Button variant="outline" onClick={handleNextPage}>
        Next Page
      </Button>
    </div>
  );
};

export default Home;
