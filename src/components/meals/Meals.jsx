import React, { useEffect } from "react";
import styled from "styled-components";
import { MealItem } from "./meal-item/MealItem";
import { useDispatch, useSelector } from "react-redux";
import { getMeals } from "../../store/meals/meals";

export const Meals = React.memo(() => {
  const dispatch = useDispatch();

  const { meals, isLoading } = useSelector((state) => state.meals);

  useEffect(() => {
    dispatch(getMeals());
  }, [dispatch]);

  return (
    <Container>
      {isLoading && "Loading..."}
      {meals?.map((meal) => (
        <MealItem key={meal._id} meal={meal} />
      ))}
    </Container>
  );
});

const Container = styled.div`
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  border-radius: 16px;
  padding: 40px;
`;
