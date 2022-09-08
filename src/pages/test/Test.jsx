import { useState } from "react";
import GetDataForm from "./GetdataForm";
import TestForm from "./TestForm";

const Test = () => {
  const [showAvg, setShow] = useState(false);
  const [averages, setAverage] = useState([]);
  const [data, setResults] = useState('');
  const [actionId, setActionId] = useState();
  const [protectionGoodsId, setGoodsId] = useState();

  //if(averages.status===200) console.log(actionId, ' ', protectionGoodsId);

  return (
    <main role="main" className="dashboard flex">
      <div className="border-bottom mt-4 ">
        <h2 className="h2 mb-3">Evaluation</h2>
      </div>
      <div>
        <div className="form-group">
          {showAvg ? (
            <>
              <div>
                <p>some text</p>
                <TestForm allAvgs={averages} action_id={actionId} protection_good={protectionGoodsId}/>
              </div>
            </>
          ) : (
            <GetDataForm getGoodsId={setGoodsId} setRes={setResults} showFunc={setShow} getAverages={setAverage} getActionId={setActionId}/>
          )}
        </div>
      </div>
    </main>
    /*
  
      <>
        {show ? ( 
          <>
            <div>
              no
              {Object.keys(data1).map((key, index) => {
                return (
                  <div key={index}>
                    <h2>
                        {index}
                    </h2>

                    <hr />
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          ""
        )}
        </>*/
  );
};

export default Test;
