import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import DownloadApp from "./components/Sections/DownloadApp/DownloadApp";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Outlet />
      <DownloadApp />
      <Footer />
    </div>
  );
};

export default App;
