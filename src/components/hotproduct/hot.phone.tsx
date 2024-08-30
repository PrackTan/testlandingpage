import React, { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const data = [
  {
    label: "Apple",
    products: [
      {
        label: "Iphone",
        items: [
          {
            id: 1,
            image: "hình 1",
            title: "Iphone 11 64gb Chính hãng VN/A",
            sale: 28,
            cost: 9990000,
            price: 7290000,
          },
          {
            id: 2,
            image: "hình 1",
            title: "Iphone 11 64gb Chính hãng VN/A",
            sale: 28,
            cost: 9990000,
            price: 7290000,
          },
          {
            id: 3,
            image: "hình 1",
            title: "Iphone 11 64gb Chính hãng VN/A",
            sale: 28,
            cost: 9990000,
            price: 7290000,
          },
          {
            id: 4,
            image: "hình 1",
            title: "Iphone 11 64gb Chính hãng VN/A",
            sale: 28,
            cost: 9990000,
            price: 7290000,
          },
        ],
      },
      {
        label: "Ipad",
        items: [
          {
            id: 1,
            image: "hình 1",
            title: "iPad 10.2 Gen 9 2021 64GB Wifi - Chính Hãng Apple VN",
            sale: 42,
            cost: 9990000,
            price: 5890000,
          },
        ],
      },
    ],
  },
  {
    label: "Samsung",
    products: [
      {
        label: "GalaxyZ",
        items: [
          {
            id: 1,
            image: "hình 1",
            title: "Samsung Galaxy Z Fold6 (12GB/1TB)",
            sale: 14,
            cost: 54990000,
            price: 47490000,
          },
        ],
      },
      {
        label: "GalaxyA",
        items: [
          {
            id: 2,
            image: "hình 1",
            title: "Samsung Galaxy A54 5G",
            sale: 14,
            cost: 11490000,
            price: 9390000,
          },
        ],
      },
    ],
  },
  {
    label: "Mac",
    products: [
      {
        label: "MacPro",
        items: [
          {
            id: 1,
            image: "hình 1",
            title: "Macbook Pro 2023 (M3 Max) 16 inch 48GB/1TB - Chính hãng Apple",
            sale: 14,
            cost: 54990000,
            price: 47490000,
          },
        ],
      },
      {
        label: "MacAir",
        items: [
          {
            id: 2,
            image: "hình 1",
            title: "Macbook Air 2020 (Chip M1) 13 inch 8Gb/256Gb Chính Hãng Apple",
            sale: 14,
            cost: 11490000,
            price: 9390000,
          },
        ],
      },
    ],
  },
];

export default function HotPhone() {
  const [value, setValue] = React.useState(3);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="center"
      >
       {Object.keys(data).map((brand,index)=>{
        return (
          <Tab key={index} label={brand}/>
        )
       })}
      </Tabs>
    </div>
  );
}
