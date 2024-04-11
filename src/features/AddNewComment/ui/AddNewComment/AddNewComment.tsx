import { FC, useCallback } from "react";
import classes from "./AddNewComment.module.scss";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Input } from "shared/ui/Input/Input";
import { Button } from "shared/ui/Button/Button";
import { useAppSelector } from "shared/lib/hooks/useAppSelector/useAppSelector";
import { 
  getAddNewCommentText 
} from "../../model/selectors/getAddNewCommentText/getAddNewCommentText";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  addNewCommentActions,
  addNewCommentReducer,
} from "../../model/slice/addNewCommentSlice";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface AddNewCommentProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addNewComment: addNewCommentReducer,
};

const AddNewComment: FC<AddNewCommentProps> = ({
  className,
  onSendComment,
}) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const text = useAppSelector(getAddNewCommentText);

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addNewCommentActions.setText(value));
    },
    [dispatch]
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text ?? "");
    onCommentTextChange("");
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <div className={classNames(classes.AddNewComment, {}, [className])}>
        <Input
          placeholder={t("Введите текст комментария")}
          value={text}
          onChange={onCommentTextChange}
          className={classes.Input}
        />
        <Button onClick={onSendHandler}>{t("Отправить")}</Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default AddNewComment;
