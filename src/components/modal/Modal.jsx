import React, { useState } from "react";
import { Modal as AntdModal } from "antd";
import Spiner from "../spiner/Spiner";
import "./modal.scss";

const Modal = ({ open, title = "", content = <></>, close, spiner }) => {
  return (
    <AntdModal
      title={title}
      className={"__modal-container"}
      open={open}
      onOk={close}
      //footer={null}
      onCancel={close}
    >
      {content}
      {spiner && <Spiner />}
    </AntdModal>
  );
};

export default Modal;
