import { Box, Grid } from "@mui/material";
import { Carousel, CarouselProps } from "antd";
import React from "react";
import "@/styles/customArrowCss.css"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const CustomPrevArrow = ({ className, style, onClick }: any) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"black",
        padding:20,
        fontSize: "40px", // Tăng kích thước mũi tên
      }}
      onClick={onClick}
    >
      <ArrowBackIosNewIcon style={{ fontSize: "40px", color: "white" }} />
      {/* Custom icon */}
    </div>
  );
};

const CustomNextArrow = ({ className, style, onClick }: any) => {
  return (
    <div
    className={className}
    style={{
      ...style,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '40px', // Tăng kích thước mũi tên
      backgroundColor:"black",
      padding:20,

    }}
    onClick={onClick}
  >
    <ArrowForwardIosIcon  style={{ fontSize: '40px', color: 'white' }} /> {/* Custom icon */}
  </div>
  );
};
export default function MainCarousel() {
  const settings: CarouselProps = {
    effect: "fade",
    dots: false,
    infinite: true,
    style:{
      borderRadius:10
    },
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
    nextArrow: <CustomNextArrow />, // Áp dụng mũi tên tùy chỉnh
    prevArrow: <CustomPrevArrow />, // Áp dụng mũi tên tùy chỉnh
  };
  return (
    <Box >
      <Carousel {...settings}>
        <img
          alt="Bạch Long Mobile"
          style={{ width: "100%", borderRadius: 15 }}
          src="https://bachlongmobile.com/bnews/wp-content/uploads/2023/09/intrographic-apple-iphone-15-pro-max-130923.jpg"
        />
        <img
          alt="Bạch Long Mobile"
          style={{ width: "100%", borderRadius: 15 }}
          src="https://bachlongmobile.com/bnews/wp-content/uploads/2023/09/intrographic-apple-iphone-15-plus-130923.jpg"
        />
      </Carousel>
    </Box>
  );
}
