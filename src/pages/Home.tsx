import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1920&q=80",
];

export function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-100">
      {/* Imagen con texto superpuesto */}
      <div className="relative mx-auto mt-8 h-[40vh] w-[90%] rounded-xl overflow-hidden shadow-lg">
        <img
          src={images[current]}
          alt="Background"
          className="w-full h-full object-cover transition-opacity duration-1000 rounded-xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>

        {/* Texto sobre la imagen */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Turismo Sustentable
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-md">
            Conecta con la naturaleza, transforma tu viaje.
          </p>
        </div>
      </div>

      {/* Buscador con input y botón */}
      <div className="relative z-10 flex items-center justify-center mt-10 px-4">
        <div className="flex rounded-xl overflow-hidden shadow-md">
          <input
            type="text"
            placeholder="Search your stay"
            className="custom-search-input"
          />
          <button className="custom-search-button">
            Buscar
          </button>
        </div>
      </div>

      {/* Texto centrado inferior */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-3xl md:text-4xl font-bold drop-shadow-lg">
        Escape to tranquility.
      </div>
    </div>
  );
}
