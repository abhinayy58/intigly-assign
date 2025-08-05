import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Collection from "./pages/Collection";
import Main from "./pages/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const location = useLocation();
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const saved = localStorage.getItem("collection");
      setCollection(saved ? JSON.parse(saved) : []);
    }, 500); // optional delay for smoother transition

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="w-full h-screen  bg-gray-200'">
      <Header collectionCount={collection.length} />
      <Routes>
        <Route
          path="/"
          element={
            <Main collection={collection} setCollection={setCollection} />
          }
        />
        <Route
          path="/collection"
          element={
            <Collection collection={collection} setCollection={setCollection} />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}
