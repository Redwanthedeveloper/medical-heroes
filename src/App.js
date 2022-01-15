import { useEffect } from "react";
import HomeScreen from "./screens/HomeScreen";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <HomeScreen />
    </>
  );
}

export default App;
