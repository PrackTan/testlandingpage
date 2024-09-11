"use client";
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
  TextField,
  Checkbox,
  Snackbar,
  Alert,
} from "@mui/material";
import styles from "@/styles/styleFrom.module.css";
import { notification } from 'antd';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
type StorageOptions = "128GB" | "256GB" | "512GB" | "1TB";
type ProductOptions = "iPhone 16 Pro Max" | "iPhone 16 Pro" | "iPhone 16 Plus" | "iPhone 16";
const prices : Record<ProductOptions, Record<StorageOptions, number>> = {
  "iPhone 16 Pro Max": {
    "128GB": 0,
    "256GB": 34490000,
    "512GB": 39990000,
    "1TB": 45990000,
  },
  "iPhone 16 Pro": {
    "128GB": 27990000,
    "256GB": 30990000,
    "512GB": 36990000,
    "1TB": 42990000,
  },
  "iPhone 16 Plus": {
    "128GB": 24990000,
    "256GB": 27990000,
    "512GB": 33990000,
    "1TB": 0,
  },
  "iPhone 16": {
    "128GB": 21990000,
    "256GB": 24990000,
    "512GB": 30990000,
    "1TB": 0,
  },
};

const IphoneTabs = () => {
  const [value, setValue] = useState(0);
  const [storage, setStorage] = useState("256GB");
  const [color, setColor] = useState("Titan" || "White");
  const [image, setImage] = useState("/iphone-16-series/img/ip16white.jpg");
  const [phoneType, setPhoneType] = useState("Samsung");
  const [offers, setOffers] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [promotion, setPromotion] = useState("");
  const [price, setPrice] = useState(31990000); // Giá mặc định cho 256GB
  const [email, setEmail] = useState(""); // Thêm trường email
  const [isSubmitted, setIsSubmitted] = useState(false); // Trạng thái khi đã nhấn Submit
  const [api, contextHolder] = notification.useNotification();

  const openNotificationError = () => {
    api.error({
      message: "Lỗi nhập liệu",
      description: "Vui lòng điền đúng thông tin cần thiết.",
       showProgress: true,
    });
  };

  // Hàm mở thông báo thành công
  const openNotificationSuccess = () => {
    api.success({
      message: "Thành công",
      description: "Gửi thông tin thành công!",
      showProgress: true,
    });
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(
      ">>>>>>>>>>>>>value " + value + " >>>>>>>>>>>>>storage" + storage
    );
  };
// Function kiểm tra hợp lệ email
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
  const handleStorageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const selectedStorage = event.target.value;
    // setStorage(selectedStorage);
    // // Lấy tên sản phẩm dựa trên value
    // const productName =
    //   value === 0
    //     ? "iPhone 16 Pro Max"
    //     : value === 1
    //     ? "iPhone 16 Pro"
    //     : value === 2
    //     ? "iPhone 16 Plus"
    //     : "iPhone 16";

    // // Cập nhật giá dựa trên loại sản phẩm và dung lượng
    // const newPrice = prices[productName as keyof typeof prices][storage as "128GB" | "256GB" | "512GB" | "1TB"];
    // setPrice(newPrice);
    const selectedStorage = event.target.value as StorageOptions; // Lấy dung lượng đã chọn
    setStorage(selectedStorage);

  // Lấy tên sản phẩm dựa trên giá trị của 'value' (0: iPhone 16 Pro Max, 1: iPhone 16 Pro, ...)
  const productName: ProductOptions =
    value === 0
      ? "iPhone 16 Pro Max"
      : value === 1
      ? "iPhone 16 Pro"
      : value === 2
      ? "iPhone 16 Plus"
      : "iPhone 16";

  // Cập nhật giá dựa trên loại sản phẩm và dung lượng
  const newPrice = prices[productName][selectedStorage];
  setPrice(newPrice); // Cập nhật Giá dự kiến
    console.log(
      ">>>>>>>>>>>>>value " + value + " >>>>>>>>>>>>>storage" + storage
    );
  };

  const handleOffersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const offer = event.target.name;
    setOffers((prev) =>
      prev.includes(offer) ? prev.filter((o) => o !== offer) : [...prev, offer]
    );
  };

  const handleColorChangePro = (event: any) => {
    setColor(event.target.value);
    console.log(">>>>>>>> check value màu ", event.target.value);
    // Update the image based on the selected color
    switch (event.target.value) {
      case "Titan white":
        setImage("/iphone-16-series/img/iPhone_16_Pro_White_Titanium.jpg");
        break;
      case "Titan black":
        setImage("/iphone-16-series/img/iPhone_16_Pro_Black_Titanium.jpg");
        break;
      case "Titan desert":
        setImage("/iphone-16-series/img/iPhone_16_Pro_Desert_TitaniumI.jpg");
        break;
      case "Titan":
        setImage("/iphone-16-series/img/iPhone_16_Pro_Natural_Titanium.jpg");
        break;
      default:
        setImage("/iphone-16-series/img/iPhone_16_Pro_White_Titanium.jpg");
    }
  };
  const handleColorChangeNormal = (event: any) => {
    setColor(event.target.value);
    console.log(">>>>>>>> check value màu ", event.target.value);

    // Update the image based on the selected color
    switch (event.target.value) {
      case "White":
        setImage("/iphone-16-series/img/iPhone_16_White_PDP_Image_Position_1a_White_Color__VN-VI.jpg");
        break;
      case "Black":
        setImage("/iphone-16-series/img/ip16black.jpg");
        break;
      case "Blue":
        setImage("/iphone-16-series/img/iPhone_16_Ultramarine_PDP_Image_Position_1a_Ultramarine_Color__VN-VI.jpg");
        break;
      case "Pink":
        setImage("/iphone-16-series/img/ip16pink.jpg");
        break;
      case "Green":
        setImage("/iphone-16-series/img/iPhone_16_Teal_PDP_Image_Position_1a_Teal_Color__VN-VI.jpg");
        break;
      default:
        setImage("/iphone-16-series/img/ip16white.jpg");
    }
  };
  console.log(
    ">>>>>>>>>>>>>value " + value + " >>>>>>>>>>>>>storage" + storage
  );

  useEffect(() => {
    const images = [
      "/iphone-16-series/img/ip16black.jpg",
      "/iphone-16-series/img/ip16blue.jpg",
      "/iphone-16-series/img/ip16green.jpg",
      "/iphone-16-series/img/ip16pink.jpg",
      "/iphone-16-series/img/ip16white.jpg",
    ];

    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const handleSubmit = async () => {
    setIsSubmitted(true); // Đánh dấu là đã nhấn nút Submit

    if (!name || !phone) {
      openNotificationError();
      return;
    }
    const data = {
      selectedProduct: {
        type:
          value === 0
            ? "iphone 16 Pro Max"
            : value === 1
            ? "iphone 16 Pro"
            : value === 2
            ? "Iphone 16 Plus"
            : "Iphone 16",
        storage: storage,
        color: color,
      },
      name,
      phone,
      promotion,
      offers: offers.join(", "),
      phoneType,
      // Bạn có thể thêm thông tin người dùng nếu cần
      // name: "Tên người dùng",
      // phone: "Số điện thoại người dùng",
    };
    console.log("?>>>>>>>>>>> check data", data);
    fetch(
      "https://script.google.com/macros/s/AKfycbw7EiEAqevfm_7sHvMQy3lNE8thRgdoaJnh-Xx8GjJu39OR9lOHWf25NEgX28ZustRA/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((result) => {
        console.log("Success:", result);
        openNotificationSuccess()
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
        {value === index && <Box sx={{ p: 4 }}>{children}</Box>}
      </div>
    );
  }

  return (
    <>
    {contextHolder}
    <Box
      sx={{
        maxWidth: "900px",
        margin: "0 auto",
        color: "#333",
        backgroundColor: "#fff",
        // textAlign: "center",
        padding: { xs: 2, md: 4 }, // Thêm padding cho thiết bị di động
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Bạn quan tâm sản phẩm nào?
      </Typography>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="iPhone tabs"
          variant="scrollable" // Cho phép cuộn nếu không đủ không gian
          scrollButtons="auto" // Hiển thị nút cuộn nếu cần thiết
          allowScrollButtonsMobile // Cho phép cuộn trên thiết bị di động
          sx={{
            "& .MuiTabs-scrollButtons": {
              width: "48px", // Điều chỉnh nút cuộn
            },
          }}
        >
          <Tab
            label="iPhone 16 Pro Max"
            {...a11yProps(0)}
            sx={{
              color: value === 0 ? "#fff" : "#333",
              backgroundColor: value === 0 ? "red" : "#fff",
              padding: { xs: "4px 6px", md: "10px 20px" }, // Thay đổi padding trên mobile
              marginRight: { xs: 1, md: 2 }, // Giảm khoảng cách giữa các tab trên mobile
              border: "1px solid red",
              "&.Mui-selected": {
                color: "#fff", // Đổi màu chữ khi active
                backgroundColor: "red", // Đổi màu nền khi active
              },
            }}
          />
          <Tab
            label="iPhone 16 Pro"
            {...a11yProps(1)}
            sx={{
              color: value === 1 ? "#fff" : "#333",
              padding: { xs: "4px 6px", md: "10px 20px" }, // Thay đổi padding trên mobile
              marginRight: { xs: 1, md: 2 }, // Giảm khoảng cách giữa các tab trên mobile
              border: "1px solid red",
              "&.Mui-selected": {
                color: "#fff", // Đổi màu chữ khi active
                backgroundColor: "red", // Đổi màu nền khi active
              },
            }}
          />
          <Tab
            label="iPhone 16 Plus"
            {...a11yProps(2)}
            sx={{
              color: value === 2 ? "#fff" : "#333",
              padding: { xs: "4px 6px", md: "10px 20px" }, // Thay đổi padding trên mobile
              marginRight: { xs: 1, md: 2 }, // Giảm khoảng cách giữa các tab trên mobile
              border: "1px solid red",

              "&.Mui-selected": {
                color: "#fff", // Đổi màu chữ khi active
                backgroundColor: "red", // Đổi màu nền khi active
              },
            }}
          />
          <Tab
            label="iPhone 16"
            {...a11yProps(3)}
            sx={{
              color: value === 3 ? "#fff" : "#333",
              padding: { xs: "4px 6px", md: "10px 20px" }, // Thay đổi padding trên mobile
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
                      backgroundColor: storage === "256GB" ? "red" : "#ccc",
                      color: storage === "256GB" ? "#fff" : "#fff",
                      fontWeight: "bold",
                      border: "2px solid",
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
                      backgroundColor: storage === "512GB" ? "red" : "#ccc",
                      color: storage === "512GB" ? "#fff" : "#fff",
                      fontWeight: "bold",
                      border: "2px solid",
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
                      backgroundColor: storage === "1TB" ? "red" : "#ccc",
                      color: storage === "1TB" ? "#fff" : "#fff",
                      fontWeight: "bold",
                      border: "2px solid",
                      cursor: "pointer",
                    }}
                  >
                    1TB
                  </Box>
                }
              />
            </RadioGroup>

            {/* Color Option */}
            <RadioGroup row value={color} onChange={handleColorChangePro}>
              <FormControlLabel
                value="Titan"
                sx={{ marginRight: { xs: 1, sm: 2 } }}
                control={
                  <Radio
                    sx={{
                      color: "#C2BCB2 ", // Màu khi chưa được chọn
                      "&.Mui-checked": {
                        color: "#C2BCB2", // Màu khi đã được chọn
                      },
                    }}
                  />
                }
                label="Titan tự nhiên"
              />
              <FormControlLabel
                value="Titan white"
                sx={{ marginRight: { xs: 1, sm: 2 } }}
                control={
                  <Radio
                    sx={{
                      color: "#F2F1ED", // Màu khi chưa được chọn

                      "&.Mui-checked": {
                        color: "#F2F1ED", // Màu khi đã được chọn
                      },
                    }}
                  />
                }
                label="Titan Trắng"
              />
              <FormControlLabel
                value="Titan black"
                sx={{ marginRight: { xs: 1, sm: 2 } }}
                control={
                  <Radio
                    sx={{
                      color: "#3C3C3D", // Màu khi chưa được chọn
                      "&.Mui-checked": {
                        color: "#3C3C3D", // Màu khi đã được chọn
                      },
                    }}
                  />
                }
                label="Titan đen"
              />
              <FormControlLabel
                value="Titan desert"
                control={
                  <Radio
                    sx={{
                      color: "#BFA48F", // Màu khi chưa được chọn
                      "&.Mui-checked": {
                        color: "#BFA48F", // Màu khi đã được chọn
                      },
                    }}
                  />
                }
                label="Titan sa mạc"
              />
            </RadioGroup>

            {/* Pricing Section */}
            <Typography
              variant="h6"
              color="red"
              sx={{ justifyContent: "center", marginTop: 2, color: "#333" }}
            >
              Giá dự kiến:{" "}
              <span style={{ fontSize: 30, color: "red" }}>
                {" "}
                {price.toLocaleString()}đ{" "}
              </span>
            </Typography>
            
            <Typography
              variant="h6"
              color="red"
              sx={{ justifyContent: "center", marginTop: 2, color: "#333" }}
            >
              Trả góp chỉ từ:{" "}
              <span style={{ fontSize: 20, color: "black" }}>
                {" "}
                {Math.round(price / 12).toLocaleString()}đ{" "}
              </span>
            </Typography>
            {/* <Grid container spacing={2}>
            <Grid item  xs={12} sx={{ justifyContent: "center", marginTop: 2 , color:"red",fontSize:20}}>
              Giá dự kiến:
            </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: "#ed8e53", color: "#fff", padding:1}}
                >
                  Mua BHTD: 25.890.000đ
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: "#ed8e53", color: "#fff", padding:1}}
                >
                  Mua Phụ Kiện: 26.590.000đ
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                   variant="contained"
                   fullWidth
                   sx={{ backgroundColor: "#ed8e53", color: "#fff",padding:1}}
                >
                  Mua Thẳng: 26.890.000đ
                </Button>
              </Grid>
            </Grid> */}
          </Grid>

          <Grid item xs={4}>
            {/* Display Image Based on Selected Color */}
            <img
              className={styles.img}
              src={image}
              alt={`iPhone ${color}`}
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        {/* Content for iphone 16 Pro */}
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
                      backgroundColor: storage === "128GB" ? "red" : "#ccc",
                      color: storage === "128GB" ? "#fff" : "#fff",
                      fontWeight: "bold",
                      border: "2px solid",
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
                      backgroundColor: storage === "256GB" ? "red" : "#ccc",
                      color: storage === "256GB" ? "#fff" : "#fff",
                      fontWeight: "bold",
                      border: "2px solid",
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
                      backgroundColor: storage === "512GB" ? "red" : "#ccc",
                      color: storage === "512GB" ? "#fff" : "#fff",
                      fontWeight: "bold",
                      border: "2px solid",
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
                      backgroundColor: storage === "1TB" ? "red" : "#ccc",
                      color: storage === "1TB" ? "#fff" : "#fff",
                      fontWeight: "bold",
                      border: "2px solid",
                      cursor: "pointer",
                    }}
                  >
                    1TB
                  </Box>
                }
              />
            </RadioGroup>

            {/* Color Option */}
            <RadioGroup
              row
              defaultValue="Titan"
              value={color}
              onChange={handleColorChangePro}
            >
              <FormControlLabel
                value="Titan"
                sx={{ marginRight: { xs: 1, sm: 2 } }}
                control={
                  <Radio
                    sx={{
                      color: "#C2BCB2 ", // Màu khi chưa được chọn
                      "&.Mui-checked": {
                        color: "#C2BCB2", // Màu khi đã được chọn
                      },
                    }}
                  />
                }
                label="Titan tự nhiên"
              />
              <FormControlLabel
                value="Titan white"
                sx={{ marginRight: { xs: 1, sm: 2 } }}
                control={
                  <Radio
                    sx={{
                      color: "#F2F1ED", // Màu khi chưa được chọn

                      "&.Mui-checked": {
                        color: "#F2F1ED", // Màu khi đã được chọn
                      },
                    }}
                  />
                }
                label="Titan Trắng"
              />
              <FormControlLabel
                value="Titan black"
                sx={{ marginRight: { xs: 1, sm: 2 } }}
                control={
                  <Radio
                    sx={{
                      color: "#3C3C3D", // Màu khi chưa được chọn
                      "&.Mui-checked": {
                        color: "#3C3C3D", // Màu khi đã được chọn
                      },
                    }}
                  />
                }
                label="Titan đen"
              />
              <FormControlLabel
                value="Titan desert"
                control={
                  <Radio
                    sx={{
                      color: "#BFA48F", // Màu khi chưa được chọn
                      "&.Mui-checked": {
                        color: "#BFA48F", // Màu khi đã được chọn
                      },
                    }}
                  />
                }
                label="Titan sa mạc"
              />
            </RadioGroup>

            {/* Pricing Section */}
            <Typography
              variant="h6"
              color="red"
              sx={{ justifyContent: "center", marginTop: 2, color: "#333" }}
            >
              Giá dự kiến:{" "}
              <span style={{ fontSize: 30, color: "red" }}>
                {" "}
                {price.toLocaleString()}đ{" "}
              </span>
            </Typography>
            <Typography
              variant="h6"
              color="red"
              sx={{ justifyContent: "center", marginTop: 2, color: "#333" }}
            >
              Trả góp chỉ từ:{" "}
              <span style={{ fontSize: 20, color: "black" }}>
                {" "}
                {Math.round(price / 12).toLocaleString()}đ{" "}
              </span>
            </Typography>
            {/* <Grid container spacing={2}>
            <Grid item  xs={12} sx={{ justifyContent: "center", marginTop: 2 , color:"red",fontSize:20}}>
              Giá dự kiến:
            </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: "#ed8e53", color: "#fff", padding:1}}
                >
                  Mua BHTD: 25.890.000đ
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: "#ed8e53", color: "#fff", padding:1}}
                >
                  Mua Phụ Kiện: 26.590.000đ
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                   variant="contained"
                   fullWidth
                   sx={{ backgroundColor: "#ed8e53", color: "#fff",padding:1}}
                >
                  Mua Thẳng: 26.890.000đ
                </Button>
              </Grid>
            </Grid> */}
          </Grid>

          <Grid item xs={4}>
            {/* Display Image Based on Selected Color */}
            <img
              className={styles.img}
              src={image}
              alt={`iPhone ${color}`}
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        {/* Content for iphone 16 Plus */}
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
                      backgroundColor: storage === "128GB" ? "red" : "#ccc",
                      color: storage === "128GB" ? "#fff" : "#fff",
                      fontWeight: "bold",
                      border: "2px solid",
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
                      backgroundColor: storage === "256GB" ? "red" : "#ccc",
                      color: storage === "256GB" ? "#fff" : "#fff",
                      fontWeight: "bold",
                      border: "2px solid",
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
                      backgroundColor: storage === "512GB" ? "red" : "#ccc",
                      color: storage === "512GB" ? "#fff" : "#fff",
                      fontWeight: "bold",
                      border: "2px solid",
                      cursor: "pointer",
                    }}
                  >
                    512GB
                  </Box>
                }
              />
              {/* <FormControlLabel
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
                      backgroundColor: storage === "1TB" ? "pink" : "#ccc",
                      color: storage === "1TB" ? "#fff" : "#fff",
                      fontWeight: "bold",
                      border: "2px solid",
                      cursor: "pointer",
                    }}
                  >
                    1TB
                  </Box>
                }
              /> */}
            </RadioGroup>

            {/* Color Option */}
            <RadioGroup
              row
              defaultValue="Black"
              value={color}
              onChange={handleColorChangeNormal}
            >
              <FormControlLabel
                value="White"
                sx={{ marginRight: { xs: 1, sm: 2 } }}
                control={
                  <Radio
                    sx={{
                      color: "#C2BCB2 ", // Màu khi chưa được chọn
                      "&.Mui-checked": {
                        color: "#C2BCB2", // Màu khi đã được chọn
                      },
                    }}
                  />
                }
                label="Trắng"
              />
              <FormControlLabel
                value="Black"
                sx={{ marginRight: { xs: 1, sm: 2 } }}
                control={
                  <Radio
                    sx={{
                      color: "#F2F1ED", // Màu khi chưa được chọn

                      "&.Mui-checked": {
                        color: "#F2F1ED", // Màu khi đã được chọn
                      },
                    }}
                  />
                }
                label="Đen"
              />
              <FormControlLabel
                value="Blue"
                sx={{ marginRight: { xs: 1, sm: 2 } }}
                control={
                  <Radio
                    sx={{
                      color: "#3C3C3D", // Màu khi chưa được chọn
                      "&.Mui-checked": {
                        color: "#3C3C3D", // Màu khi đã được chọn
                      },
                    }}
                  />
                }
                label="Xanh lưu ly"
              />
              <FormControlLabel
                value="Green"
                control={
                  <Radio
                    sx={{
                      color: "#BFA48F", // Màu khi chưa được chọn
                      "&.Mui-checked": {
                        color: "#BFA48F", // Màu khi đã được chọn
                      },
                    }}
                  />
                }
                label="Xanh mòng két"
              />
              <FormControlLabel
                value="Pink"
                control={
                  <Radio
                    sx={{
                      color: "#BFA48F", // Màu khi chưa được chọn
                      "&.Mui-checked": {
                        color: "#BFA48F", // Màu khi đã được chọn
                      },
                    }}
                  />
                }
                label="Hồng"
              />
            </RadioGroup>

            {/* Pricing Section */}
            <Typography
              variant="h6"
              color="red"
              sx={{ justifyContent: "center", marginTop: 2, color: "#333" }}
            >
              Giá dự kiến:{" "}
              <span style={{ fontSize: 30, color: "red" }}>
                {" "}
                {price.toLocaleString()}đ{" "}
              </span>
            </Typography>
            <Typography
              variant="h6"
              color="red"
              sx={{ justifyContent: "center", marginTop: 2, color: "#333" }}
            >
              Trả góp chỉ từ:{" "}
              <span style={{ fontSize: 20, color: "black" }}>
                {" "}
                {Math.round(price / 12).toLocaleString()}đ{" "}
              </span>
            </Typography>
            {/* <Grid container spacing={2}>
            <Grid item  xs={12} sx={{ justifyContent: "center", marginTop: 2 , color:"red",fontSize:20}}>
              Giá dự kiến:
            </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: "#ed8e53", color: "#fff", padding:1}}
                >
                  Mua BHTD: 25.890.000đ
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: "#ed8e53", color: "#fff", padding:1}}
                >
                  Mua Phụ Kiện: 26.590.000đ
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                   variant="contained"
                   fullWidth
                   sx={{ backgroundColor: "#ed8e53", color: "#fff",padding:1}}
                >
                  Mua Thẳng: 26.890.000đ
                </Button>
              </Grid>
            </Grid> */}
          </Grid>

          <Grid item xs={4}>
            {/* Display Image Based on Selected Color */}
            <img
              className={styles.img}
              src={image}
              alt={`iPhone ${color}`}
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        {/* Content for iphone 16 Plus */}
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
                      backgroundColor: storage === "128GB" ? "red" : "#ccc",
                      color: storage === "128GB" ? "#fff" : "#fff",
                      fontWeight: "bold",
                      border: "2px solid",
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
                      backgroundColor: storage === "256GB" ? "red" : "#ccc",
                      color: storage === "256GB" ? "#fff" : "#fff",
                      fontWeight: "bold",
                      border: "2px solid",
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
                      backgroundColor: storage === "512GB" ? "red" : "#ccc",
                      color: storage === "512GB" ? "#fff" : "#fff",
                      fontWeight: "bold",
                      border: "2px solid",
                      cursor: "pointer",
                    }}
                  >
                    512GB
                  </Box>
                }
              />
              {/* <FormControlLabel
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
                      backgroundColor: storage === "1TB" ? "pink" : "#ccc",
                      color: storage === "1TB" ? "#fff" : "#fff",
                      fontWeight: "bold",
                      border: "2px solid",
                      cursor: "pointer",
                    }}
                  >
                    1TB
                  </Box>
                }
              /> */}
            </RadioGroup>

            {/* Color Option */}
            <RadioGroup row value={color} onChange={handleColorChangeNormal}>
              <FormControlLabel
                value="White"
                sx={{ marginRight: { xs: 1, sm: 2 } }}
                control={
                  <Radio
                    sx={{
                      color: "#C2BCB2 ", // Màu khi chưa được chọn
                      "&.Mui-checked": {
                        color: "#C2BCB2", // Màu khi đã được chọn
                      },
                    }}
                  />
                }
                label="Trắng"
              />
              <FormControlLabel
                value="Black"
                sx={{ marginRight: { xs: 1, sm: 2 } }}
                control={
                  <Radio
                    sx={{
                      color: "#F2F1ED", // Màu khi chưa được chọn

                      "&.Mui-checked": {
                        color: "#F2F1ED", // Màu khi đã được chọn
                      },
                    }}
                  />
                }
                label="Đen"
              />
              <FormControlLabel
                value="Blue"
                sx={{ marginRight: { xs: 1, sm: 2 } }}
                control={
                  <Radio
                    sx={{
                      color: "#3C3C3D", // Màu khi chưa được chọn
                      "&.Mui-checked": {
                        color: "#3C3C3D", // Màu khi đã được chọn
                      },
                    }}
                  />
                }
                label="Xanh lưu ly"
              />
              <FormControlLabel
                value="Green"
                control={
                  <Radio
                    sx={{
                      color: "#BFA48F", // Màu khi chưa được chọn
                      "&.Mui-checked": {
                        color: "#BFA48F", // Màu khi đã được chọn
                      },
                    }}
                  />
                }
                label="Xanh mòng két"
              />
              <FormControlLabel
                value="Pink"
                control={
                  <Radio
                    sx={{
                      color: "#BFA48F", // Màu khi chưa được chọn
                      "&.Mui-checked": {
                        color: "#BFA48F", // Màu khi đã được chọn
                      },
                    }}
                  />
                }
                label="Hồng"
              />
            </RadioGroup>

            {/* Pricing Section */}
            <Typography
              variant="h6"
              color="red"
              sx={{ justifyContent: "center", marginTop: 2, color: "#333" }}
            >
              Giá dự kiến:{" "}
              <span style={{ fontSize: 30, color: "red" }}>
                {" "}
                {price.toLocaleString()}đ{" "}
              </span>
            </Typography>
            <Typography
              variant="h6"
              color="red"
              sx={{ justifyContent: "center", marginTop: 2, color: "#333" }}
            >
              Trả góp chỉ từ:{" "}
              <span style={{ fontSize: 20, color: "black" }}>
                {" "}
                {Math.round(price / 12).toLocaleString()}đ{" "}
              </span>
            </Typography>
            {/* <Grid container spacing={2}>
            <Grid item  xs={12} sx={{ justifyContent: "center", marginTop: 2 , color:"red",fontSize:20}}>
              Giá dự kiến:
            </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: "#ed8e53", color: "#fff", padding:1}}
                >
                  Mua BHTD: 25.890.000đ
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: "#ed8e53", color: "#fff", padding:1}}
                >
                  Mua Phụ Kiện: 26.590.000đ
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                   variant="contained"
                   fullWidth
                   sx={{ backgroundColor: "#ed8e53", color: "#fff",padding:1}}
                >
                  Mua Thẳng: 26.890.000đ
                </Button>
              </Grid>
            </Grid> */}
          </Grid>

          <Grid item xs={4}>
            {/* Display Image Based on Selected Color */}
            <img
              className={styles.img}
              src={image}
              alt={`iPhone ${color}`}
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </CustomTabPanel>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Họ và tên khách hàng"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            error={isSubmitted && !name} // Chỉ hiển thị lỗi nếu đã submit và name rỗng
            helperText={isSubmitted && !name ? "Họ và tên là bắt buộc" : ""}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Số điện thoại"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            error={isSubmitted && !phone} // Chỉ hiển thị lỗi nếu đã submit và phone rỗng
            helperText={isSubmitted && !phone ? "Số điện thoại là bắt buộc" : ""}
          />
        </Grid>
        <Grid item xs={12}>
        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={isSubmitted && (!email || !isValidEmail(email))} // Hiển thị lỗi nếu email không hợp lệ
          helperText={
            isSubmitted && (!email || !isValidEmail(email))
              ? "Email không hợp lệ"
              : ""
          }
        />
      </Grid>

      </Grid>

      <Typography sx={{ marginTop: 3, fontWeight: "bold" }}>
        Hiện tại bạn đang sử dụng điện thoại gì? *
      </Typography>
      <RadioGroup
        row
        value={phoneType}
        onChange={(e) => setPhoneType(e.target.value)}
        sx={{ marginBottom: 3,justifyContent: "space-around"}}
      >
        <FormControlLabel value="Samsung" control={<Radio />} label="Samsung" />
        <FormControlLabel value="iPhone" control={<Radio />} label="iPhone" />
        <FormControlLabel value="Khác" control={<Radio />} label="Khác" />
      </RadioGroup>

      <Typography sx={{ fontWeight: "bold" }}>
        Bạn thích nhận được ưu đãi nào sau đây khi Pre-order iPhone 16 Series
        tại Bạch Long Mobile? *
      </Typography>
      <Grid container spacing={2} sx={{ marginBottom: 3, justifyContent: "left" }}>
        <Grid item xs={12} sm={6  }>
          <FormControlLabel
            control={
              <Checkbox
                checked={offers.includes("Thu Cũ đổi mới")}
                onChange={handleOffersChange}
                name="Thu Cũ đổi mới"
              />
            }
            label={
              <Box sx={{ textAlign: "center", whiteSpace: "normal", wordWrap: "break-word" }}>
                Lên đời siêu phẩm Thu cũ giá cao
              </Box>
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={
              <Checkbox
                checked={offers.includes("Trả góp 0%")}
                onChange={handleOffersChange}
                name="Trả góp 0%"
              />
            }
            label={
              <Box sx={{ textAlign: "center", whiteSpace: "normal", wordWrap: "break-word" }}>
                Trả góp 0%, ưu đãi giảm thêm
              </Box>
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={
              <Checkbox
                checked={offers.includes("Phụ kiện mua kèm giảm thêm")}
                onChange={handleOffersChange}
                name="Phụ kiện mua kèm giảm thêm"
              />
            }
            label={
              <Box sx={{ textAlign: "center", whiteSpace: "normal", wordWrap: "break-word" }}>
                Phụ kiện tương thích mua kèm giảm thêm
              </Box>
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={
              <Checkbox
                checked={offers.includes("Quà tặng")}
                onChange={handleOffersChange}
                name="Quà tặng"
              />
            }
            label={
              <Box sx={{ textAlign: "center", whiteSpace: "normal", wordWrap: "break-word" }}>
                Quà tặng cao cấp, hấp dẫn
              </Box>
            }
          />
        </Grid>
      </Grid>

      <TextField
        fullWidth
        label="Yêu cầu thêm ưu đãi"
        value={promotion}
        onChange={(e) => setPromotion(e.target.value)}
        sx={{ marginBottom: 2 }}
        required
      />
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            backgroundColor: "#ffcc00",
            color: "#000",
            marginTop: 3,
          }}
        >
          Gửi
        </Button>
      </Grid>
    </Box>
    </>
  );
};

export default IphoneTabs;
