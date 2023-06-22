import React, { useContext, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import News from "./pages/News";
import Button from "./components/Button";
import { IWrapper } from "./typesSrc/pages";
import { AuthContext } from "./providers/AuthProvider";
import { ThemeContext } from "./providers/ThemeProvider";

const Content: React.FC<IWrapper> = ({ setPage, page }) => {
  const { isLogin } = useContext(AuthContext);
  const { secondaryColor, direction } = useContext(ThemeContext);
  const renderPage = () => {
    switch (page) {
      case "dashboard":
        return <Dashboard setPage={setPage} />;
      case "setting":
        return <Settings setPage={setPage} />;
      case "news":
        return <News setPage={setPage} />;
      default:
        return <Dashboard setPage={setPage} />;
    }
  };

  useEffect(() => {
    if (window) {
      const elem = document.getElementById("root");
      if (elem) {
        elem.style.background = secondaryColor!;
      }
    }
  }, [secondaryColor]);

  return (
    <div style={{ background: secondaryColor, direction }}>
      <div>
        <Button
          onClick={() => {
            setPage("dashboard");
            localStorage.setItem("page", "dashboard");
          }}
        >
          Dashboard
        </Button>
        <Button
          onClick={() => {
            setPage("setting");
            localStorage.setItem("page", "setting");
          }}
        >
          Setting
        </Button>
        {isLogin ? (
          <Button
            onClick={() => {
              setPage("news");
              localStorage.setItem("page", "news");
            }}
          >
            news
          </Button>
        ) : null}
      </div>
      {renderPage()}
    </div>
  );
};

export default Content;
