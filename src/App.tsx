import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./page/MainPage";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
};

export default App;
