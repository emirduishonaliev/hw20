import React, { useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../assets/icons/Group.svg";
import { useDispatch, useSelector } from "react-redux";
import { getBasket } from "../../store/basket/basket";

export const OrderBasket = ({ children, onToggle, className }) => {
  const { basketData } = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBasket());
  }, [dispatch]);

  const orderAmount = basketData?.reduce(
    (prev, current) => prev + current.amount,
    0
  );

  return (
    <Button onClick={onToggle} className={className}>
      <BasketIcon /> <OrderBasketTitile>{children}</OrderBasketTitile>
      <OrderBasketCount>{orderAmount}</OrderBasketCount>
    </Button>
  );
};

const Button = styled.button`
  width: 249px;
  height: 59px;
  background: #5a1f08;
  border-radius: 30px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: #4d1601;
  }

  border: none;
  cursor: pointer;
`;

const OrderBasketTitile = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin: 0 24px 0 13px;
`;

const OrderBasketCount = styled.span`
  background: #8a2b06;
  border-radius: 30px;
  padding: 4px 13px;
  color: white;
`;
