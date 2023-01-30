import {
  faFacebookSquare,
  faInstagramSquare,
  faPinterestSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
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

export default function Topbar({ user, setUser }) {
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
            <TopListItem>
              <Link className="link" to="/">
                HOME
              </Link>
            </TopListItem>
            <TopListItem>
              <Link className="link" to="/">
                ABOUT
              </Link>
            </TopListItem>
            <TopListItem>
              <Link className="link" to="/">
                CONTACT
              </Link>
            </TopListItem>
            <TopListItem>
              <Link className="link" to="/write">
                WRITE
              </Link>
            </TopListItem>
            <TopListItem>{user && "LOGOUT"}</TopListItem>
          </TopList>
        </TopCenter>
        <TopRight>
          {user ? (
            <TopImg
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          ) : (
            <TopList>
              <TopListItem>
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </TopListItem>
              <TopListItem>
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </TopListItem>
            </TopList>
          )}

          <TopSearchIcon icon={faSearch} />
        </TopRight>
      </Top>
    </>
  );
}
