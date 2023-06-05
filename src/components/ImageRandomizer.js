import React from 'react';

const urls = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
  ];

const ImageRandomizer = ({ urls }) => {
  const randomIndex = Math.floor(Math.random() * urls.length);
  const randomUrl = urls[randomIndex];

  return randomUrl;
};

export default ImageRandomizer;