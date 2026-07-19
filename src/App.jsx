import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import PrivacyPolicy from "./pages/app/GeoMark/PrivacyPolicy";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          {/* Use path="/" instead of index at the root level */}
          <Route path="/" element={<Home />} />
          
          {/* Use lowercase URLs for best web practices */}
          <Route path="/geomark/privacypolicy" element={<PrivacyPolicy />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
