import { useEffect, useState } from "react";
import axiosInstance from "../axios";

/* ---------------- COMPONENTS ---------------- */

const ContentCard = ({ name, description, details }) => (
  <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-center border border-gray-200 card-animate">
    <p className="text-2xl font-bold text-gray-900 mb-3">{name}</p>
    <p className="text-gray-700 leading-relaxed mb-4">{description}</p>
    <p className="text-gray-600 text-sm font-semibold">{details}</p>
  </div>
);

const ImageBlock = ({ src, alt }) => (
  <div className="flex items-center justify-center p-4 image-animate">
    <img
      src={src}
      alt={alt}
      loading="eager"
      decoding="sync"
      className="rounded-lg shadow-lg w-full max-w-md object-cover"
      style={{
        height: "320px",
        aspectRatio: "4 / 3",
      }}
    />
  </div>
);

/* ---------------- MAIN SECTION ---------------- */

const EquipmentsSection = () => {
  const [equipments, setEquipments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEquipments = async () => {
      try {
        const res = await axiosInstance.get("/equipments");
        setEquipments(res.data);
      } catch (err) {
        console.error("Failed to fetch equipments", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEquipments();
  }, []);

  if (loading) {
    return (
      <section className="py-20 text-center text-gray-600">
        Loading equipments...
      </section>
    );
  }

  // pair equipments (same logic you already had)
  const paired = [];
  for (let i = 0; i < equipments.length; i += 2) {
    paired.push(equipments.slice(i, i + 2));
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <p className="text-4xl font-bold text-blue-800 mb-6">
            Our Equipments
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
            Our factory is equipped with cutting-edge machinery designed to handle
            complex fabrication tasks with precision and efficiency.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="space-y-24">
          {paired.map((pair, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              {pair.length === 2 ? (
                <>
                  <ImageBlock
                    src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${pair[0].image}`}
                    alt={pair[0].name}
                  />
                  <ContentCard {...pair[0]} />

                  <ContentCard {...pair[1]} />
                  <ImageBlock
                    src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${pair[1].image}`}
                    alt={pair[1].name}
                  />
                </>
              ) : (
                <>
                  <ImageBlock
                    src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${pair[0].image}`}
                    alt={pair[0].name}
                  />
                  <ContentCard {...pair[0]} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentsSection;
