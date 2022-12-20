import styled from "styled-components/macro";

import Wireframe from "components/atoms/Wireframe";
import Sidebar from "components/organisms/Sidebar";
import HomeLayout from "components/templates/HomeLayout";

const Container = styled.section`
  height: inherit;
  display: flex;
  flex-grow: 1;

  overflow: hidden;
`;

const HomeView = () => {
  return (
    <HomeLayout>
      <HomeLayout.HeaderArea>Header</HomeLayout.HeaderArea>
      <HomeLayout.MainArea>
        <Container>
          <Sidebar />
          <Wireframe>Hello World 🎉</Wireframe>
        </Container>
      </HomeLayout.MainArea>
    </HomeLayout>
  );
};

export default HomeView;
