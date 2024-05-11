import { FC, useCallback } from "react";
import classes from "./ArticleListFilter.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "shared/lib/hooks/useAppSelector/useAppSelector";
import { ArticleSortField, ArticleView } from "entities/Article";
import { ArticleViewSelector } from "features/ArticleViewSelector";
import { articlesPageActions } from "pages/ArticlesPage/model/slice/articlesPageSlice";
import { Input } from "shared/ui/Input/Input";
import { Card } from "shared/ui/Card/Card";
import SearchSvg from "shared/assets/icons/Search.svg";
import { ArticleSortSelector } from "features/ArticleSortSelector";
import { SortOrder } from "shared/types";
import {
  fetchArticleList,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageView,
} from "pages/ArticlesPage";
import { useDebonce } from "shared/lib/hooks/useDebounce/useDebounce";
import { ArticleTypeTabs } from "features/ArticleTypeTabs";

interface ArticleListFilterProps {
  className?: string;
}

export const ArticleListFilter: FC<ArticleListFilterProps> = ({
  className,
}) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation("article");
  const view = useAppSelector(getArticlesPageView);
  const order = useAppSelector(getArticlesPageOrder);
  const sort = useAppSelector(getArticlesPageSort);
  const search = useAppSelector(getArticlesPageSearch);

  const filterData = useCallback(() => {
    dispatch(fetchArticleList({ replace: true }));
  }, [dispatch]);

  const debounceFetchData = useDebonce(filterData, 500);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  const onChangeOrder = useCallback(
    (order: SortOrder) => {
      dispatch(articlesPageActions.setOrder(order));
      dispatch(articlesPageActions.setPage(1));
      debounceFetchData();
    },
    [dispatch, debounceFetchData]
  );

  const onChangeSort = useCallback(
    (sort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(sort));
      dispatch(articlesPageActions.setPage(1));
      debounceFetchData();
    },
    [dispatch, debounceFetchData]
  );

  const onChangeSearch = useCallback(
    (search: string) => {
      dispatch(articlesPageActions.setSearch(search));
      dispatch(articlesPageActions.setPage(1));
      debounceFetchData();
    },
    [dispatch, debounceFetchData]
  );

  return (
    <div className={classNames(classes.ArticleListFilter, {}, [className])}>
      <Card>
        <Input
          placeholder={t("Поиск")}
          Svg={SearchSvg}
          value={search}
          onChange={onChangeSearch}
        />
      </Card>

      <div className={classes.filterWrapper}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <ArticleTypeTabs filterData={debounceFetchData} />
    </div>
  );
};
