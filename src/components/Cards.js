import React, { useContext } from "react";
import { Button, Card } from "antd";
import styles from "./CardComponents.module.css";
import { Context } from "../App";

const Cards = ({ tag, showVideo, showMove, Remove }) => {
  const { val } = useContext(Context);

  const gridStyle = {
    textAlign: "center",
  };

  return (
    <div className={styles.card}>
      {val
        .filter((e) => {
          return tag === "All" ? e : e.bucket === tag;
        })
        .map((item, index) => {
          return (
            <div key={index}>
              <Card style={gridStyle} hoverable>
                <div
                  onClick={(e) => {
                    showVideo(e, index);
                  }}
                >
                  <img alt="example" src="./logo192.png" />
                  <div className={styles.name}>{item.name} </div>
                  <div className={`${styles.tag} ${styles.bucket}`}>
                    {item.bucket}
                  </div>
                </div>

                <div className={styles.card_buttons}>
                  <Button
                    className={styles.move}
                    type="primary"
                    onClick={(e) => showMove(e, index)}
                  >
                    Move Card
                  </Button>
                  <Button
                    className={styles.move}
                    type="primary"
                    onClick={(e) => Remove(e, index)}
                  >
                    Remove Card
                  </Button>
                </div>
              </Card>
            </div>
          );
        })}
    </div>
  );
};

export default Cards;
