import {
  faFacebookSquare,
  faInstagramSquare,
  faPinterestSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import {
  SidebarIcon,
  SidebarImg,
  SidebarItem,
  SidebarList,
  SidebarListItem,
  SidebarP,
  SidebarTitle,
  SidebarWrapper,
  SiderbarSocial,
} from "./style";

import sidebarImg from "../../assets/images/sidebarImg.jpg";

export default function Sidebar() {
  return (
    <>
      <SidebarWrapper>
        <SidebarItem>
          <SidebarTitle>ABOUT ME</SidebarTitle>
          <SidebarImg src={sidebarImg} alt="" />
          <SidebarP>
            Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
            amet ex esse.Sunt eu ut nostrud id quis proident.
          </SidebarP>
        </SidebarItem>
        <SidebarItem>
          <SidebarTitle>CATEGORIES</SidebarTitle>
          <SidebarList>
            <SidebarListItem>Life</SidebarListItem>
            <SidebarListItem>Music</SidebarListItem>
            <SidebarListItem>Style</SidebarListItem>
            <SidebarListItem>Sport</SidebarListItem>
            <SidebarListItem>Tech</SidebarListItem>
            <SidebarListItem>Cinema</SidebarListItem>
          </SidebarList>
        </SidebarItem>

        <SidebarItem>
          <SidebarTitle>FOLLOW US</SidebarTitle>
          <SiderbarSocial>
            <SidebarIcon icon={faFacebookSquare} />
            <SidebarIcon icon={faInstagramSquare} />
            <SidebarIcon icon={faTwitterSquare} />
            <SidebarIcon icon={faPinterestSquare} />
          </SiderbarSocial>
        </SidebarItem>
      </SidebarWrapper>
    </>
  );
}
