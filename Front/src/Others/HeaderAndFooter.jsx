import { Outlet, useNavigation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";

function HeaderAndFooter() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      {isLoading && <Loader />}

      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default HeaderAndFooter;
