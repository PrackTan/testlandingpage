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
  const [phoneType, setPhoneType] = useState("Samsung");
  const [offers, setOffers] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [promotion, setPromotion] = useState("");
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(
      ">>>>>>>>>>>>>value " + value + " >>>>>>>>>>>>>storage" + storage
    );
  };

  const handleStorageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStorage(event.target.value);
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

  const handleColorChange = (event: any) => {
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
  console.log(
    ">>>>>>>>>>>>>value " + value + " >>>>>>>>>>>>>storage" + storage
  );

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

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const handleSubmit = async () => {
    const data = {
      selectedProduct: {
        type:
          value === 0
            ? "iPhone 15 Pro Max"
            : value === 1
            ? "iPhone 15 Pro"
            : "iPhone 15 Plus",
        storage: storage,
        color: color,
      },
      name,
      phone,
      promotion,
      offers:offers.join(", "),
      phoneType
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
        {value === index && <Box sx={{ p: 4 }}>{children}</Box>}
      </div>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: "900px",
        margin: "0 auto",
        color: "#333",
        textAlign: "center",
        padding: { xs: 2, md: 4 }, // Thêm padding cho thiết bị di động
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Bạn quan tâm sản phẩm nào?
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" ,display:"flex",justifyContent: 'center'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="iPhone tabs"
          variant="scrollable" // Cho phép cuộn nếu không đủ không gian
          scrollButtons="auto" // Hiển thị nút cuộn nếu cần thiết
          allowScrollButtonsMobile // Cho phép cuộn trên thiết bị di động

          sx={{
            '& .MuiTabs-scrollButtons': {
              width: '48px', // Điều chỉnh nút cuộn
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
              padding: {xs: "4px 6px", md: "10px 20px" }, // Thay đổi padding trên mobile
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
              padding: {xs: "4px 6px", md: "10px 20px" }, // Thay đổi padding trên mobile
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
              color: value === 2 ? "#fff" : "#333",
              padding: { xs: "4px 6px"  , md: "10px 20px" }, // Thay đổi padding trên mobile
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
                      backgroundColor: storage === "128GB" ? "pink" : "#ccc",
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
                      backgroundColor: storage === "256GB" ? "pink" : "#ccc",
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
                      backgroundColor: storage === "512GB" ? "pink" : "#ccc",
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
              />
            </RadioGroup>

            {/* Color Option */}
            <RadioGroup row value={color} onChange={handleColorChange}>
              <FormControlLabel
                value="Titanium"
                sx={{ marginRight: { xs: 1, sm: 2 } }}
                control={
                  <Radio
                    sx={{
                      color: "gray", // Màu khi chưa được chọn
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
                sx={{ marginRight: { xs: 1, sm: 2 } }}
                control={
                  <Radio
                    sx={{
                      color: "gray", // Màu khi chưa được chọn

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
                sx={{ marginRight: { xs: 1, sm: 2 } }}
                control={
                  <Radio
                    sx={{
                      color: "gray", // Màu khi chưa được chọn
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
                      color: "gray", // Màu khi chưa được chọn
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
            <Typography variant="h6" color="red" sx={{ justifyContent: "center", marginTop: 2 , color:"#333"}}>
              Giá niêm yết:  <span style={{fontSize:30,color:"red"}}> 31.990.000đ </span>
            </Typography>
            <Grid container spacing={2}>
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
            </Grid>
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
        {/* Content for iPhone 15 Pro */}
        Nội dung cho iPhone 16 Pro
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        {/* Content for iPhone 15 Plus */}
        Nội dung cho iPhone 16 Plus
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        {/* Content for iPhone 15 Plus */}
        Nội dung cho iPhone 16
      </CustomTabPanel>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Họ và tên khách hàng"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Số điện thoại"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
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
        sx={{ marginBottom: 3 }}
      >
        <FormControlLabel value="Samsung" control={<Radio />} label="Samsung" />
        <FormControlLabel value="iPhone" control={<Radio />} label="iPhone" />
        <FormControlLabel value="Khác" control={<Radio />} label="Khác" />
      </RadioGroup>

      <Typography sx={{ fontWeight: "bold" }}>
        Bạn thích nhận được ưu đãi nào sau đây khi Pre-order iPhone 16 Series
        tại Bạch Long Mobile? *
      </Typography>
      <Grid container spacing={2} sx={{ marginBottom: 3 }}>
        <Grid item xs={6} sm={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={offers.includes("Thu Cũ Giá Cao")}
                onChange={handleOffersChange}
                name="Thu Cũ Giá Cao"
              />
            }
            label="Lên đời siêu phẩm Thu cũ giá cao"
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={offers.includes("Phụ Kiện")}
                onChange={handleOffersChange}
                name="Phụ Kiện"
              />
            }
            label="Quà tặng hấp dẫn Phụ kiện tương thích"
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={offers.includes("Sản Phẩm Hệ Sinh Thái")}
                onChange={handleOffersChange}
                name="Sản Phẩm Hệ Sinh Thái"
              />
            }
            label="Quà tặng hấp dẫn Sản phẩm hệ sinh thái"
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={offers.includes("Giá Cuối Trừ Quà")}
                onChange={handleOffersChange}
                name="Giá Cuối Trừ Quà"
              />
            }
            label="Giá bán rẻ nhất Giá cuối trừ quà"
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={offers.includes("Giá Bán Ưu Đãi")}
                onChange={handleOffersChange}
                name="Giá Bán Ưu Đãi"
              />
            }
            label="Giá bán ưu đãi Mua kèm giảm thêm"
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
  );
};

export default IphoneTabs;
