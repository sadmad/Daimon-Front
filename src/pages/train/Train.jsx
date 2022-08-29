import TrainForm from "./TrainForm";
import "./Train.css";
import React, { Component }  from 'react';
import { width } from "@mui/system";

const Train = () => {
  return (
    <main role="main" className="dashboard flex">
      <div className="border-bottom mt-4 ">
        <h2 className="h2 mb-3">Train The Data</h2>
      </div>
      <div>
        <TrainForm />
      </div>
    </main>
  );
};

export default Train;
