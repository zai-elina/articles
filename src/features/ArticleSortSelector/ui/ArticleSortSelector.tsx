import { FC,  useMemo } from "react";
import classes from "./ArticleSortSelector.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Select, SelectOption } from "shared/ui/Select/Select";
import { useTranslation } from "react-i18next";
import { ArticleSortField } from "entities/Article";
import { SortOrder } from "shared/types";

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder?: (newOrder: SortOrder) => void;
  onChangeSort?: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = (props) => {
  const { className, sort, order, onChangeOrder, onChangeSort } = props;
  const { t } = useTranslation("article");

  const optionsSortValue = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: "asc",
        content: t("возрастанию"),
      },
      {
        value: "desc",
        content: t("убыванию"),
      },
    ],
    [t]
  );

  const optionsSort = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t("по созданию"),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t("по просмотрам"),
      },
      {
        value: ArticleSortField.TITLE,
        content: t("по названию"),
      },
    ],
    [t]
  );

  return (
    <div className={classNames(classes.ArticleSortSelector, {}, [className])}>
      <Select<ArticleSortField>
        label={t("Сортировка")}
        options={optionsSort}
        value={sort}
        onChange={onChangeSort}
      />
      <Select<SortOrder>
        label={t("по")}
        options={optionsSortValue}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  );
};
