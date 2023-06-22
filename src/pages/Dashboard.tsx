import React from "react";
import { IPage } from "typesSrc/pages";
import styles from "../styles/dashboard.module.css";
import Input from "../components/Input";

const Dashboard: React.FC<IPage> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Input type="text" placeholder="test" />
        <Input type="text" placeholder="test" />
        <Input type="text" placeholder="test" />
        <Input type="text" placeholder="test" />
      </div>
    </div>
  );
};

export default Dashboard;
