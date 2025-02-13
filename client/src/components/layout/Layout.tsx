import React from "react";
import { Layout as AntLayout } from "antd";
import styles from "./layout.module.css";
import { Header } from "../header";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.main}>
      <Header />
      <AntLayout.Content style={{ height: "100%"}}>
        {children}
      </AntLayout.Content>
    </div>
  );
};
