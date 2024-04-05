import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { memo, useEffect } from "react";
import classes from "./ArticleDetails.module.scss";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { useAppSelector } from "shared/lib/hooks/useAppSelector/useAppSelector";
import { 
  getArticleDetailsIsLoading 
} from "../../model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading";
import { 
  getArticleDetailsData 
} from "../../model/selectors/getArticleDetailsData/getArticleDetailsData";
import { 
  getArticleDetailsError 
} from "../../model/selectors/getArticleDetailsError/getArticleDetailsError";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getArticleDetailsIsLoading);
  const data = useAppSelector(getArticleDetailsData);
  const error = useAppSelector(getArticleDetailsError);
  let content;

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  if (isLoading) {
    content = (
      <div>
        <Skeleton className={classes.avatar} width={200} height={200} border={"50%"} />
        <Skeleton className={classes.title} width={300} height={24} />
        <Skeleton className={classes.skeleton} width={600} height={24} />
        <Skeleton className={classes.skeleton}width={"100%"} height={200} />
        <Skeleton className={classes.skeleton} width={"100%"} height={200} />
      </div>
    );
  } else if (error) {
    content = (
      <Text
        text={t("Произошла ошибка при загрузке статьи")}
        theme={TextTheme.ERROR}
        align={TextAlign.CENTER}
      />
    );
  } else {
    content = <div>Content</div>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(classes.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});

ArticleDetails.displayName = "ArticleDetails";
