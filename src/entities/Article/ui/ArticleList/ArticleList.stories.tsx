import React from "react";
import { Meta, Story } from "@storybook/react";
import { ArticleList } from "./ArticleList";
import {
  Article,
  ArticleBlockType,
  ArticleType,
  ArticleView,
} from "entities/Article/model/types/atricle";

const article: Article = {
  id: "1",
  title: "Typescript Generics",
  subtitle: "Всё про Generics",
  img: "https://nicholasmordecai.co.uk/wp-content/uploads/2020/10/typescript-generics-types.jpg",
  createdAt: "04.04.2024",
  views: 777,
  type: [ArticleType.IT],
  user: {
    id: "1",
    username: "admin",
    avatar: "https://bgstaff.ru/upload/bgstaff/pages/tekhnik.jpg",
  },
  blocks: [
    {
      id: "1",
      type: ArticleBlockType.TEXT,
      title: "Заголовок этого блока",
      paragraphs: [
        "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
        "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
        "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
      ],
    },
    {
      id: "4",
      type: ArticleBlockType.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
    {
      id: "2",
      type: ArticleBlockType.IMAGE,
      src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
      title: "Рисунок 1 - скриншот сайта",
    },
  ],
};

export default {
  title: "entities/Article/ArticleList",
  component: ArticleList,
  argTypes: {
    background: { control: "color" },
  },
} as Meta<typeof ArticleList>;

type ArticleListStory = Story<typeof ArticleList>;

const Template: ArticleListStory = (args) => <ArticleList {...args} />;

export const Square = Template.bind({});
Square.args = {
  articles: new Array(12).fill(0).map((item, index) => ({
    ...article,
    id: String(index),
  })),
  isLoading: false,
  view: ArticleView.SQUARE,
};

export const Rectangle = Template.bind({});
Rectangle.args = {
  articles: new Array(3).fill(0).map((item, index) => ({
    ...article,
    id: String(index),
  })),
  isLoading: false,
  view: ArticleView.RECTANGLE,
};

export const SquareIsLoading = Template.bind({});
SquareIsLoading.args = {
  articles: [],
  isLoading: true,
  view: ArticleView.SQUARE,
};

export const RectangleIsLoading = Template.bind({});
RectangleIsLoading.args = {
  articles: [],
  isLoading: true,
  view: ArticleView.RECTANGLE,
};
