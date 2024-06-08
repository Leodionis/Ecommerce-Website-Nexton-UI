import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomepageDesktop from "./pages/HomepageDesktop";
import RegisterPageDesktop from "./pages/RegisterPageDesktop";
import LoginPageDesktop from "./pages/LoginPageDesktop";
import CheckoutPageDesktop from "./pages/CheckoutPageDesktop";
import ProductPageDesktop from "./pages/ProductPageDesktop";
import ShopPageDesktop from "./pages/ShopPageDesktop";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/register-page-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/login-page-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/checkout-page-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/product-page-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/shop-page-desktop":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomepageDesktop />} />
      <Route path="/register-page-desktop" element={<RegisterPageDesktop />} />
      <Route path="/login-page-desktop" element={<LoginPageDesktop />} />
      <Route path="/checkout-page-desktop" element={<CheckoutPageDesktop />} />
      <Route path="/product-page-desktop" element={<ProductPageDesktop />} />
      <Route path="/shop-page-desktop" element={<ShopPageDesktop />} />
    </Routes>
  );
}
export default App;
