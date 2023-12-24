/* eslint-disable @typescript-eslint/no-explicit-any */
// DataList.js
import { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "../components/ui/PokemonCard";
import ManageFilter from "../components/ui/ManageFilter";
import { Skeleton } from "../components/ui/skeleton";

const Home = () => {
  const [data, setData] = useState<any[]>([]);
  const [details, setDetails] = useState<any[]>([]);
  const [searchData, setSearchData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?limit=1000&offset=0`
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
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <div>
      <ManageFilter
        searchData={searchData}
        setSearchData={setSearchData}
        details={details}
        setDetails={setDetails}
      />
      {loading ? (
        <div className="flex items-center space-x-4">
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Skeleton className="h-24 sm:h-48 w-[400px]" />
            <Skeleton className="h-24 sm:h-48 w-[400px]" />
            <Skeleton className="h-24 sm:h-48 w-[400px]" />
            <Skeleton className="h-24 sm:h-48 w-[400px]" />
            <Skeleton className="h-24 sm:h-48 w-[400px]" />
            <Skeleton className="h-24 sm:h-48 w-[400px]" />
            <Skeleton className="h-24 sm:h-48 w-[400px]" />
            <Skeleton className="h-24 sm:h-48 w-[400px]" />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {searchData.length > 0
            ? searchData?.map((item) => <PokemonCard item={item} />)
            : details?.map((item) => <PokemonCard item={item} />)}
        </div>
      )}
    </div>
  );
};

export default Home;
