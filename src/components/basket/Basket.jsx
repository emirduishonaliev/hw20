import React, { useEffect } from "react";
import { Modal } from "../UI/Modal";
import { BasketItem } from "./BasketItem";
import { TotalAmount } from "./TotalAmount";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getBasket } from "../../store/basket/basketThunk";

export const Basket = ({ onToggle }) => {
  const { basketData, isLoading } = useSelector((state) => state.basket);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBasket());
  }, [dispatch]);

  const getTotalPrice = () => {
    return basketData.reduce(
      (sum, { price, amount }) => (sum += price * amount),
      0
    );
  };

  return (
    <Modal onClick={onToggle}>
      <Content>
        {isLoading && "Loading..."}
        {basketData?.length ? (
          <FixedWithContainer>
            {basketData?.map((item) => {
              return (
                <BasketItem
                  // incrementAmount={() => incrementAmount(item._id, item.amount)}
                  // decrementAmount={() => decrementAmount(item._id, item.amount)}
                  key={item._id}
                  title={item.title}
                  price={item.price}
                  amount={item.amount}
                  id={item._id}
                />
              );
            })}
          </FixedWithContainer>
        ) : null}

        <TotalAmount totalPrice={getTotalPrice()} onClose={onToggle} />
      </Content>
    </Modal>
  );
};

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
`;

const FixedWithContainer = styled.div`
  max-height: 240px;
  overflow-y: auto;
`;
