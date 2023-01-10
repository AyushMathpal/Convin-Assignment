import React, { useContext, useState } from "react";
import { Button, Card } from "antd";
import styles from "./CardComponents.module.css";
import AddCard from "./AddCard";
import VideoPlayer from "./VideoPlayer";
import MoveCard from "./MoveCard";
import { Context } from "../App";
import Cards from "./Cards";

const CardComponents = () => {
  const { val, options, setVal ,tag,setTag} = useContext(Context);
  
  const [index, setIndex] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideo, setIsVideo] = useState(false);
  const [isMoveOpen, setIsMoveOpen] = useState(false);
  const [vidlink, setVidlink] = useState("");
  const showVideo = (e, index) => {
    setVidlink(val[index].link);
    console.log(vidlink);
    setIsVideo(true);
    const temp=[...val];
    temp[index].click+=1;
    setVal(temp);
    console.log(temp[index].click);

  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const showMove = (e, index) => {
    setIsMoveOpen(true);
    setIndex(index);
  };

  const handleSubmit = () => {
    setIsModalOpen(false);
    setIsMoveOpen(false);
  };
  const Remove = (e, inde) => {
    const data = [...val];
    data.splice(inde, 1);
    console.log(inde);
    setVal(data);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsVideo(false);
    setIsMoveOpen(false);
  };

  return (
    <div className={styles.page}>
      <Card>
        <div className={styles.heading}>Video Player</div>
        <Button className={styles.add} type="primary" onClick={showModal}>
          Add Card
        </Button>
        <div className={styles.tags}>
          <button
            className={`${styles.tag} ${tag === "All" ? styles.active : null}`}
            onClick={() => setTag("All")}
          >
            All
          </button>
          {options.map((obj, index) => {
            return index === 0 ? null : (
              <button
                className={`${styles.tag} ${
                  tag === obj ? styles.active : null
                }`}
                onClick={() => setTag(obj)}
              >
                {obj}
              </button>
            );
          })}
        </div>
        <AddCard
          isModalOpen={isModalOpen}
          handleCancel={handleCancel}
          setIsModalOpen={setIsModalOpen}
        />
        <MoveCard
          isMoveOpen={isMoveOpen}
          handleCancel={handleCancel}
          handleSubmit={handleSubmit}
          setIsMoveOpen={setIsMoveOpen}
          index={index}
        />
        <VideoPlayer
          isVideo={isVideo}
          handleCancel={handleCancel}
          vidlink={vidlink}
        />
        <Cards
          tag={tag}
          showVideo={showVideo}
          showMove={showMove}
          Remove={Remove}
        />
      </Card>
    </div>
  );
};

export default CardComponents;
