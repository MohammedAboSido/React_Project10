import {
  faFacebookSquare,
  faInstagramSquare,
  faPinterestSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {
  Top,
  TopCenter,
  TopIcon,
  TopImg,
  TopLeft,
  TopList,
  TopListItem,
  TopRight,
  TopSearchIcon,
} from "./style";

export default function Topbar() {
  return (
    <>
      <Top>
        <TopLeft>
          <TopIcon icon={faFacebookSquare} />
          <TopIcon icon={faInstagramSquare} />
          <TopIcon icon={faTwitterSquare} />
          <TopIcon icon={faPinterestSquare} />
        </TopLeft>
        <TopCenter>
          <TopList>
            <TopListItem>HOME</TopListItem>
            <TopListItem>ABOUT</TopListItem>
            <TopListItem>CONTACT</TopListItem>
            <TopListItem>WRITE</TopListItem>
            <TopListItem>LOGOUT</TopListItem>
          </TopList>
        </TopCenter>
        <TopRight>
          <TopImg
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <TopSearchIcon icon={faSearch} />
        </TopRight>
      </Top>
    </>
  );
}
