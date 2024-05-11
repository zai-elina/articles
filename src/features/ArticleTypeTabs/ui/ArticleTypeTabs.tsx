import { FC, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ArticleType } from "entities/Article/model/types/atricle";
import Tabs, { TabItem } from "shared/ui/Tabs/Tabs";
import { useAppSelector } from "shared/lib/hooks/useAppSelector/useAppSelector";
import { getArticlesPageType } from "pages/ArticlesPage";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { articlesPageActions } from "pages/ArticlesPage/model/slice/articlesPageSlice";

interface ArticleTypeTabsProps {
  filterData: () => void;
}

export const ArticleTypeTabs: FC<ArticleTypeTabsProps> = ({ filterData }) => {
  const { t } = useTranslation("article");
  const type = useAppSelector(getArticlesPageType);
  const dispatch = useAppDispatch();

  const tabs = useMemo<TabItem[]>(
    () => [
      { value: ArticleType.ALL, content: t("Все") },
      { value: ArticleType.IT, content: t("IT") },
      { value: ArticleType.SCIENCE, content: t("Наука") },
      { value: ArticleType.MEDICINE, content: t("Медицина") },
      { value: ArticleType.BEAUTY, content: t("Красота") },
      { value: ArticleType.ECONOMIC, content: t("Экономика") },
    ],
    [t]
  );

  const onChangeTab = useCallback(
    (tab: TabItem) => {
      dispatch(articlesPageActions.setType(tab.value as ArticleType));
      filterData();
    },
    [filterData, dispatch]
  );

  return <Tabs tabs={tabs} value={type} onTabClick={onChangeTab} />;
};
