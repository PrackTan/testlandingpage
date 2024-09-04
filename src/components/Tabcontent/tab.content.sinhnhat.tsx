import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}
const CustomTabs = styled(Tabs)({
  width: "100%",
  display: "flex",
  "& .MuiTabs-flexContainer": {
    width: "100%",
    justifyContent: "space-between", // Phân chia đều không gian giữa các tab
  },
  "& .MuiTabs-indicator": {
    backgroundColor: "#1976d2",
    height: "4px",
  },
});

const CustomTab = styled(Tab)(({ theme, selected }:any) => ({
  borderRadius:5,
  flexGrow: 1,
  marginLeft:"20px",
  textTransform: "none",
  fontWeight: "bold",
  maxWidth: "none", // Bỏ giới hạn chiều rộng
  flexBasis: "50%", // Đảm bảo mỗi tab chiếm 50% chiều rộng
  backgroundColor: "yellow",
  color: selected ? "red" : "black",
  "&:hover": {
    color: "red",
  },
}));


const TabSinhNhat = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  };

  return (
    <div id="trung-qua-sn18">
      <CustomTabs value={value} onChange={handleChange} aria-label="tabs" centered>
        <CustomTab label="MỪNG SINH NHẬT TRÚNG SIÊU PHẨM"   />
        <CustomTab label="MIỄN PHÍ CHUYẾN ĐI. 100% CÓ QUÀ" />
      </CustomTabs>
      <TabPanel value={value} index={0}>
        <div className="list-banner-img">
          <div className="time-line-sn18nam">
            <img
              src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/150824-BANNER-BL-MALL-TRUNG-QUA.jpg"
              style={{ width: "100%" }}
              alt="Banner 1"
            />
          </div>
          <div className="infor-banner-img">
            <span>
              - Duy nhất và độc quyền trong sự kiện sinh nhật lần này, tất cả
              các khách hàng đến tham quan mua sắm tại hệ thống Bạch Long
              Mobile có hóa đơn theo thể lệ sau đây:
            </span>
            <div style={{ display: "grid", textAlign: "center" }}>
              <strong>- Hóa đơn mua MÁY từ 5.000.000</strong>
              <strong>
                ==&gt; Nhận 1 Phiếu Hẹn tham gia vòng quay vật lý trúng thưởng
                Galaxy Z Flip6 256GB Chính Hãng
              </strong>
              <strong>- Hóa đơn mua PHỤ KIỆN từ 300.000</strong>
              <strong>
                ==&gt; Nhận 1 Phiếu Hẹn tham gia vòng quay vật lý trúng thưởng
                Trạm sạc Pisen Chính Hãng
              </strong>
            </div>
            <span>
              - Mỗi số điện thoại khách hàng chỉ được tham gia 1 lần cho 1 giải
              thưởng.
            </span>
            <span>
              - Số điện thoại tham gia phải là chính chủ và có mặt tại buổi quay
              thưởng.
            </span>
            <span>
              - Thời gian diễn ra Vòng quay vật lý:{" "}
              <strong>
                09h30, ngày 31/08/2024 tại Bạch Long Mobile Trần Hưng Đạo Q.1
                TP.HCM
              </strong>
            </span>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="list-banner-img">
          <div className="time-line-sn18nam">
            <img
              src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/150824-BANNER-BL-MALL-FREE-CHUYEN-DI.jpg"
              style={{ width: "100%" }}
              alt="Banner 2"
            />
          </div>
          <div className="infor-banner-img">
            <strong style={{ textAlign: "center" }}>
              MỪNG SINH NHẬT: 100% MUA LÀ CÓ QUÀ
            </strong>
            <span>
              Tất cả các khách hàng đến tham quan mua sắm trong chương trình
              với tổng hóa đơn từ 5.000.000 sẽ nhận được 1 phần quà sinh nhật
              cùng với Bạch Long Mobile:
            </span>
            <strong>
              - Tặng ngay 1 nón bảo hiểm cao cấp kỷ niệm Bạch Long Mobile 18
              năm.
            </strong>
            <span>
              - Số lượng quà tặng có hạn, quý khách hàng hãy nhanh chân đến
              Bạch Long nhận quà nhé.
            </span>
            <strong style={{ textAlign: "center" }}>
              MỪNG SINH NHẬT: MIỄN PHÍ CHUYẾN ĐI ĐẾN BẠCH LONG MUA SẮM
            </strong>
            <span>
              Duy nhất và độc quyền trong sự kiện sinh nhật lần này, tất cả
              các khách hàng trong nội thành TP.HCM đến tham quan mua sắm tại
              hệ thống Bạch Long Mobile di chuyển bằng các hình thức xe công
              nghệ có hóa đơn thể hiện lộ trình đến cửa hàng Bạch Long Mobile
              gần nhất, sẽ nhận được ưu đãi:
            </span>
            <strong>
              - Hoàn 100% chi phí chuyến đi cho khách hàng (tối đa 300.000Đ).
            </strong>
            <strong>
              - Áp dụng hoàn tiền cho khách hàng có tổng hóa đơn mua sắm từ
              5.000.000
            </strong>
            <span>
              - Quý khách vui lòng cung cấp chứng từ hóa đơn di chuyển có thể
              hiện điểm đến là Bạch Long Mobile gần nhất để được hoàn tiền.
            </span>
            <span>
              - Mỗi khách hàng chỉ được hoàn tiền 1 lần trong suốt thời gian
              chương trình diễn ra.
            </span>
          </div>
        </div>
      </TabPanel>
    </div>
  );
};

function TabPanel(props:TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default TabSinhNhat;
