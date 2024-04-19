import { FC, memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { ArticleList, ArticleView } from "entities/Article";
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from "../../model/slice/articlesPageSlice";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppSelector } from "shared/lib/hooks/useAppSelector/useAppSelector";
import { getArticlesPageIsLoading
} from "../../model/selectors/getArticlesPageLoading/getArticlesPageIsLoading";
import { getArticlesPageError
} from "../../model/selectors/getArticlesPageError/getArticlesPageError";
import { getArticlesPageView } from "../../model/selectors/getArticlesPageView/getArticlesPageView";
import { TextTheme, Text } from "shared/ui/Text/Text";
import { ArticleViewSelector } from "features/ArticleViewSelector";
import { Layout } from "shared/ui/Layout/Layout";
import { fetchNextArticlesPage
} from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const { t } = useTranslation("article");
  const dispatch = useAppDispatch();
  const articles = useAppSelector(getArticles.selectAll);
  const isLoading = useAppSelector(getArticlesPageIsLoading);
  const error = useAppSelector(getArticlesPageError);
  const view = useAppSelector(getArticlesPageView);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage());
  });

  if (error) {
    <Layout onScrollEnd={onLoadNextPart}>
      <ArticleViewSelector view={view} onViewClick={onChangeView} />
      <div className={classNames("", {}, [className])}>
        <Text text={t("Статьи не найдены")} theme={TextTheme.ERROR} />
      </div>
    </Layout>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Layout onScrollEnd={onLoadNextPart}>
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <div className={classNames("", {}, [className])}>
          <ArticleList articles={articles} isLoading={isLoading} view={view} />
        </div>
      </Layout>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
