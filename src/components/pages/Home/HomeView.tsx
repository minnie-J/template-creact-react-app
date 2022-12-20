import HomeLayout from "components/templates/HomeLayout";
import styled from "styled-components";

const Container = styled.section`
  height: inherit;
  display: flex;
  flex-grow: 1;

  overflow: hidden;
`;

const DemoText = styled.div`
  font-size: 3rem;
`;

const HomeView = () => {
  return (
    <HomeLayout>
      <HomeLayout.HeaderArea>Header</HomeLayout.HeaderArea>
      <HomeLayout.MainArea>
        <Container>
          <DemoText>Hello World 🎉</DemoText>
        </Container>
      </HomeLayout.MainArea>
    </HomeLayout>
  );
};

export default HomeView;
