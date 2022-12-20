import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    exampleItem: ExampleItemType;
  }
}

const exampleItem = {
  height: 40,
};

type ExampleItemType = typeof exampleItem;

const theme: DefaultTheme = { exampleItem };

export default theme;
