import { FC, memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import classes from "./ArticleDetailsPage.module.scss";
import { useTranslation } from "react-i18next";
import { ArticleDetails } from "entities/Article";
import { useNavigate, useParams } from "react-router-dom";
import { Text, TextSize } from "shared/ui/Text/Text";
import { CommentList } from "entities/Comment";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppSelector } from "shared/lib/hooks/useAppSelector/useAppSelector";
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from "../../model/slices/articleDetailsCommentsSlice";
import { getArticleDetailsCommentsIsLoading } from "../../model/selectors/getArticleDetailsCommentsIsLoading/getArticleDetailsCommentsIsLoading";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { AddNewComment } from "features/AddNewComment";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { Button } from "shared/ui/Button/Button";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Layout } from "shared/ui/Layout/Layout";
import {
  ArticleRecommendationsList,
  articleRecommendationsReducer,
  fetchArticleRecommendations,
  getArticleRecommendations,
  getArticleRecommendationsError,
  getArticleRecommendationsIsLoading,
} from "features/ArticleRecommendationsList";

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
  articleRecommendations: articleRecommendationsReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation("article");
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const comments = useAppSelector(getArticleComments.selectAll);
  const isLoading = useAppSelector(getArticleDetailsCommentsIsLoading);
  const recommendations = useAppSelector(getArticleRecommendations.selectAll);
  const recommendationsIsLoading = useAppSelector(
    getArticleRecommendationsIsLoading
  );
  const recommendationsError = useAppSelector(getArticleRecommendationsError);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  if (!id) {
    return (
      <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
        {t("Статья не найдена")}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Layout
        className={classNames(classes.ArticleDetailsPage, {}, [className])}
      >
        <Button onClick={onBackToList}>{t("Назад к списку")}</Button>
        <ArticleDetails id={id} />
        <ArticleRecommendationsList
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          error={recommendationsError}
        />
        <Text
          title={t("Комментарии")}
          className={classes.commentsTitle}
          size={TextSize.L}
        />
        <AddNewComment onSendComment={onSendComment} />
        <CommentList isLoading={isLoading} comments={comments} />
      </Layout>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
