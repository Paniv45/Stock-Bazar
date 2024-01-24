import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

const Main = () => {
  const stocksPerPage = 10; // Number of stocks to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const stocks = [
    { name: 'HCL Technologies', openingBid: 6608, status: -25 },
    { name: 'MRF', openingBid: 100100, status: -16.36 },
    { name: 'CEAT', openingBid: 1419.5, status: +5.5 },
    { name: '3M India', openingBid: 22751, status: +11.25 },
    { name: 'UltraTech Cem.', openingBid: 6648.85, status: +10.43 },
    { name: 'Honeywell Automation', openingBid: 43885, status: +15.2 },
    { name: 'Bosch', openingBid: 19366, status: -10.25 },
    { name: 'Nestle India', openingBid: 20744.3, status: +5 },
    { name: 'Lakshmi Machine Works', openingBid: 13737, status: +34 },
    { name: 'Bombay Oxygen', openingBid: 11558, status: -23.34 },
    { name: 'Infosys', openingBid: 1500, status: +8.75 },
    { name: 'Reliance Industries', openingBid: 2350.5, status: -12.5 },
    { name: 'Tata Motors', openingBid: 320.75, status: +20.15 },
    { name: 'Wipro', openingBid: 710.9, status: +18.9 },
    { name: 'Asian Paints', openingBid: 3400.15, status: +9.8 },
    { name: 'ITC', openingBid: 205.5, status: +5.4 },
    { name: 'Adani Ports', openingBid: 731.3, status: -15.1 },
    { name: 'Maruti Suzuki', openingBid: 7500, status: -8.9 },
    { name: 'Sun Pharma', openingBid: 678.2, status: +12.6 },
    { name: 'Axis Bank', openingBid: 800.25, status: -10.75 },
    { name: 'TCS', openingBid: 3400.5, status: +6.5 },
    { name: 'HDFC Bank', openingBid: 1500.8, status: +10.2 },
    { name: 'Power Grid', openingBid: 180.45, status: +3.2 },
    { name: 'ONGC', openingBid: 120.75, status: +5.8 },
    { name: 'Bharti Airtel', openingBid: 740.2, status: +8.5 },
    { name: 'SBI', openingBid: 500.3, status: -6.4 },
    { name: 'Tech Mahindra', openingBid: 1205, status: +7.9 },
    { name: 'ICICI Bank', openingBid: 650.1, status: +12.5 },
    { name: 'NTPC', openingBid: 100.25, status: -4.3 },
    { name: 'Coal India', openingBid: 140.6, status: +6.1 },
    { name: 'Hindalco', openingBid: 450.9, status: -8.7 },
    { name: 'Dr. Reddy\'s', openingBid: 4800.4, status: +14.2 },
    { name: 'L&T', openingBid: 1600.75, status: +10.8 },
    { name: 'IndusInd Bank', openingBid: 970.3, status: -9.5 },
    { name: 'Bajaj Finance', openingBid: 7500.2, status: +18.3 },
    { name: 'Grasim', openingBid: 1600, status: -13.9 },
    { name: 'UPL', openingBid: 600.45, status: +4.7 },
    { name: 'Shree Cements', openingBid: 32000.6, status: +9.1 },
    { name: 'Wipro', openingBid: 710.9, status: -5.8 },
    { name: 'Asian Paints', openingBid: 3400.15, status: +11.6 },
    { name: 'ITC', openingBid: 205.5, status: -7.3 },
    { name: 'Adani Ports', openingBid: 731.3, status: +15.4 },
    { name: 'Maruti Suzuki', openingBid: 7500, status: +6.2 },
    { name: 'Sun Pharma', openingBid: 678.2, status: -9.5 },
    // ... Add more stocks as needed
  ];
  

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * stocksPerPage;
  const endIndex = startIndex + stocksPerPage;

  // Slice the array to get only the stocks for the current page
  const visibleStocks = stocks.slice(startIndex, endIndex);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Nav />
      <img
        src='https://as1.ftcdn.net/v2/jpg/05/60/50/56/1000_F_560505674_chx0JsbYVdgM5z2EW4HfO7KHCA8RuRIF.jpg'
        alt=''
        className='Img'
      />

      <div className='Stocks'>
        <div className='block1'>
          {/* ... */}
        </div>

        {visibleStocks.map((stock, index) => (
          <Link
            to={{
              pathname: `/share1/${startIndex + index + 1}`, // Adjust the index calculation
              state: stock,
            }}
            key={startIndex + index}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <div className='block'>
              <h2>{stock.name}</h2>
              <p>
                Opening Bid: ₹ {stock.openingBid}
              
              <p
                style={{
                  color: stock.status < 0 ? 'red' : 'green',
                }}
              >
                Current Status : {stock.status}%
              </p>
              </p>
            </div>
          </Link>
        ))}

        <div className='pages'>
          <button onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>
          {Array.from({ length: Math.ceil(stocks.length / stocksPerPage) }, (_, i) => (
            <button key={i + 1} onClick={() => handleClick(i + 1)} disabled={currentPage === i + 1}>
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handleClick(currentPage + 1)}
            disabled={currentPage === Math.ceil(stocks.length / stocksPerPage)}
          >
            Next
          </button>
        </div>

        {/* ... other JSX content ... */}
      </div>
      <Footer />
    </>
  );
};

export default Main;
