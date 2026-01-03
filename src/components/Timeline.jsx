import React from 'react';

const Timeline = () => {
  const timelineData = [
    {
      year: '1990',
      title: 'Company Founded',
      description: 'Started as a small fabrication workshop with 3 employees and a vision for quality manufacturing.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
      side: 'left'
    },
    {
      year: '1995',
      title: 'First Major Contract',
      description: 'Secured our first major industrial contract, marking our entry into large-scale manufacturing.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop',
      side: 'right'
    },
    {
      year: '2000',
      title: 'Facility Expansion',
      description: 'Expanded to our current 100,000 sq ft facility and installed advanced CNC equipment.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      side: 'left'
    },
    {
      year: '2005',
      title: 'ISO 9001 Certification',
      description: 'Achieved ISO 9001 certification, establishing our commitment to quality management.',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=300&fit=crop',
      side: 'right'
    },
    {
      year: '2010',
      title: 'Technology Upgrade',
      description: 'Invested in state-of-the-art plasma cutting and automated welding systems.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      side: 'left'
    },
    {
      year: '2015',
      title: 'Global Expansion',
      description: 'Began exporting to international markets and established partnerships worldwide.',
      image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&h=300&fit=crop',
      side: 'right'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Implemented Industry 4.0 technologies and digital manufacturing processes.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop',
      side: 'left'
    },
    {
      year: '2024',
      title: 'Sustainability Initiative',
      description: 'Launched comprehensive sustainability program and achieved carbon-neutral operations.',
      image: 'https://images.unsplash.com/photo-1568198478013-75ee31b0aa8d?w=400&h=300&fit=crop',
      side: 'right'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-3xl font-bold mb-4 !text-blue-900 py-2">Our Journey Through Time</p>
          <p className="text-lg md:text-xl text-black leading-relaxed">
            From humble beginnings to industry leadership - discover the milestones that shaped our company.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-700 to-amber-500"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  item.side === 'left' ? 'flex-row' : 'flex-row-reverse'
                } relative`}
              >
                {/* Content */}
                <div className={`w-5/12 ${item.side === 'left' ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className={`${item.side === 'left' ? 'text-right' : 'text-left'}`}>
                      <div className="text-2xl font-bold text-blue-800 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold !text-gray-700 mb-3">{item.title}</h3>
                      <p className="text-gray-800 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="w-6 h-6 bg-white border-4 border-blue-600 rounded-full relative z-10 mx-auto shadow-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                {/* Image */}
                <div className={`w-5/12 ${item.side === 'left' ? 'pl-8' : 'pr-8'}`}>
                  <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;