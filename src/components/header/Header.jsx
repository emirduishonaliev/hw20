import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { OrderBasket } from "./OrderBusket";
import { useSelector } from "react-redux";

export const Header = ({ onToggle }) => {
  const [bump, setBump] = useState("");

  const { basketData } = useSelector((state) => state.basket);

  useEffect(() => {
    setBump("bump");

    const animationTimePlus = setTimeout(() => {
      setBump("");
    }, 300);

    return () => {
      clearTimeout(animationTimePlus);
    };
  }, [basketData]);

  return (
    <header>
      <Container>
        <h1>React Meals</h1>
        <OrderBasket className={bump} onToggle={onToggle}>
          Your Cart
        </OrderBasket>
      </Container>
    </header>
  );
};

const Container = styled.div`
  width: 100%;
  height: 101px;
  display: flex;
  align-items: center;
  padding: 0 120px;
  justify-content: space-between;
  background: #8a2b06;
  color: white;
  position: fixed;
  z-index: 998;

  .bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;
