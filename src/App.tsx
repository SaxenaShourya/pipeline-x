import { Routes, Route } from "react-router";
import Container from "./components/container";
import Dashboard from "./components/dashboard";

const App = () => {
  return (
    <Container>
      <Routes>
        <Route index element={<Dashboard />} />
      </Routes>
    </Container>
  );
};

export default App;
