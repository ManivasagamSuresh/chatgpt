import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import DashBoard from "./Pages/DashBoard/DashBoard";
import ChatPage from "./Pages/ChatPage/ChatPage";
import ProtectedLayout from "./ProtectedLayout";
import SignInPage from "./Pages/SignIn/SignIn";
import SignUpPage from "./Pages/SignUp/SignUp";

function RoutesPage() {
  return (
    <div className="mainContainer">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in/*" element={<SignInPage />} />
      <Route path="/sign-up/*" element={<SignUpPage />} />
      <Route path={"/dashboard"} element={<ProtectedLayout />}>
        <Route path="" element={<DashBoard />} />
        <Route path="chat/:id" element={<ChatPage />} />
      </Route>
    </Routes>
    </div>
  );
}

export default RoutesPage;
