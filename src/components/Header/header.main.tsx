"use client"
import { Box } from '@mui/material';
import React from 'react'
export default function HeaderMain() {
  return (
    <div>
      <Box className="header-wrapper" sx={{display:"flex", flexDirection:"row"}}  id="ldporder-header">
        <div className="container header-container">
          <figure className="header-logo">
            <a href="https://minhtuanmobile.com/" className="d-inline-block">
              <img
                src="https://minhtuanmobile.com/uploads/landingpage/logo-minh-tuan-dai-ly-uy-quyen-aar-trang-2405171024.png"
                alt="Hệ thống cửa hàng điện thoại Minh Tuấn Mobile"
                className="img-responsive header-logo-img"
                width={202}
                height={40}
              />
            </a>
          </figure>
          {/*  */}
          <span className="header-reseller">
            Đại Lý Ủy Quyền Chính Thức Của Apple
          </span>
          {/*  */}
          <span className="header-hotline text-end">
            <a
              href="tel:18003355"
              target="_blank"
              className="header-hotline-link"
            >
              <i className="fas fa-phone-volume" />
              <span>
                <b>18003355</b>
                <small>Tổng đài miễn phí</small>
              </span>
            </a>
          </span>
          {/*  */}
        </div>
      </Box>
    </div>
  );
}
