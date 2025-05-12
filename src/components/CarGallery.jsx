import { useSelector } from "react-redux";

const CarGallery = () => {
  const cars = useSelector((state) => state.cars.cars);

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-4 justify-center">
        {cars.map((car) => (
          <div
            key={car.id}
            className="w-[300px] h-[200px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarGallery;
