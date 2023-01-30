import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Resigter";
import SettingsPage from "../pages/SettingsPage/SettingsPage";
import SinglePage from "../pages/SinglePage/SinglePage";
import WritePage from "../pages/WritePage/WritePage";
import Topbar from "./Topbar/Topbar";

export default function Home() {
  const [user, setUser] = useState(false);
  return (
    <>
      <Topbar user={user} setUser={setUser} />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/home" element={user ? <HomePage /> : <Register />} />
        <Route path="/about" element={user ? <HomePage /> : <Register />} />
        <Route path="/contact" element={user ? <HomePage /> : <Register />} />
        <Route path="/write" element={user ? <WritePage /> : <Register />} />
        <Route
          path="/settings"
          element={user ? <SettingsPage /> : <Register />}
        />
        <Route path="/post/:postId" element={<SinglePage />} />
        <Route path="/register" element={user ? <HomePage /> : <Register />} />
        <Route path="/login" element={user ? <HomePage /> : <Login />} />
      </Routes>
    </>
  );
}
