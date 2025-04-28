import { FC, ReactNode } from "react";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import ReduxProvider from "../../provider/ReduxProvider";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <ReduxProvider>
      <div className={scss.Layout}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </ReduxProvider>
  );
};

export default Layout;
