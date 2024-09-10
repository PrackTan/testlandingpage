"use client";

import { Box, Container, Grid } from "@mui/material";
import styleContent from "@/styles/maincontentStyle.module.scss";
import IphoneTabs from "../Form/form.main1";
import InfoForm from "../Form/form.information";
import MainCarousel from "../Carousel/main.carousel";
export default function MainContent() {
  return (
    <Box sx={{ backgroundColor: "white", color:"black" }}>
      <div className="none">
        <img
          style={{ maxWidth: "100%" }}
          src="img/headerbanner.jpg"
          alt="header"
        />
      </div>
      <Container maxWidth="lg" className={styleContent.inView}>
        <section
          className="countdown container wow animate__bounceInDown"
          style={{ width: "100%", marginBottom: 20, marginTop:100}}
        >
          <div className="row">
            <div className="info-tgian">
              <span className="name-tgian" id="name-tgian-flashsale" />
              <div id="clockdiv" />
            </div>
            <div className="timeline-gl-new">
              <img
                style={{ width: "100%" }}
                alt="bạch long mobile"
                src="img/timeline.png"
              />
            </div>
            {/* <div className="visao-chonbachlong">
              <img
                style={{ width: "100%", borderRadius: 40 }}
                alt="bạch long mobile"
                src="img/Langding-Page-Pre-oder-iPhone-16-EXPORT_03.jpg"
              />
            </div> */}
          </div>
        </section>
      </Container>
      <Box>
        <Container>
          <section className="nuiqua countdown wow animate__bounceInDown">
            {/* <div className="container">
              <img
                style={{ width: "100%" }}
                alt="bạch long mobile"
                src="img/Langding-Page-Pre-oder-iPhone-16-EXPORT_04.jpg"
              />
            </div> */}
          </section>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ marginTop: 5 }}>
        {/* <section className="countdown container wow animate__bounceInDown">
          <div className="row">
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <iframe
                  width={560}
                  height={315}
                  src="https://www.youtube.com/embed/xqyUdNxWazA"
                  title="Introducing iPhone 16 series | Apple"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </Grid>
              <Grid item xs={6}>
                <iframe
                  width={560}
                  height={315}
                  src="https://www.youtube.com/embed/XHTrLYShBRQ"
                  title="Introducing iPhone 16 series | WOW | Apple"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </Grid>
            </Grid>
            <div className="title-nhaphoi img-nhaphoi">
              <MainCarousel />
            </div>
          </div>
        </section> */}
        <Box className="form-descriptions" sx={{ textAlign: "center" }}>
          <h1 style={{ fontSize: 40 }} className="form-title">
            <span style={{ color: "white", fontSize: 60 }}>
              Bạn đã sẵn sàng ?
            </span>
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #FFA500, #FF0055)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {" "}
              Sở hữu siêu phẩm iPhone 16 Series tại Bạch Long Mobile AAR{" "}
            </span>
          </h1>
          <h2 className="form-subt-title">
            Hãy trở thành khách hàng đầu tiên nhận được thông tin có hàng sớm nhất <br/>và những ưu đãi khủng của
            chương trình <br />
            IPhone 16 Series tại Bạch Long Mobile AAR bắt đầu từ 
            {" "}
            <span
              style={{
                background: "linear-gradient(90deg, #FFA500, #FF0055)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              20/09/2024
            </span>
          </h2>
        </Box>
        <IphoneTabs />
        {/* <HotProductsList/> */}
      </Container>
      {/* <InfoForm/> */}
    </Box>
  );
}
