import { Button, Modal } from "antd";
import React, { useContext } from "react";
import { Context } from "../App";
import styles from "./CardComponents.module.css"

const MoveCard = ({ isMoveOpen,setIsMoveOpen, handleCancel,index }) => {
    
  const{options,data,setData,val,setVal}=useContext(Context);
  const handleSubmit=(e)=>{
    let temp=[...val];
    temp[index].bucket=data.bucket;
    console.log(temp[index]);
    setVal(temp);
    setIsMoveOpen(false);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <>
      <Modal
        title="Move Card"
        open={isMoveOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" onClick={(e)=>handleSubmit(e)}>
            Submit
          </Button>,
        ]}
      >
        <form action="">
          
          <div>
            <label htmlFor="bucket">Category: </label>
            <select className={styles.dropdown} name="bucket" id="bucket" onChange={(e) => handleChange(e)} required>
              
              {options.map((item, index) => {
                return (index===0?null:
                  <>
                    <option value={item}>{item}</option>
                  </>
                );
              })}
            </select>
          </div>
        </form>
        
      </Modal>
    </>
  );
};

export default MoveCard;
