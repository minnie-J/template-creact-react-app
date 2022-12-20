import { Children } from "react";
import styled from "styled-components";

import Wireframe from "components/atoms/Wireframe";

const Container = styled.section`
  height: inherit;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const HeaderArea = styled.header`
  height: 50px;
  min-height: 50px;
  width: inherit;
`;

const MainArea = styled.main`
  height: inherit;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  overflow: hidden;
`;

const HomeLayout = ({ children }: { children: Array<JSX.Element> }) => {
  const [Header, Main] = Children.toArray(children);

  return (
    <Container>
      <HeaderArea>{Header}</HeaderArea>
      <MainArea>{Main}</MainArea>
    </Container>
  );
};

HomeLayout.HeaderArea = Wireframe;
HomeLayout.MainArea = Wireframe;

export default HomeLayout;
