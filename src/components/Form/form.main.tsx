import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Grid,
  Tab,
  Tabs,
  FormControl,
  FormLabel,
} from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const IphoneForm = () => {
  const [value, setValue] = useState(0);

  const [valuechildTab, setValueChildTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleChildTabChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setValueChildTab(newValue);
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

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <Box
      sx={{
        color: "#fff",
        borderRadius: "8px",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <Typography
        sx={{ marginBottom: 5 }}
        variant="h5"
        align="center"
        gutterBottom
      >
        Bạn quan tâm sản phẩm nào?
      </Typography>

      {/* Product Selection */}
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
        >
          <Tab
            sx={{
              color: "#333",
              backgroundColor: "#fff",
              marginRight: 5,
              borderRadius: 1,
              "&.Mui-selected": {
                color: "#fff", // Đổi màu chữ khi active
                backgroundColor: "red", // Đổi màu nền khi active
              },
            }}
            label="IPHONE 16 PLUS"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              color: "#333",
              backgroundColor: "#fff",
              marginRight: 5,
              borderRadius: 1,
              "&.Mui-selected": {
                color: "#fff", // Đổi màu chữ khi active
                backgroundColor: "red", // Đổi màu nền khi active
              },
            }}
            label="IPHONE 16 PRO"
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              color: "#333",
              backgroundColor: "#fff",
              borderRadius: 1,
              "&.Mui-selected": {
                color: "#fff", // Đổi màu chữ khi active
                backgroundColor: "red", // Đổi màu nền khi active
              },
            }}
            label="IPHONE 16 PRO MAX"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {/* Storage Option */}
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box
              marginBottom={2}
              sx={{ justifyContent: "center", textAlign: "center" }}
            >
              <Tabs
                centered
                value={valuechildTab}
                onChange={handleChildTabChange}
                aria-label="basic tabs example"
                variant="fullWidth"
              >
                <Tab
                  sx={{
                    padding: '6px 12px', // Điều chỉnh khoảng đệm của Tab
                    fontSize: 5, // Điều chỉnh kích thước chữ
                    height:20,
                    color: "#333",
                    backgroundColor: "#fff",
                    marginRight: 5,
                    borderRadius: 1,
                    "&.Mui-selected": {
                      color: "#fff", // Đổi màu chữ khi active
                      backgroundColor: "red", // Đổi màu nền khi active
                    },
                  }}
                  label="IPHONE 16 PLUS"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{
                    color: "#333",
                    backgroundColor: "#fff",
                    marginRight: 5,
                    borderRadius: 1,
                    "&.Mui-selected": {
                      color: "#fff", // Đổi màu chữ khi active
                      backgroundColor: "red", // Đổi màu nền khi active
                    },
                  }}
                  label="IPHONE 16 PRO"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{
                    color: "#333",
                    backgroundColor: "#fff",
                    borderRadius: 1,
                    "&.Mui-selected": {
                      color: "#fff", // Đổi màu chữ khi active
                      backgroundColor: "red", // Đổi màu nền khi active
                    },
                  }}
                  label="IPHONE 16 PRO MAX"
                  {...a11yProps(2)}
                />
              </Tabs>
            </Box>
            <CustomTabPanel value={valuechildTab} index={0}>
              Item 1
            </CustomTabPanel>
            <CustomTabPanel value={valuechildTab} index={1}>
              Item 2
            </CustomTabPanel>
            <CustomTabPanel value={valuechildTab} index={2}>
              Item 3
            </CustomTabPanel>
          </Grid>
          <Grid item xs={6}>
            <img style={{width:10}} src="img/ip13.jpg" alt="Iphone"/>
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>

      {/* Color Option */}
      <Box marginBottom={2}>
        <Typography>Color</Typography>
        <RadioGroup row defaultValue="Titanium">
          <FormControlLabel
            value="Titanium"
            control={<Radio color="secondary" />}
            label="Titanium"
          />
          <FormControlLabel
            value="Blue Titanium"
            control={<Radio color="secondary" />}
            label="Blue Titanium"
          />
          <FormControlLabel
            value="White Titanium"
            control={<Radio color="secondary" />}
            label="White Titanium"
          />
          <FormControlLabel
            value="Black Titanium"
            control={<Radio color="secondary" />}
            label="Black Titanium"
          />
        </RadioGroup>
      </Box>

      {/* Price Section */}
      {/* <Box marginBottom={2}>
        <Typography>Giá niêm yết: 34.990.000đ</Typography>
        <Typography>Mua BHTD: 26.990.000đ</Typography>
        <Typography>Mua Phụ Kiện: 27.690.000đ</Typography>
        <Typography>Mua Thẳng: 27.990.000đ</Typography>
      </Box> */}

      {/* User Information */}
      <Box marginBottom={2}>
        <TextField
          label="Tên"
          variant="outlined"
          fullWidth
          sx={{ backgroundColor: "#fff" }}
        />
      </Box>
      <Box marginBottom={2}>
        <TextField
          label="Số điện thoại"
          variant="outlined"
          fullWidth
          sx={{ backgroundColor: "#fff" }}
        />
      </Box>

      {/* Current Phone Selection */}
      <Box marginBottom={2}>
        <Typography>Hiện tại bạn đang sử dụng điện thoại gì?</Typography>
        <RadioGroup row defaultValue="iPhone">
          <FormControlLabel
            value="iPhone"
            control={<Radio color="secondary" />}
            label="iPhone"
          />
          <FormControlLabel
            value="Samsung"
            control={<Radio color="secondary" />}
            label="Samsung"
          />
          <FormControlLabel
            value="Khác"
            control={<Radio color="secondary" />}
            label="Khác"
          />
        </RadioGroup>
      </Box>

      {/* Promotion Options */}
      <Box marginBottom={2}>
        <Typography>Bạn thích nhận được ưu đãi nào sau đây?</Typography>
        <RadioGroup>
          <FormControlLabel
            value="tặng phụ kiện"
            control={<Radio color="secondary" />}
            label="Quà tặng phụ kiện"
          />
          <FormControlLabel
            value="giá tốt"
            control={<Radio color="secondary" />}
            label="Giá bán tốt nhất"
          />
          <FormControlLabel
            value="cũ đổi mới"
            control={<Radio color="secondary" />}
            label="Thu cũ đổi mới giá cao"
          />
          <FormControlLabel
            value="mua kèm"
            control={<Radio color="secondary" />}
            label="Giá bán ưu đãi mua kèm giảm thêm"
          />
        </RadioGroup>
      </Box>

      {/* Additional Request */}
      <Box marginBottom={2}>
        <TextField
          label="Yêu cầu thêm ưu đãi"
          variant="outlined"
          fullWidth
          sx={{ backgroundColor: "#fff" }}
        />
      </Box>

      {/* Submit Button */}
      <Box textAlign="center">
        <Button
          variant="contained"
          sx={{ backgroundColor: "#ffcc00", color: "#000" }}
        >
          Gửi
        </Button>
      </Box>
    </Box>
  );
};

export default IphoneForm;
