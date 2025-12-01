import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';

const Coverage = () => {
  const position = [23.6850, 90.3563]
  const serviceCenter = useLoaderData();
  const mapRef = useRef(null);
  // console.log(serviceCenter);

  const handleSearch = e => {
    e.preventDefault();

    const location = e.target.location.value;
    const district = serviceCenter.find(c => c.district.toLowerCase().includes(location.toLowerCase()));
    if (district) {
      const coord = [district.latitude, district.longitude]
      console.log(district, coord);
      mapRef.current.flyTo(coord, 14);
    }

  }

  return (
    <div>
      <h2 className="text-5xl">
        We are available in 64 districts
      </h2>

      <form className='my-10' action="" onSubmit={handleSearch}>
        <div className="w-full max-w-md mx-auto flex items-center border border-gray-300 rounded-full overflow-hidden shadow-sm bg-white">
          {/* Icon and Input */}
          <div className="flex items-center px-4 py-2 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
            <input
              type="text"
              name='location'
              placeholder="Search here"
              className="w-full outline-none text-gray-700 placeholder-gray-400 bg-transparent"
            />
          </div>

          {/* Search Button */}
          <button className="bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-2 rounded-r-full transition">
            Search
          </button>
        </div>
      </form>
      <div className='border w-full h-[800px]'>
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className='h-[800px]'
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {
            serviceCenter.map((center, index) => <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong> <br />
                Service Area: {center.covered_area.join(', ')}
              </Popup>
            </Marker>)
          }

        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;