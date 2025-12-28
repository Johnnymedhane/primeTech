import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.appContainer}>
      <Header />
      
      <div className={styles.mainContent}>
        <main className={styles.main}>
          <div className={styles.contentWrapper}>
            <Outlet />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default AppLayout;
