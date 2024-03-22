import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { counterActions } from "../modal/slice/counterSlice";
import { getCounterValue } from "../modal/selectors/getCounterValue/getCounterValue";
import { useTranslation } from "react-i18next";

export const Counter: FC = () => {
  const counterValue = useSelector(getCounterValue);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button onClick={increment} data-testid="increment-button">
        {t('увеличить')}
      </Button>
      <Button onClick={decrement} data-testid="decrement-button">
        {t('уменьшить')}
      </Button>
    </div>
  );
};