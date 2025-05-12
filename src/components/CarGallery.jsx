import { useSelector } from "react-redux";
import { useState } from "react";

const CarGallery = () => {
  const cars = useSelector((state) => state.cars.cars);
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-4 justify-center">
        {cars.map((car) => (
          <div
            key={car.id}
            onClick={() => setSelectedImage(car.image)}
            className="w-[300px] h-[200px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <img
            src={selectedImage}
            alt="Selected Car"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default CarGallery;
