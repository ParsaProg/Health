import { ReactNode } from "react";

type navItems = {
  title: string;
  icon: ReactNode;
  route: string;
  special: boolean;
};

export interface MobileMenu {
  isShowDialog: boolean;
  navItems: Array<navItems>;
}
