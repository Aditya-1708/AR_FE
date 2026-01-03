import React from "react";

// Local image imports
import shotBlastingImg from "../assets/image1/shotblastbooth.webp";
import paintBoothImg from "../assets/image1/paintbooth.webp";
import plasmaMachineImg from "../assets/image1/plasmacutting.webp";
import ohcraneimg from "../assets/image1/ohcrane.webp";
import rollingMachineImg from "../assets/image1/Rollingmachine.webp";

/* ---------------- DATA ---------------- */

const equipments = [
  {
    name: "10 Ton OH Crane",
    details: "overhead cranes with 10-ton capacity each for heavy material handling.",
    description:
      "Our facility houses overhead cranes with a 10-ton lifting capacity each, ensuring safe and efficient handling of heavy structural components during fabrication and assembly.",
    image: ohcraneimg,
  },
  {
    name: "Shot Blasting Booth",
    details: "State-of-the-art 10m × 5m blast booth for surface preparation.",
    description:
      "The 10m × 5m shot blasting booth is designed for superior surface cleaning, removing rust, scale, and other impurities, ensuring material readiness for further processing.",
    image: shotBlastingImg,
  },
  {
    name: "Paint Booth",
    details: "Advanced 10m × 5m booth with bottom suction paper filter for smooth coating.",
    description:
      "Equipped with bottom suction and paper filter technology, the paint booth ensures flawless finishing, consistent coating quality, and a dust-free environment for industrial painting.",
    image: paintBoothImg,
  },
  {
    name: "Plasma Machine",
    details:
      "3m × 14m effective cutting machine with Hypertherm power source for precision cutting.",
    description:
      "This machine allows for highly accurate cutting on large plates up to 14m in length. Powered by Hypertherm, it enables complex profile cutting with high precision and efficiency.",
    image: plasmaMachineImg,
  },
  {
    name: "Rolling Machine",
    details: "2.1m × 10mm thick capacity, 4-roll machine from Akyapak, Turkey.",
    description:
      "The 4-roll plate bending machine from Akyapak (Turkey) is capable of rolling steel plates up to 2.1m wide and 10mm thick, suitable for cylindrical and conical components.",
    image: rollingMachineImg,
  },
];

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
  const paired = [];
  for (let i = 0; i < equipments.length; i += 2) {
    paired.push(equipments.slice(i, i + 2));
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 flex flex-col items-center">
  <p className="text-4xl font-bold text-blue-800 mb-6">
    Our Equipments
  </p>
  <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
    Our factory is equipped with cutting-edge machinery designed to handle
    complex fabrication tasks with precision and efficiency.
  </p>
</div>


        <div className="space-y-24">
          {paired.map((pair, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              {pair.length === 2 ? (
                <>
                  <ImageBlock src={pair[0].image} alt={pair[0].name} />
                  <ContentCard {...pair[0]} />

                  <ContentCard {...pair[1]} />
                  <ImageBlock src={pair[1].image} alt={pair[1].name} />
                </>
              ) : (
                <>
                  <ImageBlock src={pair[0].image} alt={pair[0].name} />
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
