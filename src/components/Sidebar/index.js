import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';
const Sidebar = ({isOpen, toggle }) => {
  return(
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
              <CloseIcon/>
          </Icon>
          <SidebarWrapper>
              <SidebarMenu>
                  <SidebarLink to="" onClick={toggle}> Home </SidebarLink>
                  <SidebarLink to="" onClick={toggle}> Search </SidebarLink>
                  <SidebarLink to="" onClick={toggle}> School </SidebarLink>
                  <SidebarLink to="" onClick={toggle}> Github </SidebarLink>
              </SidebarMenu>
              <SideBtnWrap>
                <SidebarRoute to="/bmpage" onClick={toggle}> Benchmark </SidebarRoute>
              </SideBtnWrap>
          </SidebarWrapper>
      </SidebarContainer>
  )
};

export default Sidebar;
