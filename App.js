import "react-native-gesture-handler";
import Navigation from "./navigation/Navigation";
import AppNavContainer from "./navigation/AppNavContainer";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import GlobalProvider from "./context/Provider";

export default function App() {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;

  // return <Navigation />;

  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  );
}
