import { ExampleTypes } from "types";
import { apiUtil } from "utils";

export const exampleItem = (parentCategory: string) => {
  const path = `${parentCategory}/exampleItem`;

  const listExampleItem = async () => {
    return await apiUtil.handler<ExampleTypes.Main>({ url: path });
  };

  return {
    listExampleItem,
  };
};
