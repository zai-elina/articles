/* eslint-disable react/display-name */
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { Story } from "@storybook/react";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { profileReducer } from "features/EditableProfileCard";
import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { addNewCommentReducer } from "features/AddNewComment/model/slice/addNewCommentSlice";
import { 
  articleDetailsCommentsReducer 
} from "pages/ArticleDetailsPage/ui/model/slices/articleDetailsCommentsSlice";

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
  addNewComment: addNewCommentReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
    (Story: Story) => {
      return (
        <StoreProvider
          initialState={state}
          asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
        >
          <Story />
        </StoreProvider>
      );
    };
