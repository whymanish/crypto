import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CoinCard = ({ name, image, current_price }) => (
  <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
    <div
      className="w-full image-zoom h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md transition duration-200 group-hover:scale-110"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}// Adjust the backgroundSize property
    />
    <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
      <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
        {name}
      </h3>
      <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
        <span className="font-bold text-gray-800 dark:text-gray-200">${current_price}</span>
        <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
          Read more
        </button>
      </div>
    </div>
  </div>
);


const Coincard = () => {
  const [coinData, setCoinData] = useState([]);
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/coinData');
      setCoinData(response.data);
      const currentDate = new Date();
      setLastUpdated(currentDate.toLocaleString());
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);

  return (
    <div className="bg-white mt-10 mb-10">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Market Trends, <span className='text-blue-600 text-2xl'>Last Updated: {lastUpdated} </span></h2>

          
        </div>
        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          {coinData.map((coin, index) => (
            <CoinCard key={index} name={coin.name} image={coin.image} current_price={coin.current_price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coincard;
