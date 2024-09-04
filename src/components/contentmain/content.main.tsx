"use client";
import React, { useEffect, useState } from "react";
import "@/styles/stylecontent.scss";
import HotProductsList from "../hotproduct/hot.product";
import TabSinhNhat from "../Tabcontent/tab.content.sinhnhat";
import { Box, Container } from "@mui/material";
import CustomTabs from "../hotproduct/test";
import Countdown from "react-countdown";

const Span: React.CSSProperties = {
  padding: 6,
  backgroundColor: "rgba(60,60,60,0.8)",
};

export default function ContentMain() {
  const [isClient, setIsClient] = useState(false);
  const targetDate = new Date("2024-09-08T00:00:00");
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Trả về null cho đến khi client-side rendering hoàn tất
    return null;
  }
  //  const threeDaysFromNow = Date.now() + 3 * 24 * 60 * 60 * 1000;
  // Hàm renderer để tùy chỉnh giao diện đếm ngược
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    // console.log(days, hours, minutes, seconds, completed);
    if (completed) {
      // Khi đếm ngược hoàn tất
      return <span style={{color:"#fff", fontWeight:900}}>Chương Trình Kết Thúc</span>;
    } else {
      // Giao diện hiển thị của đếm ngược
      return (
        <div style={{ color: "#FFF", fontWeight: 900, textAlign: "center" }}>
          <div style={{ marginBottom: 10, marginTop: 5 }}>
            <span style={Span}>0{days}</span> :{" "}
            <span style={Span}>{hours}</span> :{" "}
            <span style={Span}>{minutes}</span> :{" "}
            <span style={Span}>{seconds}</span>
          </div>
          <div>Ngày - Giờ - Phút - Giây</div>
        </div>
      );
    }
  };
  return (
    <Box>
      {/* <section className="bg-sinhnhat-18"></section>
      <section className="click-scroll">
        <div className="box-click-scroll container">
          <div>
            <a href="#deal-shock-list">
              <img alt="bạch long mobile" src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/BOX-SP-DEAL-SHOCK-010824.png" />
            </a>
          </div>
          <div>
            <a href="#list-mega-sale">
              <img alt="bạch long mobile" src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/BOX-MEGA-SALE-010824.png" />
            </a>
          </div>
          <div>
            <a href="#trung-qua-sn18">
              <img alt="bạch long mobile" src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/BOX-SAMSUNG-Z-NEW-020824.png" />
            </a>
          </div>
          <div>
            <a href="#trung-qua-sn18">
              <img alt="bạch long mobile" src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/BOX-CO-QUA-010824.png" />
            </a>
          </div>
          <div>
            <a href="#trung-qua-sn18">
              <img alt="bạch long mobile" src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/BOX-FREE-DI-CHUYEN-010824-1.png" />
            </a>
          </div>
        </div>
      </section> */}
      <div>
        <section className="bg-sinhnhat-18" />
        <section className="click-scroll"   >
          <div className="box-click-scroll container" style={{ display: "flex", alignItems: "center" }}>
            <div className="infor-click-scroll">
              <div>
                <a href="#deal-shock-list">
                  <img
                    alt="bạch long mobile"
                    src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/140824-BOX-KHAI-TRUONG-MALL-1.png"
                  />
                </a>
              </div>
              <div>
                <a href="#list-mega-sale">
                  <img
                    alt="bạch long mobile"
                    src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/140824-BOX-KHAI-TRUONG-MALL-2.png"
                  />
                </a>
              </div>
              <div>
                <a href="#trung-qua-sn18">
                  <img
                    alt="bạch long mobile"
                    src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/140824-BOX-KHAI-TRUONG-MALL-4.png"
                  />
                </a>
              </div>
              <div>
                <a href="#trung-qua-sn18">
                  <img
                    alt="bạch long mobile"
                    src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/140824-BOX-KHAI-TRUONG-MALL-5.png"
                  />
                </a>
              </div>
            </div>
            <div className="infor-click-scroll-big">
              <a href="#trung-qua-sn18">
                <img
                  alt="bạch long mobile"
                  src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/140824-BOX-KHAI-TRUONG-MALL-3-1.png"
                />
              </a>
            </div>
          </div>
        </section>
      </div>

      <section className="thoigian-sinhnhat18">
        <div className="thele-sinhnhat18 container">
          <div className="info-thele-sinhnhat18">
            <a href="#data-thele" data-fancybox>
              <span className="box-thele-sinhnhat18">THỂ LỆ - </span>
            </a>
            <span>Áp dụng từ ngày: 03/08 - 30/08/2024</span>
          </div>
          <div className="info-time-sinhnhat18">
            <div className="info-tgian">
              <Countdown
                date={targetDate} // Đếm ngược từ 3 ngày
                renderer={renderer} // Renderer để định dạng giao diện
              />
              ,
              <div id="clockdiv-new" />
            </div>
          </div>
        </div>
      </section>
      <Container>
        <section>
          <div className="container">
            <div className="countdown-img">
              <iframe
                width={595}
                height={315}
                src="https://www.youtube.com/embed/9smCZlhqumg"
                title="Tập 1: Mén xin việc | Bạch Long Ka Series"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              <iframe
                width={595}
                height={315}
                src="https://www.youtube.com/embed/XT_osb4eUOo"
                title="Thử ngay tính năng chỉnh sửa ảnh bằng Galaxy AI trên Galaxy Z Fold 6 | Mẹo hay nên biết"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="time-line-sn18nam">
              {/* <img
                alt="bạch long mobile"
                src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/TIME-LINE-SINHNHAT-18NAM-020824.png"
                style={{ width: "80%" }}
              /> */}
            </div>
          </div>
        </section>
        <section>
          <TabSinhNhat />
        </section>
        <section className="list-sp-dealchamday">
          <div className="box-list-sp-dealchamday container">
            {/* APPLE */}
            <HotProductsList />
            <div id="deal-shock-list" />
          </div>
          <div className="info-list-dt-dandau" id="list-mega-sale">
            <div className="title-list-sp-dealchamday">
              {/* <span> DẪN ĐẦU GIÁ RẺ. NỔ DEAL CHẠM ĐÁY</span> */}

              <img
                src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/150824-TITLE-18-SP-SAP-SAN-1200.jpg"
                alt="bạch long mobile"
              />
            </div>
            <div>
              <div className="tab-controllers-list">
                <CustomTabs />
              </div>
            </div>
          </div>
          <div className="info-list-dt-dandau" id="list-mega-sale">
            <div className="title-list-sp-dealchamday">
              {/* <span> DẪN ĐẦU GIÁ RẺ. NỔ DEAL CHẠM ĐÁY</span> */}

              <img
                src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/TITLE-MEGA-PK-SALE-1200-010824.jpg"
                alt="bạch long mobile"
              />
            </div>
            <div>
              <div className="tab-controllers-list">
                <CustomTabs />
              </div>
            </div>
          </div>
          <div className="container banner-blc">
          <div className="title-blc">
            <span>Dịch vụ tiện ích</span>
          </div>
          <a href="https://bachlongmobile.com/doi-cu-lay-moi">
            <img alt="bạch long mobile" src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/07/BANNER-THUCU-NEW-KT-1200-060724.jpg" />
          </a>
          <div className="info-uudai-thanhtoan">
            <div className="img-uudai-thanhtoan">
              <a href="https://bachlongmobile.com/home-paylater">
                <img alt="bạch long mobile" src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/06/BANNER-HOME-PAYLATER-1200-060624.png" />
                <div>
                  <span>
                    Giảm 10% đến 1.250.000 khi trả góp qua Home PayLater
                  </span>
                </div>
              </a>
            </div>
            <div className="img-uudai-thanhtoan">
              <a href="https://bachlongmobile.com/hd-saison">
                <img alt="bạch long mobile" src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/06/BANNER-TRAGOP-OFFLINE-1200-190624.png" />
                <div>
                  <span>
                    Giảm đến 500.000 khi Trả góp qua HD Saison, Home Credit,
                    mCredit.
                  </span>
                </div>
              </a>
            </div>
            <div className="img-uudai-thanhtoan">
              <a href="https://bachlongmobile.com/kredivo">
                <img alt="bạch long mobile" src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/07/BANNER-KREDIVO-T7-1200-080724.png" />
                <div>
                  <span>
                    Giảm đến 700.000đ cho khách trả góp qua Kredivo (SLCH)
                  </span>
                </div>
              </a>
            </div>
            <div className="img-uudai-thanhtoan">
              <a href="https://bachlongmobile.com/bnews/mua-hang-lien-tay-hoan-ngay-den-500-000/">
                <img alt="bạch long mobile" src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/07/BANNER-HOAN-TIEN-300K-1200-160724.png" />
                <div>
                  <span>
                    Độc quyền hoàn tiền 300K - Khi thanh toán chuyển khoản
                  </span>
                </div>
              </a>
            </div>
            <div className="img-uudai-thanhtoan">
              <a href="https://bachlongmobile.com/bao-hanh-toan-dien-2024">
                <img alt="bạch long mobile" src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/07/BANNER-BHTD-2024-1200-090724.png" />
                <div>
                  <span>
                    Giảm giá máy thêm 1.000.000 khi mua Gói Bảo Hành Toàn Diện -
                    Lỗi Đổi "Ngay" (Áp dụng máy từ 3 triệu)
                  </span>
                </div>
              </a>
            </div>
            <div className="img-uudai-thanhtoan">
              <a href="https://bachlongmobile.com/mua-tra-gop-2024">
                <img alt="bạch long mobile" src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/07/BANNER-TRAGOP-2024-1200-090724.png" />
                <div>
                  <span>
                    Trả góp 0 Đồng. Không cần trả trước - Giảm đến 1.250.000
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        </section>

        
      </Container>
    </Box>
  );
}
