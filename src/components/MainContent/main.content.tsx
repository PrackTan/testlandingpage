"use client";

import { Box, Container, Grid } from "@mui/material";
import styleContent from "@/styles/maincontentStyle.module.scss";
import MainCarousel from "../Carousel/main.carousel";
import IphoneForm from "../Form/form.main";
import HotProductsList from "../slidedown/hot.product";
export default function MainContent() {
  return (
    <Box sx={{ backgroundColor: "black" }}>
      <div className="none">
        <img
          style={{ maxWidth: "100%" }}
          src="https://bachlongmobile.com/bnews/wp-content/uploads/2023/09/head-dangky-ip15sr-1920x600-140923-new.png"
          alt="header"
        />
      </div>
      <Container
        sx={{ backgroundColor: "#2222" }}
        maxWidth="lg"
        className={styleContent.inView}
      >
        <section
          className="countdown container wow animate__bounceInDown"
          style={{ width: "100%", marginBottom: 20 }}
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
                src="https://bachlongmobile.com/bnews/wp-content/uploads/2023/09/time-line-ip15-new-130923.png"
              />
            </div>
            <div className="visao-chonbachlong">
              <img
                style={{ width: "100%", borderRadius: 40 }}
                alt="bạch long mobile"
                src="https://bachlongmobile.com/bnews/wp-content/uploads/2023/09/visao-chonbachlong-110923.png"
              />
            </div>
          </div>
        </section>
      </Container>
      <Box sx={{ backgroundColor: "#a9a9a9" }}>
        <Container>
          <section className="nuiqua countdown wow animate__bounceInDown">
            <div className="container">
              <img
                style={{ width: "100%" }}
                alt="bạch long mobile"
                src="https://bachlongmobile.com/bnews/wp-content/uploads/2023/09/nui-qua-ip15-120923-new.png"
              />
            </div>
          </section>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ marginTop: 5 }}>
        <section className="countdown container wow animate__bounceInDown">
          <div className="row">
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <iframe
                  width={560}
                  height={315}
                  src="https://www.youtube.com/embed/xqyUdNxWazA"
                  title="Introducing iPhone 15 Pro | Apple"
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
                  title="Introducing iPhone 15 | WOW | Apple"
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
        </section>
        <Box className="form-descriptions" sx={{color:"#fad200",textAlign:"center"}}>
          <h1 style={{fontSize:40}} className="form-title">
            Bạn đã sẵn sàng Sở hữu siêu phẩm iPhone 15 Series <br />
            tại Bạch Long Mobile AAR
          </h1>
          <h3 className="form-subt-title">
            Hãy trở thành khách hàng đầu tiên nhận được những ưu đãi khủng của
            chương trình <br />
            Pre-order iPhone 15 Series tại Bạch Long Mobile AAR bắt đầu từ
            22/09/2023.
          </h3>
        </Box>
        <IphoneForm/>
        {/* <HotProductsList/> */}
      </Container>
     
    </Box>
  );
}
