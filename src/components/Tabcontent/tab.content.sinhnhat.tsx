import React from "react";
import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import "./styletabsinhnhat.scss"
const TabSinhNhat = () => {
  
  return (
    <div id="trung-qua-sn18">
      <Tabs defaultActiveKey="1">
        <TabPane tab="MỪNG SINH NHẬT TRÚNG SIÊU PHẨM" key="1">
          <div className={"list-banner-img"}>
            <div className="time-line-sn18nam">
              <img
                src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/BANNER-TRUNG-QUA-SN18-1200-020824.jpg"
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
                - Mỗi số điện thoại khách hàng chỉ được tham gia 1 lần cho 1
                giải thưởng.
              </span>
              <span>
                - Số điện thoại tham gia phải là chính chủ và có mặt tại buổi
                quay thưởng.
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
        </TabPane>
        <TabPane tab="MIỄN PHÍ CHUYẾN ĐI. 100% CÓ QUÀ" key="2">
          <div className="list-banner-img">
            <div className="time-line-sn18nam">
              <img
                src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/BANNER-FREE-DICHUYEN-1200-020824.jpg"
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
        </TabPane>
        <TabPane tab="RA MẮT WEBSITE MỚI" key="3">
          <div className="list-banner-img">
            <div className="time-line-sn18nam">
              <img
                src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/BANNER-WEBSITE-NEW-1200-010824.jpg"
                style={{ width: "100%" }}
                alt="Banner 3"
              />
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default TabSinhNhat;
