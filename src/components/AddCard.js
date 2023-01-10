import { Button, Input, Modal } from "antd";
import React, { useContext } from "react";
import { Context } from "../App";
import styles from "./CardComponents.module.css";
const AddCard = ({ isModalOpen, setIsModalOpen, handleCancel }) => {
  const { val, setVal } = useContext(Context);
  const { options, setOptions, data, setData } = useContext(Context);

  const handleChange = (e) => {
    const { name, value } = e.target;
    

    setData({ ...data, [name]: value });
    console.log(data.bucket);
  };
  const handleSubmit = (e) => {
    if(data.bucket==="other"){
      data.bucket=data.addbucket;
    setOptions([...options, data.addbucket]);}
    setVal([...val, data]);
    console.log(data.addbucket);
    setIsModalOpen(false);
    console.log(options);
  };
  return (
    <>
      <Modal
        title="Add Card"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmit}>
            Submit
          </Button>,
        ]}
      >
        <form action="#">
          <div>
            <label htmlFor="name">Name: </label>
            <Input
              
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="link">Video Link: </label>
            <Input
              required
              type="text"
              id="link"
              name="link"
              value={data.link}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="bucket">Category: </label>
            <select
              className={styles.dropdown}
              name="bucket"
              id="bucket"
              onChange={(e) => handleChange(e)}
            >
              {options.map((item, index) => {
                return (
                  <>
                    <option value={item} key={index}>
                      {item}
                    </option>
                  </>
                );
              })}
            </select>
            {data.bucket === "other" ? (
              <div>
                <label htmlFor="addbucket">Add Bucket: </label>
                <Input
                  required
                  type="text"
                  id="addbucket"
                  name="addbucket"
                  value={data.addbucket}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            ) : null}
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddCard;
