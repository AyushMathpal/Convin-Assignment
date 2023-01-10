import React, { useContext } from "react";
import {Card } from "antd";
import styles from "../../CardComponents.module.css";
import { Context } from "../../../App";

const History = () => {
    const { val } = useContext(Context);
    const gridStyle = {
        textAlign: "center",
      };
  return (
    
        <div >
      {val
        .filter((e) => {
          return e.click>=1?e:null;
        })
        .map((item, index) => {
          return (
            <div key={index} className={`${styles.single_cards}`}>
              <Card style={gridStyle} hoverable >
                <div className={styles.history}
                >
                  <img alt="example" src="./logo192.png" />
                  <div className={styles.history_header}>Title
                  <div className={styles.name}>{item.name} </div>
                  </div>
                  <div className={styles.history_header}>Times Played
                  <div className={`${styles.tag} ${styles.bucket} ${styles.history_bucket} `}>
                    {item.click}
                  </div>
                  </div>
                  
                  <div className={styles.history_header}>
                  <div>Video Link</div>
                  <a className={`${styles.tag} ${styles.bucket} ${styles.history_link}`} href={item.link}>
                    {item.link}
                  </a>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
    </div>
    
  )
}

export default History