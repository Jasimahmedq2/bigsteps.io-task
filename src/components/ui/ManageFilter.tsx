/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "./input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

const ManageFilter = ({
  searchData,
  setSearchData,
  details,
  setDetails,
}: {
  searchData: any;
  setSearchData: any;
  details: any;
  setDetails: any;
}) => {
  // handle search by id and name
  const handleSearch = (e: { target: { value: any } }) => {
    const searchQuery = e.target.value.toLowerCase();
    const searchResult = details?.filter(
      (item: any) =>
        item.id.toString().includes(searchQuery) ||
        item.name.toLowerCase().includes(searchQuery)
    );
    setSearchData(searchResult);
    console.log("SearchResult", searchResult);
  };

  // implement filter by type

  const handleFilter = (text: string) => {
    const filterResult = details.filter((item: any) =>
      item.types.some((type: any) => type?.type?.name === text)
    );
    setSearchData(filterResult);
    console.log(filterResult);
  };

  return (
    <div className="flex items-center space-x-12 p-6">
      <div>
        <Input
          onChange={handleSearch}
          type="text"
          placeholder="search result"
        />
      </div>
      <div>
        <Select onValueChange={(value) => handleFilter(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="grass">grass</SelectItem>
            <SelectItem value="fire">fire</SelectItem>
            <SelectItem value="water">water</SelectItem>
            <SelectItem value="bug">bug</SelectItem>
            <SelectItem value="poison">poison</SelectItem>
            <SelectItem value="flying">flying</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ManageFilter;
