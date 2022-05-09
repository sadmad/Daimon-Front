import TrainForm from "./TrainForm";
import "./Train.css";

const Train = () => {
  return (
    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h2 className="h2">Train The Data</h2>
      </div>
      <div>
        <TrainForm />
      </div>
    </main>
  );
};

export default Train;
