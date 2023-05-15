import { IonApp } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AppTabs from "./AppTabs";
import { AuthContext } from "./auth";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <IonApp>
      <AuthContext.Provider value={{ isLoggedIn }}>
        <IonReactRouter>
          <Switch>
            <Route exact path="/login">
              <LoginPage onLogin={() => setIsLoggedIn(true)} />
            </Route>
            <Route path="/my">
              <AppTabs />
            </Route>
            <Redirect exact path="/" to="/my/entries" />
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>
  );
};

export default App;
