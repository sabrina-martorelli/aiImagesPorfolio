import React from 'react';

const urls = [
    'https://cdn.pixabay.com/photo/2023/03/06/11/39/ai-generated-7833307_960_720.jpg',
    'https://cdn.pixabay.com/photo/2022/11/23/22/27/man-7613011_1280.jpg',
    'https://miro.medium.com/v2/resize:fit:720/format:webp/1*jbvqG9vT9ishTLzl_CVbiw.jpeg',
  ];

const ImageRandomizer = ({ urls }) => {
  const randomIndex = Math.floor(Math.random() * urls.length);
  const randomUrl = urls[randomIndex];
  console.log(randomUrl);
  return randomUrl;
};

export default ImageRandomizer;