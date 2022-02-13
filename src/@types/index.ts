import {
  ReactNode,
} from "react";
import { IconType } from "react-icons/lib";


export type Props = { children: ReactNode };
export type RefDiv = HTMLDivElement;
export type DrawerRoute = {
  to: string,
  title: string,
  icon: IconType | any,
};