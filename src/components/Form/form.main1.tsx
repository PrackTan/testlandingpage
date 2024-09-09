"use client"
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Radio,
  RadioGroup,
  FormControlLabel,
  Grid,
  Button,
} from "@mui/material";
import styles from "@/styles/styleFrom.module.css";



interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const IphoneTabs = () => {
  const [value, setValue] = useState(0);
  const [storage, setStorage] = useState("256GB");
  const [color, setColor] = useState("White Titanium");
  const [image, setImage] = useState("img/ip13.jpg");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(">>>>>>>>>>>>>value "+value+" >>>>>>>>>>>>>storage"+storage)

  };

  const handleStorageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStorage(event.target.value);
    console.log(">>>>>>>>>>>>>value "+value+" >>>>>>>>>>>>>storage"+storage)

  };


  console.log(">>>>>>>>>>>>>value "+value+" >>>>>>>>>>>>>storage"+storage)

  // Hàm lấy ảnh dựa vào màu sắc đã chọn
//   const getImageByColor = (color: string) => {
//     switch (color) {
//       case "Titanium":
//         return "img/ip15blue.png"; // Thay bằng đường dẫn hình ảnh thực tế
//       case "Blue Titanium":
//         return "img/ip15green.png";
//       case "White Titanium":
//         return "img/ip15pink.png";
//       case "Black Titanium":
//         return "img/ip15yellow.png";
//       default:
//         return "img/ip13.jpg";
//     }
//   };
  useEffect(() => {
    const images = [
      "img/ip15blue.png",
      "img/ip15green.png",
      "img/ip15pink.png",
      "img/ip15yellow.png",
    ];

    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);
  const handleColorChange = (event:any) => {
    setColor(event.target.value);

    // Update the image based on the selected color
    switch (event.target.value) {
      case "White Titanium":
        setImage("img/ip15blue.png");
        break;
      case "Black Titanium":
        setImage("img/ip15green.png");
        break;
      case "Blue Titanium":
        setImage("img/ip15pink.png");
        break;
      case "Titanium":
        setImage("img/ip15yellow.png");
        break;
      default:
        setImage("img/ip15yellow.png");
    }
  };
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
const handleSubmit = async () => {
  const data = {
    selectedProduct: {
      type: value === 0 ? "iPhone 15 Pro Max" : value === 1 ? "iPhone 15 Pro" : "iPhone 15 Plus",
      storage: storage,
      color: color,
    },
    // Bạn có thể thêm thông tin người dùng nếu cần
    // name: "Tên người dùng",
    // phone: "Số điện thoại người dùng",
  };
  console.log("?>>>>>>>>>>> check data",JSON.stringify(data))
  fetch("https://script.google.com/macros/s/AKfycbw7EiEAqevfm_7sHvMQy3lNE8thRgdoaJnh-Xx8GjJu39OR9lOHWf25NEgX28ZustRA/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((result) => {
      console.log("Success:", result);
      alert("Form submitted successfully!");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Failed to submit the form");
    });
};
  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: "900px",
        margin: "0 auto",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Bạn quan tâm sản phẩm nào?
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          aria-label="iPhone tabs"
        >
          <Tab
            label="iPhone 15 Pro Max"
            {...a11yProps(0)}
            sx={{
              color: value === 0 ? "#fff" : "#333",
              backgroundColor: value === 0 ? "red" : "#fff",
              borderRadius: 5,
              padding: "10px 20px",
              marginRight: 2,
              border: "1px solid red",
              "&.Mui-selected": {
                color: "#fff", // Đổi màu chữ khi active
                backgroundColor: "red", // Đổi màu nền khi active
              },
            }}
          />
          <Tab
            label="iPhone 15 Pro"
            {...a11yProps(1)}
            sx={{
              color: value === 1 ? "#fff" : "#333",
              backgroundColor: value === 1 ? "red" : "#fff",
              borderRadius: 5,
              padding: "10px 20px",
              marginRight: 2,
              border: "1px solid red",
              "&.Mui-selected": {
                color: "#fff", // Đổi màu chữ khi active
                backgroundColor: "red", // Đổi màu nền khi active
              },
            }}
          />
          <Tab
            label="iPhone 15 Plus"
            {...a11yProps(2)}
            sx={{
              color: value === 2 ? "#fff" : "#333",
              backgroundColor: value === 2 ? "red" : "#fff",
              borderRadius: 5,
              padding: "10px 20px",
              border: "1px solid red",
              "&.Mui-selected": {
                color: "#fff", // Đổi màu chữ khi active
                backgroundColor: "red", // Đổi màu nền khi active
              },
            }}
          />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            {/* Storage Option */}
            <RadioGroup
              row
              value={storage}
              onChange={handleStorageChange}
              sx={{ justifyContent: "center" }}
            >
              <FormControlLabel
                value="128GB"
                control={
                  <Radio
                    sx={{
                      display: "none",
                    }}
                  />
                }
                label={
                  <Box
                    sx={{
                      padding: "10px 20px",
                      borderRadius: "20px",
                      backgroundColor: storage === "128GB" ? "#FFD700" : "#fff",
                      color: storage === "128GB" ? "#000" : "#000",
                      fontWeight: "bold",
                      border: "2px solid",
                      borderColor: storage === "128GB" ? "#FFD700" : "#ccc",
                      cursor: "pointer",
                    }}
                  >
                    128GB
                  </Box>
                }
              />
              <FormControlLabel
                value="256GB"
                control={
                  <Radio
                    sx={{
                      display: "none",
                    }}
                  />
                }
                label={
                  <Box
                    sx={{
                      padding: "10px 20px",
                      borderRadius: "20px",
                      backgroundColor: storage === "256GB" ? "#FFD700" : "#fff",
                      color: storage === "256GB" ? "#000" : "#000",
                      fontWeight: "bold",
                      border: "2px solid",
                      borderColor: storage === "256GB" ? "#FFD700" : "#ccc",
                      cursor: "pointer",
                    }}
                  >
                    256GB
                  </Box>
                }
              />
              <FormControlLabel
                value="512GB"
                control={
                  <Radio
                    sx={{
                      display: "none",
                    }}
                  />
                }
                label={
                  <Box
                    sx={{
                      padding: "10px 20px",
                      borderRadius: "20px",
                      backgroundColor: storage === "512GB" ? "#FFD700" : "#fff",
                      color: storage === "512GB" ? "#000" : "#000",
                      fontWeight: "bold",
                      border: "2px solid",
                      borderColor: storage === "512GB" ? "#FFD700" : "#ccc",
                      cursor: "pointer",
                    }}
                  >
                    512GB
                  </Box>
                }
              />
              <FormControlLabel
                value="1TB"
                control={
                  <Radio
                    sx={{
                      display: "none",
                    }}
                  />
                }
                label={
                  <Box
                    sx={{
                      padding: "10px 20px",
                      borderRadius: "20px",
                      backgroundColor: storage === "1TB" ? "#FFD700" : "#fff",
                      color: storage === "1TB" ? "#000" : "#000",
                      fontWeight: "bold",
                      border: "2px solid",
                      borderColor: storage === "1TB" ? "#FFD700" : "#ccc",
                      cursor: "pointer",
                    }}
                  >
                    1TB
                  </Box>
                }
              />
            </RadioGroup>

            {/* Color Option */}
            <RadioGroup row value={color} onChange={handleColorChange}>
              <FormControlLabel
                value="Titanium"
                control={
                  <Radio
                    sx={{
                      color: "blue", // Màu khi chưa được chọn
                      "&.Mui-checked": {
                        color: "blue", // Màu khi đã được chọn
                      },
                    }}
                  />
                }
                label="Titanium"
              />
              <FormControlLabel
                value="Blue Titanium"
                control={
                  <Radio
                    sx={{
                      color: "blue", // Màu khi chưa được chọn
                      "&.Mui-checked": {
                        color: "blue", // Màu khi đã được chọn
                      },
                    }}
                  />
                }
                label="Blue Titanium"
              />
              <FormControlLabel
                value="White Titanium"
                control={
                  <Radio
                    sx={{
                      color: "blue", // Màu khi chưa được chọn
                      "&.Mui-checked": {
                        color: "blue", // Màu khi đã được chọn
                      },
                    }}
                  />
                }
                label="White Titanium"
              />
              <FormControlLabel
                value="Black Titanium"
                control={
                  <Radio
                    sx={{
                      color: "blue", // Màu khi chưa được chọn
                      "&.Mui-checked": {
                        color: "blue", // Màu khi đã được chọn
                      },
                    }}
                  />
                }
                label="Black Titanium"
              />
            </RadioGroup>

            {/* Pricing Section */}
            {/* <Typography variant="h6" color="red" sx={{ marginTop: 2 }}>
              Giá niêm yết: 31.990.000đ
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Button variant="contained" sx={{ backgroundColor: "red", color: "#fff" }}>
                  Mua BHTD: 25.890.000đ
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button variant="contained" sx={{ backgroundColor: "red", color: "#fff" }}>
                  Mua Phụ Kiện: 26.590.000đ
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button variant="contained" sx={{ backgroundColor: "red", color: "#fff" }}>
                  Mua Thẳng: 26.890.000đ
                </Button>
              </Grid>
            </Grid> */}
          </Grid>

          <Grid item xs={4}>
            {/* Display Image Based on Selected Color */}
            <img
             className ={styles.img}
              src={image}
              alt={`iPhone ${color}`}
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        {/* Content for iPhone 15 Pro */}
        Nội dung cho iPhone 15 Pro
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        {/* Content for iPhone 15 Plus */}
        Nội dung cho iPhone 15 Plus
      </CustomTabPanel>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              backgroundColor: '#ffcc00',
              color: '#000',
              marginTop: 3,
            }}
          >
            Gửi
          </Button>
        </Grid>
    </Box>
  );
};

export default IphoneTabs;
