import React, { useEffect } from "react";
import styled from "styled-components";
import { MealItem } from "./meal-item/MealItem";
import { useDispatch, useSelector } from "react-redux";
import { getMeals } from "../../store/meals/mealsThunk";
import { Snackbar } from "../UI/Snackbar";
import { snackbarAction } from "../../store/snackbar";

export const Meals = React.memo(() => {
  const dispatch = useDispatch();
  const { meals, isLoading } = useSelector((state) => state.meals);
  const { open } = useSelector((state) => state.snackbar);

  const onCloseHandler = () => {
    dispatch(snackbarAction.closeSnackbar());
  };

  useEffect(() => {
    dispatch(getMeals());
  }, [dispatch]);

  return (
    <Container>
      {open && <Snackbar handleClose={onCloseHandler} />}
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
