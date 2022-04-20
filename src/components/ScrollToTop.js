import React, { useEffect, useState } from "react";
import {AiOutlineArrowUp} from 'react-icons/ai';
import styled from 'styled-components';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <Button onClick={scrollToTop}>
          <AiOutlineArrowUp size={35} color={'#fff'}/>
        </Button>
      )}
    </div>
  );
}

const Button = styled.button`
    cursor: pointer;
    border-radius: 50%;
    border: none;
    padding: 10px;
    background-color: #F9CB17;
    margin-left: 50px;
    bottom: 70px;
`