/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

const PokemonCard = ({ item }: { item: any }) => {
  return (
    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl lg:max-w-lg hover:cursor-pointer">
      <img
        className="object-cover w-full h-56 md:h-64 xl:h-80"
        src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${item?.id}.svg`}
        alt="category"
      />
      <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
        <p className="mb-4 text-lg font-bold text-gray-100">{item?.id}</p>
        <p className="mb-4 text-lg font-bold text-gray-100">{item?.name}</p>
        <p className="text-sm tracking-wide text-gray-300">
          {item?.types[0]?.type?.name}
        </p>
      </div>
    </div>
  );
};

export default PokemonCard;
