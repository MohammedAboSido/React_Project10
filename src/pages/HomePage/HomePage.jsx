import React from "react";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";
import { HomeWrapper } from "./style";

export default function HomePage() {
  return (
    <>
      <Header />
      <HomeWrapper>
        <Posts />
        <Sidebar />
      </HomeWrapper>
    </>
  );
}
