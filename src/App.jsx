import "./styles/main.scss";
import Navbar from "./Components/Navbar/Navbar";
import RoutesPage from "./RoutesPage";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from '@clerk/clerk-react'

const App = () => {

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

  return (
    <div className="appContainer">
      <BrowserRouter>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <Navbar />
        <RoutesPage />
        </ClerkProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
