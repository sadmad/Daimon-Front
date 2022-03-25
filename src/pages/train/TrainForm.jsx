import "./TrainForm.css";

const TrainForm = () => {
  console.log("hello");

  return (
    <form>
      <div>
          <h3>Please select the model on which you want to train the data</h3>
        <div>
          <input type="radio" id="NN" name="drone" value="1" />
          <label for="huey">Neural Network(scikit learn)</label>
        </div>
        <div>
          <input type="radio" id="RF" name="drone" value="2" />
          <label for="huey">RANDOM FOREST(scikit learn)</label>
        </div>
        <div>
          <input type="radio" id="LR" name="drone" value="3" />
          <label for="huey">LINEAR REGRESSION(scikit learn)</label>
        </div>
        <div>
          <input type="radio" id="NN" name="drone" value="5" />
          <label for="huey">DEEP NEURAL NETWORK(Keras+tensorflow)</label>
        </div>
        <div>
          <input type="radio" id="NN" name="drone" value="6" />
          <label for="huey">Decision Tree(scikit learn)</label>
        </div>
      </div>
      <div>
          <h3>Choose The Amucad field(action)</h3>
        <div>
          <input type="radio" id="NN" name="drone" value="1" />
          <label for="huey">Explosion</label>
        </div>
        <div>
          <input type="radio" id="RF" name="drone" value="2" />
          <label for="huey">Corrosion</label>
        </div>
      </div>
      <div>
          <h3>Protection Goods</h3>
        <div>
          <input type="radio" id="NN" name="drone" value="1" />
          <label for="huey">Shiping</label>
        </div>
        <div>
          <input type="radio" id="RF" name="drone" value="2" />
          <label for="huey">Flaura/Fauna</label>
        </div>
        <div>
          <input type="radio" id="RF" name="drone" value="3" />
          <label for="huey">Drivers</label>
        </div>
        <div>
          <input type="radio" id="RF" name="drone" value="4" />
          <label for="huey">Tourism</label>
        </div>
        <div>
          <input type="radio" id="RF" name="drone" value="5" />
          <label for="huey">Fishers</label>
        </div>
      </div>
      <div>
          <input type='submit' placeholder="Train" name="Train"/>
      </div>
    </form>
  );
};

export default TrainForm;
