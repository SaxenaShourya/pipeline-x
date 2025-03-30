import { Routes, Route } from "react-router";
import Container from "./components/container";
import Dashboard from "./components/dashboard";
import Products from "./components/products";
import Analytics from "./components/analytics";
import NotFound from "./components/not-found";

const App = () => {
  return (
    <Container>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="analytics" element={<Analytics />} />

        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};

export default App;
