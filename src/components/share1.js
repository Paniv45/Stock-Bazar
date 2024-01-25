import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import Nav from './Nav';
import './shares1.css';
import Footer from './Footer';

const Share1 = ({ location }) => {
  const [series, setSeries] = useState([]);
  const [selectedButton, setSelectedButton] = useState('button1');
  const stock = location?.state; // Ensure stock is defined

  useEffect(() => {
    const storedButton = localStorage.getItem('selectedButton');
    if (storedButton) {
      setSelectedButton(storedButton);
      handleClick(storedButton);
    }
  }, []);

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      xaxis:{
        offsetY:7
      },
      yaxis: {
        tooltip: {
          enabled: true
          
        }
      }
    },
  };

  const handleClick = (buttonName) => {
    setSelectedButton(buttonName);
    localStorage.setItem('selectedButton', buttonName);
    if (buttonName === 'button1') {
      setSeries(button1Series);
    } else if (buttonName === 'button2') {
      setSeries(button2Series);
    }
  };

  const button1Series = [
    {
      data: [
        { x: new Date('2023-01-01T00:00:00Z'), y: [stock.openingBid, stock.openingBid + 3, stock.openingBid - 2, stock.openingBid + 3] },
        { x: new Date('2023-01-01T01:00:00Z'), y: [stock.openingBid + 3, stock.openingBid + 4, stock.openingBid - 0.8, stock.openingBid + 6] },
        { x: new Date('2023-01-01T02:00:00Z'), y: [stock.openingBid + 6, stock.openingBid - 1, stock.openingBid + 8, stock.openingBid + 9] },
        { x: new Date('2023-01-01T03:00:00Z'), y: [stock.openingBid, stock.openingBid - 1.2, stock.openingBid + 1, stock.openingBid + 2.4] },
        { x: new Date('2023-01-01T04:00:00Z'), y: [stock.openingBid + 2.4, stock.openingBid - 0.8, stock.openingBid + 4.8, stock.openingBid + 6] },
        { x: new Date('2023-01-01T05:00:00Z'), y: [stock.openingBid + 6, stock.openingBid + 7.2, stock.openingBid - 1.2, stock.openingBid + 9] },
        { x: new Date('2023-01-01T06:00:00Z'), y: [stock.openingBid, stock.openingBid - 1, stock.openingBid + 1, stock.openingBid + 2.4] },
        { x: new Date('2023-01-01T07:00:00Z'), y: [stock.openingBid + 2.4, stock.openingBid + 4, stock.openingBid + 4.8, stock.openingBid - 1.2] },
        { x: new Date('2023-01-01T08:00:00Z'), y: [stock.openingBid - 1.2, stock.openingBid + 7.2, stock.openingBid + 8, stock.openingBid + 9] },
        { x: new Date('2023-01-01T09:00:00Z'), y: [stock.openingBid, stock.openingBid + 2, stock.openingBid - 1.2, stock.openingBid + 3] },
        { x: new Date('2023-01-01T10:00:00Z'), y: [stock.openingBid + 3, stock.openingBid + 4, stock.openingBid + 4.8, stock.openingBid + 6] },
        { x: new Date('2023-01-01T11:00:00Z'), y: [stock.openingBid + 6, stock.openingBid + 7.2, stock.openingBid - 0.8, stock.openingBid + 9] },
        { x: new Date('2023-01-01T12:00:00Z'), y: [stock.openingBid, stock.openingBid + 2, stock.openingBid - 1.2, stock.openingBid + 3] },
        { x: new Date('2023-01-01T13:00:00Z'), y: [stock.openingBid + 3, stock.openingBid - 0.8, stock.openingBid + 8, stock.openingBid + 9] },
        { x: new Date('2023-01-01T14:00:00Z'), y: [stock.openingBid + 6, stock.openingBid + 7.2, stock.openingBid - 1.2, stock.openingBid + 3] },
        { x: new Date('2023-01-01T15:00:00Z'), y: [stock.openingBid, stock.openingBid + 2, stock.openingBid + 1, stock.openingBid + 2.4] },
        { x: new Date('2023-01-01T16:00:00Z'), y: [stock.openingBid + 2.4, stock.openingBid + 4, stock.openingBid + 4.8, stock.openingBid + 6] },
        { x: new Date('2023-01-01T17:00:00Z'), y: [stock.openingBid + 6, stock.openingBid - 0.8, stock.openingBid + 8, stock.openingBid + 9] },
        { x: new Date('2023-01-01T18:00:00Z'), y: [stock.openingBid, stock.openingBid + 2, stock.openingBid - 1.2, stock.openingBid + 3] },
        { x: new Date('2023-01-01T19:00:00Z'), y: [stock.openingBid + 3, stock.openingBid + 4, stock.openingBid + 4.8, stock.openingBid - 1.2] },
        { x: new Date('2023-01-01T20:00:00Z'), y: [stock.openingBid - 1.2, stock.openingBid + 7.2, stock.openingBid + 8, stock.openingBid + 9] },
        { x: new Date('2023-01-01T21:00:00Z'), y: [stock.openingBid, stock.openingBid + 2, stock.openingBid - 0.8, stock.openingBid + 3] },
        { x: new Date('2023-01-01T22:00:00Z'), y: [stock.openingBid + 3, stock.openingBid + 4, stock.openingBid + 4.8, stock.openingBid - 1.2] },
        { x: new Date('2023-01-01T23:00:00Z'), y: [stock.openingBid - 1.2, stock.openingBid -9, stock.openingBid - 9.6, stock.openingBid - 10.8] },
      ],
    },
  ];
  
  
  
  
  const button2Series = [
    {
      data: [
        { x: new Date('2023-01-01T00:00:00Z'), y: [stock.openingBid, stock.openingBid - 2, stock.openingBid + 2, stock.openingBid - 1] },
        { x: new Date('2023-01-02T00:00:00Z'), y: [stock.openingBid + 1, stock.openingBid - 5, stock.openingBid, stock.openingBid + 1.5] },
        { x: new Date('2023-01-03T00:00:00Z'), y: [stock.openingBid - 1, stock.openingBid + 2, stock.openingBid - 4, stock.openingBid + 1] },
        { x: new Date('2023-01-04T00:00:00Z'), y: [stock.openingBid, stock.openingBid - 2, stock.openingBid + 2, stock.openingBid - 1] },
        { x: new Date('2023-01-05T00:00:00Z'), y: [stock.openingBid + 1, stock.openingBid - 5, stock.openingBid, stock.openingBid + 1.5] },
        { x: new Date('2023-01-06T00:00:00Z'), y: [stock.openingBid - 1, stock.openingBid + 2, stock.openingBid - 4, stock.openingBid + 1] },
        { x: new Date('2023-01-07T00:00:00Z'), y: [stock.openingBid, stock.openingBid - 2, stock.openingBid + 2, stock.openingBid - 1] },
        { x: new Date('2023-01-08T00:00:00Z'), y: [stock.openingBid + 1, stock.openingBid - 5, stock.openingBid, stock.openingBid + 1.5] },
        { x: new Date('2023-01-09T00:00:00Z'), y: [stock.openingBid - 1, stock.openingBid + 2, stock.openingBid - 4, stock.openingBid + 1] },
        { x: new Date('2023-01-10T00:00:00Z'), y: [stock.openingBid, stock.openingBid - 2, stock.openingBid + 2, stock.openingBid - 1] },
        { x: new Date('2023-01-11T00:00:00Z'), y: [stock.openingBid + 1, stock.openingBid - 2, stock.openingBid + 2, stock.openingBid - 1] },
        { x: new Date('2023-01-12T00:00:00Z'), y: [stock.openingBid - 1, stock.openingBid + 5, stock.openingBid, stock.openingBid + 1.5] },
        { x: new Date('2023-01-13T00:00:00Z'), y: [stock.openingBid + 1, stock.openingBid - 2, stock.openingBid + 4, stock.openingBid - 1] },
        { x: new Date('2023-01-14T00:00:00Z'), y: [stock.openingBid - 1, stock.openingBid + 2, stock.openingBid - 2, stock.openingBid + 1] },
        { x: new Date('2023-01-15T00:00:00Z'), y: [stock.openingBid + 1, stock.openingBid - 5, stock.openingBid, stock.openingBid + 1.5] },
        { x: new Date('2023-01-16T00:00:00Z'), y: [stock.openingBid - 1, stock.openingBid + 2, stock.openingBid - 4, stock.openingBid + 1] },
        { x: new Date('2023-01-17T00:00:00Z'), y: [stock.openingBid, stock.openingBid - 2, stock.openingBid + 2, stock.openingBid - 1] },
        { x: new Date('2023-01-18T00:00:00Z'), y: [stock.openingBid + 1, stock.openingBid - 5, stock.openingBid, stock.openingBid + 1.5] },
        { x: new Date('2023-01-19T00:00:00Z'), y: [stock.openingBid - 1, stock.openingBid + 2, stock.openingBid - 4, stock.openingBid + 1] },
        { x: new Date('2023-01-20T00:00:00Z'), y: [stock.openingBid + 1, stock.openingBid - 5, stock.openingBid, stock.openingBid + 1.5] },
        { x: new Date('2023-01-21T00:00:00Z'), y: [stock.openingBid - 1, stock.openingBid + 2, stock.openingBid - 2, stock.openingBid + 1] },
        { x: new Date('2023-01-22T00:00:00Z'), y: [stock.openingBid + 1, stock.openingBid - 5, stock.openingBid, stock.openingBid + 1.5] },
        { x: new Date('2023-01-23T00:00:00Z'), y: [stock.openingBid - 1, stock.openingBid + 2, stock.openingBid - 4, stock.openingBid + 1] },
        { x: new Date('2023-01-24T00:00:00Z'), y: [stock.openingBid + 1, stock.openingBid - 2, stock.openingBid + 2, stock.openingBid - 1] },
        { x: new Date('2023-01-25T00:00:00Z'), y: [stock.openingBid - 1, stock.openingBid + 5, stock.openingBid, stock.openingBid + 1.5] },
        { x: new Date('2023-01-26T00:00:00Z'), y: [stock.openingBid + 1, stock.openingBid - 2, stock.openingBid + 4, stock.openingBid - 1] },
        { x: new Date('2023-01-27T00:00:00Z'), y: [stock.openingBid - 1, stock.openingBid + 2, stock.openingBid - 2, stock.openingBid + 1] },
        { x: new Date('2023-01-28T00:00:00Z'), y: [stock.openingBid + 1, stock.openingBid - 5, stock.openingBid, stock.openingBid + 1.5] },
        { x: new Date('2023-01-29T00:00:00Z'), y: [stock.openingBid - 1, stock.openingBid + 2, stock.openingBid - 4, stock.openingBid + 1] },
        { x: new Date('2023-01-30T00:00:00Z'), y: [stock.openingBid + 1, stock.openingBid - 2, stock.openingBid + 4, stock.openingBid - 1] },
      ],
    },
  ];
  

  return (
    <>
      <Nav />
      <div className="container">
        <div className="left">
          <div>
            <h1>Stock Details</h1>
            <p>Name: {stock?.name}</p>
            <p>Opening Bid: ₹ {stock?.openingBid}</p>
            <p 
            style={{
              color: stock.status < 0 ? 'red' : 'green',
            }}>Current Status: {stock?.status}%</p>
            {/* Display other details based on the fetched data */}
          </div>
        </div>

        <div className="right">
          <div id="chart">
            <button onClick={() => handleClick('button1')}>Last 24 hours</button>
            <button onClick={() => handleClick('button2')}>Last Month</button>
            <ReactApexChart options={options} series={series} type="candlestick" height={350} />
          </div>

          <div id='sellbuy'>
            <button className="buy" onClick={() => console.log('Shares Bought')}>BUY</button>
            <button className="sell" onClick={() => console.log('Shares Sold')}>SELL</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Share1;
