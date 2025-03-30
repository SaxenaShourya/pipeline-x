import { Routes, Route } from "react-router";
import Container from "./components/container";
import Dashboard from "./components/dashboard";
import Products from "./components/products";

const App = () => {
  return (
    <Container>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </Container>
  );
};

export default App;
