import React from "react";
import { IoClose } from "react-icons/io5";
type BasicModalProps = {
  title: string;
  body?: string;
};

export const BasicModal: React.FC<BasicModalProps> = ({
  title = "Basic Modal Title",
  body = "Modal body goes here",
}) => {
  return (
    <div style={{border:"1x solid red"}}>
      <div>
        <p>
        <IoClose size={30}/>
        </p>
      </div>
      <div>
        <p>{title}</p>
      </div>
      <div>
        <p>{body}</p>
      </div>
      <div>
        <button>Close</button>
      </div>
    </div>
  );
};
