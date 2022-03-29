import "./TrainForm.css";

const TrainForm = () => {
  console.log("hello");

  return (
    <form>
      <div>
          <h3>Please select the model on which you want to train the data</h3>
          <select for='model' name='model'>

          <option className="machin-model" name="drone" value="1">Neural Network(scikit learn)</option>

          <option className="machin-model" name="drone" value="2">RANDOM FOREST(scikit learn)</option>

          <option className="machin-model" name="drone" value="3">LINEAR REGRESSION(scikit learn)</option>

          <option className="machin-model" name="drone" value="5">DEEP NEURAL NETWORK(Keras+tensorflow)</option>

          <option className="machin-model" name="drone" value="6">Decision Tree(scikit learn)</option>
        </select>
      </div>
      
      <div>
          <h3>Choose The Amucad field(action)</h3>
        <div>
          <input type="radio" className="amucad-filed" name="field" value="1" />
          <label for="amucad">Explosion</label>
        </div>
        <div>
          <input type="radio" className="amucad-filed" name="field" value="2" />
          <label for="amucad">Corrosion</label>
        </div>
      </div>
      <div>
          <h3>Protection Goods</h3>
        <div>
          <input type="radio" id="NN" name="goods" value="1" />
          <label for="goods">Shiping</label>
        </div>
        <div>
          <input type="radio" id="RF" name="goods" value="2" />
          <label for="goods">Flaura/Fauna</label>
        </div>
        <div>
          <input type="radio" id="RF" name="goods" value="3" />
          <label for="goods">Drivers</label>
        </div>
        <div>
          <input type="radio" id="RF" name="goods" value="4" />
          <label for="goods">Tourism</label>
        </div>
        <div>
          <input type="radio" id="RF" name="goods" value="5" />
          <label for="goods">Fishers</label>
        </div>
      </div>
      <div>
          <input className="train-submit" type='submit' name="Train" value='Train'/>
      </div>
    </form>
  );
};

export default TrainForm;
