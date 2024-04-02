import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about.svg";
import MainIcon from "shared/assets/icons/main.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";

export interface SidebatItemType {
  path: string;
  text: string;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebatItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: "Главная",
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: "О сайте",
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: "Профиль",
    authOnly: true,
  },
];
