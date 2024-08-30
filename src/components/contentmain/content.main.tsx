"use client";
import React from "react";
import "./stylecontent.scss";
import HotProductsList from "../hotproduct/hot.product";
import TabSinhNhat from "../Tabcontent/tab.content.sinhnhat";
import { Box, Container } from "@mui/material";
import CustomTabs from "../hotproduct/test";
export default function ContentMain() {
  return (
    <Box>
      <section className="bg-sinhnhat-18"></section>
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
      </section>
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
              <span className="name-tgian" id="name-tgian-flashsale" />
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
            <img
              alt="bạch long mobile"
              src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/TIME-LINE-SINHNHAT-18NAM-020824.png"
              style={{ width: "80%" }}
            />
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
              src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/TITLE-MEGA-SALE-1200-010824.jpg"
              style={{ width: "100%" }}
              alt=""
            />
          </div>
          <div >
            <div className="tab-controllers-list" >
              <CustomTabs/>
            </div>
          </div>
        </div>
      </section>
      </Container>
    </Box>
  );
}
