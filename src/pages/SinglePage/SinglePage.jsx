import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import SinglePost from "../../components/SinglePost/SinglePost";
import { SinglePageWrapper } from "./style";

export default function SinglePage() {
  return (
    <>
      <SinglePageWrapper>
        <SinglePost />
        <Sidebar />
      </SinglePageWrapper>
    </>
  );
}
