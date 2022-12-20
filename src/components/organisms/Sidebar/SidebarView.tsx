import MenuItem from "components/molecules/MenuItem";
import styled from "styled-components/macro";

const Container = styled.aside<Pick<SidebarViewProps, "sidebarCollapsed">>`
  width: ${({ sidebarCollapsed }) => (sidebarCollapsed ? "55px" : "256px")};
  min-width: ${({ sidebarCollapsed }) => (sidebarCollapsed ? "55px" : "256px")};
  display: flex;
  flex-direction: column;

  background-color: #d0d1d6;

  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  overflow-x: hidden;
  overflow-y: auto;
`;

const MenuListArea = styled.ul`
  display: flex;
  flex-direction: column;

  cursor: pointer;
`;

const SubMenuListArea = styled(MenuListArea)<{
  menuExpanded: boolean;
  subMenuCount: number;
}>`
  height: ${({ menuExpanded, subMenuCount, theme: { menuItem } }) =>
    menuExpanded
      ? `${(menuItem.height + menuItem.verticalMargin * 2) * subMenuCount}px`
      : 0};

  opacity: ${({ menuExpanded }) => (menuExpanded ? 1 : 0)};

  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const CollapseIconArea = styled.div`
  height: inherit;
  width: 55px;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px;

  cursor: pointer;
`;

const CollapseIcon = styled.div<Pick<SidebarViewProps, "sidebarCollapsed">>`
  font-size: 24px;
  transform: ${({ sidebarCollapsed }) => sidebarCollapsed && "rotate(180deg)"};
  transition: transform 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

interface SidebarViewProps {
  sidebarCollapsed: boolean;

  isRootMenuActive: (path: string) => boolean;
  isOpenedCategory: (path: string) => boolean;
  isSelectedCategory: (path: string) => boolean;
  isOpenedMenuList: (path: string) => boolean;
  isSelectedMenu: (path: string) => boolean;

  onClickCategory: (path: string) => () => void;
  onClickMenu: (values: { path: string; parent: string }) => () => void;
  onClickCollapseSidebar: () => void;
}

const menuList = [
  {
    path: "category1",
    name: "Category 1",
    icon: <span>🙂</span>,
    children: [
      {
        path: "menu1",
        name: "Menu 1",
        depth: 1,
        parent: "category1",
      },
    ],
  },
  {
    path: "category2",
    name: "Category 2",
    icon: <span>🙂</span>,
    children: [
      {
        path: "menu2",
        name: "Menu 2",
        depth: 1,
        parent: "category2",
      },
    ],
  },
  {
    path: "category3",
    name: "Category 3",
    icon: <span>🙂</span>,
    children: [
      {
        path: "menu3",
        name: "Menu 3",
        depth: 1,
        parent: "category3",
      },
      {
        path: "menu4",
        name: "Menu 4",
        depth: 1,
        parent: "category3",
      },
    ],
  },
];

const SidebarView = ({
  sidebarCollapsed,
  isRootMenuActive,
  isOpenedCategory,
  isSelectedCategory,
  isOpenedMenuList,
  isSelectedMenu,
  onClickCategory,
  onClickMenu,
  onClickCollapseSidebar,
}: SidebarViewProps) => {
  return (
    <Container sidebarCollapsed={sidebarCollapsed}>
      <MainArea>
        <MenuListArea>
          {menuList.map(({ path, name, icon, children }) => (
            <MenuItem
              key={path}
              isRoot={true}
              isRootMenuActive={isRootMenuActive(path)}
              isSelectedMenu={isSelectedCategory(path)}
              icon={icon}
              name={name}
              sidbarCollapsed={sidebarCollapsed}
              isOpenedCategory={isOpenedCategory(path)}
              onClickMenu={onClickCategory(path)}
            >
              <SubMenuListArea
                menuExpanded={isOpenedMenuList(path)}
                subMenuCount={children.length}
              >
                {isOpenedMenuList(path) &&
                  children.map(({ path, name, depth, parent }) => (
                    <MenuItem
                      key={path}
                      isSelectedMenu={isSelectedMenu(path)}
                      name={name}
                      depth={depth}
                      onClickMenu={onClickMenu({ path, parent })}
                    />
                  ))}
              </SubMenuListArea>
            </MenuItem>
          ))}
        </MenuListArea>
      </MainArea>
    </Container>
  );
};

export default SidebarView;
