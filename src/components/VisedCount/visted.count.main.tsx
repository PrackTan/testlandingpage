import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import styled from "styled-components"; // Import styled-components
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

// Định nghĩa một component sử dụng styled-components
const VisitorCountStyled = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #4caf50;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  letter-spacing: 2px;
  text-align: center;
  margin: 20px 0;
  transition: all 0.3s ease;
`;

const onComplete = () => {
  console.log("Completed! 👏");
};

const onStart = () => {
  console.log("Started! 💨");
};

function Visitors() {
  const [visitors, setVisitors] = useState(3000); // Mặc định là 3000
  const [isClient, setIsClient] = useState(false); // Biến để kiểm tra client-side

  // Chỉ chạy sau khi component đã được mount trên client
  useEffect(() => {
    setIsClient(true); // Xác định đã có client-side
  }, []);

  // Sử dụng useEffect để chỉ truy cập localStorage khi chạy trên client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedVisitors = localStorage.getItem("visitorCount");
      if (savedVisitors) {
        setVisitors(parseInt(savedVisitors, 10));
      }
    }
  }, []); // Chạy một lần khi component được mount

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("visitorCount", visitors.toString());
    }
  }, [visitors]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitors((prevVisitors) => prevVisitors + 1);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!isClient) {
    return null; // Không render gì cho đến khi component đã có trên client
  }

  return (
    <VisitorCountStyled>
      <CountUp
        start={visitors}
        end={visitors}
        duration={1}
        useEasing={true}
        separator=","
        onEnd={onComplete}
        onStart={onStart}
      />
      <PeopleAltIcon fontSize="large" sx={{ marginLeft: 2 }} />
    </VisitorCountStyled>
  );
}

export default Visitors;
