import { useState } from "react";
import { Carousel, Tabs } from "antd";
import "antd/dist/reset.css";
import "./HotProductTabs.css"
import { Card, Button, Tag } from 'antd';
import Image from 'next/image';
import React from "react";
import { Box } from "@mui/material";
const { TabPane } = Tabs;

const HotProductsList = () => {
  const [activeTab, setActiveTab] = useState("1");

  // Dữ liệu giả sai
  const productData = {
    pksn18: [
      {
        id: 1,
        name: "Product 1",
        image:
          "https://bachlongmobile.com/media//catalog/product/6/c/6c560d77cc0823de48803796b8be05a8.jpg",
        price: "$100",
      },
      {
        id: 2,
        name: "Product 2",
        image:
          "https://bachlongmobile.com/media//catalog/product/c/a/capture_3_3.png",
        price: "$150",
      },
      {
        id: 3,
        name: "Product 3",
        image: "https://bachlongmobile.com/media//catalog/product/1/2/123.gif",
        price: "$200",
      },
      {
        id: 3,
        name: "Product 3",
        image:
          "https://bachlongmobile.com/media//catalog/product/3/_/3_39_9.jpg",
        price: "$200",
      },
      {
        id: 1,
        name: "Product 1",
        image:
          "https://bachlongmobile.com/media//catalog/product/6/c/6c560d77cc0823de48803796b8be05a8.jpg",
        price: "$100",
      },
      {
        id: 2,
        name: "Product 2",
        image:
          "https://bachlongmobile.com/media//catalog/product/c/a/capture_3_3.png",
        price: "$150",
      },
      {
        id: 3,
        name: "Product 3",
        image: "https://bachlongmobile.com/media//catalog/product/1/2/123.gif",
        price: "$200",
      },
      {
        id: 3,
        name: "Product 3",
        image:
          "https://bachlongmobile.com/media//catalog/product/3/_/3_39_9.jpg",
        price: "$200",
      },
      {
        id: 1,
        name: "Product 1",
        image:
          "https://bachlongmobile.com/media//catalog/product/6/c/6c560d77cc0823de48803796b8be05a8.jpg",
        price: "$100",
      },
      {
        id: 2,
        name: "Product 2",
        image:
          "https://bachlongmobile.com/media//catalog/product/c/a/capture_3_3.png",
        price: "$150",
      },
      {
        id: 3,
        name: "Product 3",
        image: "https://bachlongmobile.com/media//catalog/product/1/2/123.gif",
        price: "$200",
      },
      {
        id: 3,
        name: "Product 3",
        image:
          "https://bachlongmobile.com/media//catalog/product/3/_/3_39_9.jpg",
        price: "$200",
      },
      {
        id: 1,
        name: "Product 1",
        image:
          "https://bachlongmobile.com/media//catalog/product/6/c/6c560d77cc0823de48803796b8be05a8.jpg",
        price: "$100",
      },
      {
        id: 2,
        name: "Product 2",
        image:
          "https://bachlongmobile.com/media//catalog/product/c/a/capture_3_3.png",
        price: "$150",
      },
      {
        id: 3,
        name: "Product 3",
        image: "https://bachlongmobile.com/media//catalog/product/1/2/123.gif",
        price: "$200",
      },
      {
        id: 3,
        name: "Product 3",
        image:
          "https://bachlongmobile.com/media//catalog/product/3/_/3_39_9.jpg",
        price: "$200",
      },
    ],
    dtsn18: [
      {
        id: 4,
        name: "Accessory 1",
        image:
          "https://bachlongmobile.com/media//catalog/product/1/_/1_55_3_2_1_1.jpg",
        price: "$30",
      },
      {
        id: 5,
        name: "Accessory 2",
        image:
          "	https://bachlongmobile.com/media//catalog/product/r/e/reno12f.jpg",
        price: "$50",
      },
      {
        id: 6,
        name: "Accessory 3",
        image:
          "https://bachlongmobile.com/media//catalog/product/i/p/ipad-2021-hero-silver-wifi-select_1_.png",
        price: "$120",
      },
      {
        id: 3,
        name: "Product 3",
        image:
          "https://bachlongmobile.com/media//catalog/product/i/p/ipad-2021-hero-silver-wifi-select_1_.png",
        price: "$200",
      },
      {
        id: 4,
        name: "Accessory 1",
        image:
          "https://bachlongmobile.com/media//catalog/product/1/_/1_55_3_2_1_1.jpg",
        price: "$30",
      },
      {
        id: 5,
        name: "Accessory 2",
        image:
          "	https://bachlongmobile.com/media//catalog/product/r/e/reno12f.jpg",
        price: "$50",
      },
      {
        id: 6,
        name: "Accessory 3",
        image:
          "https://bachlongmobile.com/media//catalog/product/i/p/ipad-2021-hero-silver-wifi-select_1_.png",
        price: "$120",
      },
      {
        id: 3,
        name: "Product 3",
        image:
          "https://bachlongmobile.com/media//catalog/product/i/p/ipad-2021-hero-silver-wifi-select_1_.png",
        price: "$200",
      },
      {
        id: 4,
        name: "Accessory 1",
        image:
          "https://bachlongmobile.com/media//catalog/product/1/_/1_55_3_2_1_1.jpg",
        price: "$30",
      },
      {
        id: 5,
        name: "Accessory 2",
        image:
          "	https://bachlongmobile.com/media//catalog/product/r/e/reno12f.jpg",
        price: "$50",
      },
      {
        id: 6,
        name: "Accessory 3",
        image:
          "https://bachlongmobile.com/media//catalog/product/i/p/ipad-2021-hero-silver-wifi-select_1_.png",
        price: "$120",
      },
      {
        id: 3,
        name: "Product 3",
        image:
          "https://bachlongmobile.com/media//catalog/product/i/p/ipad-2021-hero-silver-wifi-select_1_.png",
        price: "$200",
      },
      {
        id: 4,
        name: "Accessory 1",
        image:
          "https://bachlongmobile.com/media//catalog/product/1/_/1_55_3_2_1_1.jpg",
        price: "$30",
      },
      {
        id: 5,
        name: "Accessory 2",
        image:
          "	https://bachlongmobile.com/media//catalog/product/r/e/reno12f.jpg",
        price: "$50",
      },
      {
        id: 6,
        name: "Accessory 3",
        image:
          "https://bachlongmobile.com/media//catalog/product/i/p/ipad-2021-hero-silver-wifi-select_1_.png",
        price: "$120",
      },
      {
        id: 3,
        name: "Product 3",
        image:
          "https://bachlongmobile.com/media//catalog/product/i/p/ipad-2021-hero-silver-wifi-select_1_.png",
        price: "$200",
      },
    ],
  };

  const products = activeTab === "1" ? productData.dtsn18 : productData.pksn18;

  return (
    <div>
    <div className={`list-sp-hot`}>
      <div className="info-list-sp-chamday">
        <div className="title-list-sp-hot">
          <img
            src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/150824-TITLE-18-SP-SAP-SAN-1200.jpg"
            style={{ width: "100%" }}
            alt="Title"
          />
        </div>
        <Tabs
          className="tab-controllers"
          activeKey={activeTab}
          onChange={setActiveTab}
          animated
        >
          <TabPane className="tab" tab="18 DEAL SHOCK MÁY" key="1">
            <ProductCarousel products={products} />
          </TabPane>
          <TabPane className="tab" tab="18 DEAL SHOCK PHỤ KIỆN" key="2">
            <ProductCarousel products={products} />
          </TabPane>
        </Tabs>
      </div>
    </div>
    </div>
  );
};

