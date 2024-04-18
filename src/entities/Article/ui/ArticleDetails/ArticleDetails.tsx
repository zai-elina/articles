import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { memo, useCallback } from "react";
import classes from "./ArticleDetails.module.scss";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { useAppSelector } from "shared/lib/hooks/useAppSelector/useAppSelector";
import { getArticleDetailsIsLoading
} from "../../model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading";
import { getArticleDetailsData
} from "../../model/selectors/getArticleDetailsData/getArticleDetailsData";
import { getArticleDetailsError
} from "../../model/selectors/getArticleDetailsError/getArticleDetailsError";
import { Text, TextAlign, TextSize, TextTheme } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Avatar } from "shared/ui/Avatar/Avatar";
import EyeIcon from "shared/assets/icons/eye.svg";
import Calendar from "shared/assets/icons/calendar.svg";
import { Icon } from "shared/ui/Icon/Icon";
import { ArticleBlock, ArticleBlockType } from "../../model/types/atricle";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { ArticleImageBlockComponent 
} from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation("article");
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getArticleDetailsIsLoading);
  const article = useAppSelector(getArticleDetailsData);
  const error = useAppSelector(getArticleDetailsError);
  let content;

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.CODE:
      return (
        <ArticleCodeBlockComponent
          key={block.id}
          className={classes.block}
          block={block}
        />
      );
    case ArticleBlockType.TEXT:
      return (
        <ArticleTextBlockComponent
          key={block.id}
          className={classes.block}
          block={block}
        />
      );
    case ArticleBlockType.IMAGE:
      return (
        <ArticleImageBlockComponent
          key={block.id}
          className={classes.block}
          block={block}
        />
      );
    default:
      return null;
    }
  }, []);

  useInitialEffect(() => {
    dispatch(fetchArticleById(id));
  });

  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={classes.avatar}
          width={200}
          height={200}
          border={"50%"}
        />
        <Skeleton className={classes.title} width={300} height={24} />
        <Skeleton className={classes.skeleton} width={600} height={24} />
        <Skeleton className={classes.skeleton} width={"100%"} height={200} />
        <Skeleton className={classes.skeleton} width={"100%"} height={200} />
      </>
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
    content = (
      <>
        <div className={classes.avatarWrapper}>
          {article?.img && (
            <Avatar size={200} src={article?.img} className={classes.avatar} />
          )}
        </div>
        <Text
          className={classes.title}
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <div className={classes.articleInfo}>
          <Icon Svg={EyeIcon} />
          <Text text={String(article?.views)} />
        </div>
        <div className={classes.articleInfo}>
          <Icon Svg={Calendar} />
          <Text text={article?.createdAt} />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    );
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
