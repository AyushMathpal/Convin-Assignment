import { Button, Modal } from "antd";
import React from "react";

const VideoPlayer = ({ isVideo, handleCancel,vidlink }) => {

  return (
    <>
      <Modal
        title="Video Player"
        open={isVideo}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
        ]}
      >
        
          <iframe
          style={{width:"100%",height:"100%"}}
            src={vidlink ||null}
            title="YouTube video"
            allowFullScreen
          ></iframe>
        
      </Modal>
    </>
  );
};

export default VideoPlayer;