const ProductCarousel = ({ products }: any) => {
  return (
    <Carousel arrows draggable autoplay rows={2} slidesPerRow={4}>
      {products.map((product: any) => (
        <div key={product.id} style={{ display: 'flex', justifyContent: 'center', padding: '20px' }} className="product-slide">
          <ProductCard product={product} />
        </div>
      ))}
    </Carousel>
  );
};

const ProductCard = (props:any) => {
    const {product} = props;
    return (
      <Card
        style={{
          border: '2px solid red',
          borderRadius: '10px',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            right: '10px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Tag color="red" style={{ fontWeight: 'bold' }}>Trả trước: 589.000đ</Tag>
          <Tag color="red" style={{ fontWeight: 'bold' }}>Trả góp 0%</Tag>
        </div>
  
        <div style={{ marginTop: '40px' }}>
          <Image
            src="/path/to/your/image.png" // Thay thế bằng đường dẫn đến hình ảnh
            alt="Product Image"
            width={150}
            height={150}
          />
        </div>
  
        <h3>iPad 10.2 Gen 9 2021 64GB Wifi - Chính Hãng Apple VN</h3>
        
        <div style={{ margin: '10px 0' }}>
          <span style={{ color: 'red', fontSize: '24px', fontWeight: 'bold' }}>5.890.000đ</span>
          <div style={{ textDecoration: 'line-through', color: '#999', fontSize: '14px' }}>
            9.990.000đ
          </div>
        </div>
  
        <Tag color="red" style={{ fontWeight: 'bold', fontSize: '18px' }}>-42%</Tag>
  
        <Button
          type="primary"
          style={{
            backgroundColor: 'red',
            borderColor: 'red',
            color: '#fff',
            marginTop: '10px',
          }}
        >
          MUA NGAY
        </Button>
      </Card>
    );
};

export default HotProductsList;
