import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    exampleItem: ExampleItemType;
    menuItem: typeof menuItem;
  }
}

const exampleItem = {
  height: 40,
};

type ExampleItemType = typeof exampleItem;

const menuItem = {
  height: 40,
  verticalMargin: 4,
  rootIconSize: 50,
};

const theme: DefaultTheme = { exampleItem, menuItem };

export default theme;
