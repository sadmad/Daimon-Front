import { useState } from "react";
import "./TrainForm.css";

const TrainhtmlForm = () => {
  const [isTrained, setIsTrained] = useState(false);
  const [model, setModel] = useState("");
  const [field, setField] = useState("");
  const [goods, setGoods] = useState("");
  const user_id = 2;
  const token = sessionStorage.getItem("tok");

  const trainHandler = async (event) => {
    event.preventDefault();
    setIsTrained(true);

    const formData = new FormData();

    formData.append("model_id", model);
    formData.append("action_id", field);
    formData.append("protection_goods_id", goods);
    formData.append("user_id", user_id);
    formData.append("token", token);

    let result = await fetch("http://localhost:5000/dss/training", {
      method: "POST",
      mode: "cors",
      body: formData,
    });
    result = await result.json();
    setIsTrained(false);
    console.log(result);
  };
  return (
    <form onSubmit={trainHandler}>
      <div className="model">
        <h3>Please select the model on which you want to train the data</h3>
        <div>
          <input
            type="radio"
            className="machin-model"
            onChange={(e) => {
              setModel(1);
            }}
            name="drone"
            value="1"
          />
          <label htmlFor="model">Neural Network(scikit learn)</label>
        </div>
        <div>
          <input
            type="radio"
            className="machin-model"
            onChange={(e) => {
              setModel(2);
            }}
            name="drone"
            value="2"
          />
          <label htmlFor="model">RANDOM htmlForEST(scikit learn)</label>
        </div>
        <div>
          <input
            type="radio"
            className="machin-model"
            onChange={(e) => {
              setModel(3);
            }}
            name="drone"
            value="3"
          />
          <label htmlFor="model">LINEAR REGRESSION(scikit learn)</label>
        </div>
        <div>
          <input
            type="radio"
            className="machin-model"
            onChange={(e) => {
              setModel(5);
            }}
            name="drone"
            value="5"
          />
          <label htmlFor="model">DEEP NEURAL NETWORK(Keras+tensorflow)</label>
        </div>
        <div>
          <input
            type="radio"
            className="machin-model"
            onChange={(e) => {
              setModel(6);
            }}
            name="drone"
            value="6"
          />
          <label htmlFor="model">Decision Tree(scikit learn)</label>
        </div>
      </div>

      <div className="field">
        <h3>Choose The Amucad field(action)</h3>
        <div>
          <input
            type="radio"
            className="amucad-field"
            onChange={(e) => {
              setField(1);
            }}
            name="field"
            value="1"
          />
          <label htmlFor="amucad">Explosion</label>
        </div>
        <div>
          <input
            type="radio"
            className="amucad-field"
            onChange={(e) => {
              setField(2);
            }}
            name="field"
            value="2"
          />
          <label htmlFor="amucad">Corrosion</label>
        </div>
      </div>
      <div className="goods">
        <h3>Protection Goods</h3>
        <div>
          <input
            type="radio"
            id="NN"
            name="goods"
            onChange={(e) => {
              setGoods(1);
            }}
            value="1"
          />
          <label htmlFor="goods">Shiping</label>
        </div>
        <div>
          <input
            type="radio"
            id="RF"
            name="goods"
            onChange={(e) => {
              setGoods(2);
            }}
            value="2"
          />
          <label htmlFor="goods">Flaura/Fauna</label>
        </div>
        <div>
          <input
            type="radio"
            id="RF"
            name="goods"
            onChange={(e) => {
              setGoods(3);
            }}
            value="3"
          />
          <label htmlFor="goods">Drivers</label>
        </div>
        <div>
          <input
            type="radio"
            id="RF"
            name="goods"
            onChange={(e) => {
              setGoods(4);
            }}
            value="4"
          />
          <label htmlFor="goods">Tourism</label>
        </div>
        <div>
          <input
            type="radio"
            id="RF"
            name="goods"
            onChange={(e) => {
              setGoods(5);
            }}
            value="5"
          />
          <label htmlFor="goods">Fishers</label>
        </div>
      </div>
      <div>
        <input
          className="train-submit"
          type="submit"
          name="Train"
          value="Train"
        />
      </div>
    </form>
  );
};

export default TrainhtmlForm;
