import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LeftAndRight = css`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Top = styled("div")`
  label: Top;
  width: 100%;
  height: 50px;
  background-color: white;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  font-family: "Josefin Sans", sans-serif;
  z-index: 999;
`;
export const TopLeft = styled("div")`
  label: TopLeft;
  ${LeftAndRight}
`;
export const TopIcon = styled(FontAwesomeIcon)`
  label: TopIcon;
  font-size: 20px;
  margin-right: 10px;
  color: #444;
  cursor: pointer;
`;
export const TopCenter = styled("div")`
  label: TopCenter;
  flex: 6;
`;
export const TopList = styled("ul")`
  label: TopList;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;
export const TopListItem = styled("li")`
  label: TopListItem;
  margin-right: 20px;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
`;
export const TopRight = styled("div")`
  label: TopRight;
  ${LeftAndRight}
`;
export const TopImg = styled("img")`
  label: TopImg;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
export const TopSearchIcon = styled(FontAwesomeIcon)`
  label: TopSearchIcon;
  font-size: 18px;
  color: #666;
  cursor: pointer;
  margin-left: 15px;
`;
