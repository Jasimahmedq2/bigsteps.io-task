/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Progress } from "./progress";

const PokemonCard = ({ item }: { item: any }) => {
  return (
    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl lg:max-w-lg hover:cursor-pointer">
      <img
        className="object-cover w-full h-56 md:h-64 xl:h-80"
        src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${item?.id}.svg`}
        alt="category"
      />
      <div className="absolute inset-0 px-4 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
        <p className="mb-4 text-lg font-bold text-gray-100">id: {item?.id}</p>
        <p className="mb-4 text-lg font-bold text-gray-100">
          name: {item?.name}
        </p>
        <p className="tracking-wide text-lg text-gray-100">
          type: {item?.types[0]?.type?.name}
        </p>

        {/* modal for display pokemon data */}
        <Dialog>
          <DialogTrigger className="absolute bottom-6 w-11/12 mx-auto" asChild>
            <Button variant="outline">Show Details</Button>
          </DialogTrigger>
          <DialogContent className="min-h-96 overflow-auto sm:overflow-hidden sm:min-h-96 ">
            <DialogHeader>
              <DialogTitle>{item?.name}</DialogTitle>
            </DialogHeader>
            <div className="sm:flex space-x-6 sm:space-x-6  items-center">
              <div>
                <img
                  src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${item?.id}.svg`}
                  alt="image"
                />
              </div>
              <div className=" w-2/3 space-y-8 flex flex-col items-center">
                {item?.stats?.map((el: any) => {
                  return (
                    <div className="w-11/12 sm:flex space-x-8 items-center">
                      <h3 className="text-lg sm:w-56 font-bold text-gray-400 uppercase">
                        {el?.stat?.name}
                      </h3>
                      <p className="text-xl text-left sm:w-[56px] font-bold">
                        {el?.base_stat}
                      </p>
                      <Progress className="sm:w-96" value={el?.base_stat} />
                    </div>
                  );
                })}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default PokemonCard;
