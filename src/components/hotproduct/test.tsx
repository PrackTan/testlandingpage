import React, { useEffect, useState } from "react";
import { Tabs, Tab, Box, Typography, Grid, Button, Card, ButtonProps } from "@mui/material";
import { styled } from "@mui/system";
import { Image, Tag } from "antd";
import { red } from "@mui/material/colors";
import Card1 from './../card/card';
import Link from "next/link";
interface items {
  id: number;
  image: string;
  title: string;
  sale: number;
  cost: number;
  price: number;
}
const StyledTabs = styled(Tabs)({
  backgroundColor: "#FFF6E5",
  display: "flex",
  justifyContent: "center",
  padding: "8px 0",
  borderRadius: "8px",
});
const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  marginBottom:8,
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  '&:hover': {
    backgroundColor: red[700],
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  fontWeight: "bold",
  color: "#000",
  margin: "0 8px",
  borderRadius: "16px",
  backgroundColor: "#FFF",
  "&.Mui-selected": {
    backgroundColor: "#FF0000",
    color: "#FFF",
  },
}));

function CustomTabs() {
  const [categoryValue, setCategoryValue] = useState(0);
  const [productValue, setProductValue] = useState(0);
  const [items, setItems] = useState<items[]>([]); 
  const [visible, setVisible] = useState(8); 
  
  useEffect(() => {
    setItems(data[0].products[0].items); 
  }, []);

  useEffect(() => {
    setItems(data[categoryValue].products[productValue].items);
  }, [categoryValue, productValue]);
 

  const handlerLoadMore = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  const handleCategoryChange = (
    event: any,
    newValue: string | React.SetStateAction<any>
  ) => {
    console.log(
      "Check >>>>>>>>>>>>>>> value " + event + "newValue " + newValue
    );
    setCategoryValue(newValue);
    setProductValue(0); 
  };

  const handleProductChange = (event: any, newValue: any) => {
    console.log(
      "Check >>>>>>>>>>>>>>> value " + event + "newValue " + newValue
    );
    setProductValue(newValue);
    setItems(data[categoryValue].products[productValue].items);
  };

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
            {
              id: 5,
              image: "hình 1",
              title: "Iphone 11 64gb Chính hãng VN/A",
              sale: 28,
              cost: 9990000,
              price: 7290000,
            },
            {
              id: 6,
              image: "hình 1",
              title: "Iphone 11 64gb Chính hãng VN/A",
              sale: 28,
              cost: 9990000,
              price: 7290000,
            },
            {
              id: 7,
              image: "hình 1",
              title: "Iphone 11 64gb Chính hãng VN/A",
              sale: 28,
              cost: 9990000,
              price: 7290000,
            },
            {
              id: 8,
              image: "hình 1",
              title: "Iphone 11 64gb Chính hãng VN/A",
              sale: 28,
              cost: 9990000,
              price: 7290000,
            },
            {
              id: 9,
              image: "hình 1",
              title: "Iphone 11 64gb Chính hãng VN/A",
              sale: 28,
              cost: 9990000,
              price: 7290000,
            },
            {
              id: 10,
              image: "hình 1",
              title: "Iphone 11 64gb Chính hãng VN/A",
              sale: 28,
              cost: 9990000,
              price: 7290000,
            },
            {
              id: 11,
              image: "hình 1",
              title: "Iphone 11 64gb Chính hãng VN/A",
              sale: 28,
              cost: 9990000,
              price: 7290000,
            },
            {
              id: 12,
              image: "hình 1",
              title: "Iphone 11 64gb Chính hãng VN/A",
              sale: 28,
              cost: 9990000,
              price: 7290000,
            },
            {
              id: 13,
              image: "hình 1",
              title: "Iphone 11 64gb Chính hãng VN/A",
              sale: 28,
              cost: 9990000,
              price: 7290000,
            },
            {
              id: 14,
              image: "hình 1",
              title: "Iphone 11 64gb Chính hãng VN/A",
              sale: 28,
              cost: 9990000,
              price: 7290000,
            },
            {
              id: 15,
              image: "hình 1",
              title: "Iphone 11 64gb Chính hãng VN/A",
              sale: 28,
              cost: 9990000,
              price: 7290000,
            },
            {
              id: 17,
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
            {
              id: 2,
              image: "hình 1",
              title: "iPad 10.2 Gen 9 2021 64GB Wifi - Chính Hãng Apple VN",
              sale: 42,
              cost: 9990000,
              price: 5890000,
            },
            {
              id: 3,
              image: "hình 1",
              title: "iPad 10.2 Gen 9 2021 64GB Wifi - Chính Hãng Apple VN",
              sale: 42,
              cost: 9990000,
              price: 5890000,
            },
            {
              id: 4,
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
              title:
                "Macbook Pro 2023 (M3 Max) 16 inch 48GB/1TB - Chính hãng Apple",
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
              title:
                "Macbook Air 2020 (Chip M1) 13 inch 8Gb/256Gb Chính Hãng Apple",
              sale: 14,
              cost: 11490000,
              price: 9390000,
            },
          ],
        },
      ],
    },
  ];

  // console.log("check>>>>>>>>>>>>>> item",items);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Category Tabs */}
      <StyledTabs
        value={categoryValue}
        onChange={handleCategoryChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        {data.map((category, index) => (
          <StyledTab key={index} label={category.label} />
        ))}
      </StyledTabs>

      {/* Product Tabs */}
      <StyledTabs
        value={productValue}
        onChange={handleProductChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ marginTop: 2 }}
      >
        {data[categoryValue].products.map((product, index) => (
          <StyledTab key={index} label={product.label} />
        ))}
      </StyledTabs>

      {/* Display Product Items */}
      <Box sx={{ p: 3 }}>
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          {items.slice(0, visible).map((item: items) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              {/* <Card
                style={{
                  border: "2px solid red",
                  borderRadius: "10px",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    right: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Tag color="red" style={{ fontWeight: "bold" }}>
                    Trả trước: 589.000đ
                  </Tag>
                  <Tag color="red" style={{ fontWeight: "bold" }}>
                    Trả góp 0%
                  </Tag>
                </div>

                <div style={{ marginTop: "40px" , backgroundImage:url("")}}>
                  <Image
                    src="/path/to/your/image.png" // Thay thế bằng đường dẫn đến hình ảnh
                    alt="Product Image"
                    width={150}
                    height={150}
                  />
                </div>

                <h3>{item.title}</h3>

                <div style={{ margin: "10px 0" }}>
                  <span
                    style={{
                      color: "red",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    {item.price}
                  </span>
                  <div
                    style={{
                      textDecoration: "line-through",
                      color: "#999",
                      fontSize: "14px",
                    }}
                  >
                    {item.cost}
                  </div>
                </div>

                <Tag
                  color="red"
                  style={{ fontWeight: "bold", fontSize: "18px" }}
                >
                  -{item.sale}%
                </Tag>

                <ColorButton>
                  MUA NGAY
                </ColorButton>
              </Card> */}
              <Card1
                image="/img/ip13.jpg"
                title="iPhone 11 64GB Chính hãng VN/A"
                oldPrice="7.990.000"
                newPrice="7.090.000"
                discount="-11"
              />
              {/* Add more <Card /> components as needed */}
            </Grid>
          ))}
          <Button
            sx={{ marginTop: 5, backgroundColor: "red" }}
            onClick={handlerLoadMore}
            variant="contained"
            color="success"
          >
            Xem thêm
          </Button>
        </Grid>
      </Box>
    </Box>
  );
}

export default CustomTabs;
