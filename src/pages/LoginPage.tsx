import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Redirect } from "react-router";
import { useAuth } from "../auth";

interface IProps {
  onLogin: () => void;
}

const LoginPage: React.FC<IProps> = ({ onLogin }) => {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) {
    return <Redirect to="/my/entries" />;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="block" onClick={onLogin}>
          Log In
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
