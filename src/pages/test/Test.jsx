import { useState } from "react";

const Test = () => {
  const [data, setGetingMean] = useState(false);
  const [action, setAction] = useState(1);
  const [goods, setGoods] = useState(1);
  const result = [];
  const data1 = [];
  const [show, setShow] = useState(false);
  const getMeanHandler = async (event) => {
    event.preventDefault();
    setGetingMean(true);

    const formData = new FormData();
    
    formData.append("action_id", action);
    formData.append("protection_goods_id", goods);

    let result =  await fetch("http://localhost:5000/dss/getAverages", {
        method: 'POST',
        mode: "cors",
        body: formData,
    });
    result = await result.json();
    setGetingMean(false);
    const data = JSON.parse(result);
    const data1 = data.results[0]
    console.log(data1)

    setShow(true);

  };
  const currencies = {
    AUD: 'Australian Dollars',
    CHF: 'Swiss Franc',
    INR: 'Indian Rupee'
  }
  console.log(currencies);
  return (
    <main role="main" className="dashboard flex">
      <div className="border-bottom mt-4 ">
        <h2 className="h2 mb-3">Evaluation</h2>
      </div>
      <div>
        <div className="form-group">
          <form onSubmit={getMeanHandler}>
            <div className="field">
              <h4 className="h4 dark-grey-text mt-5 mb-4">
                Choose The Amucad field(action)
              </h4>
              <section className="border p-3">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    onChange={(e) => {
                      setAction(1);
                    }}
                    name="field"
                    value="1"
                  />
                  <label className="form-check-lable" htmlFor="amucad">
                    Explosion
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    onChange={(e) => {
                      setAction(2);
                    }}
                    name="field"
                    value="2"
                  />
                  <label className="form-check-lable" htmlFor="amucad">
                    Corrosion
                  </label>
                </div>
              </section>
            </div>
            <div className="goods">
              <h4 className="h4 dark-grey-text mt-5 mb-4">Protection Goods</h4>
              <section className="border p-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="NN"
                    name="goods"
                    onChange={(e) => {
                      setGoods(1);
                    }}
                    value="1"
                  />
                  <label className="form-check-lable" htmlFor="goods">
                    Shiping
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="RF"
                    name="goods"
                    onChange={(e) => {
                      setGoods(2);
                    }}
                    value="2"
                  />
                  <label className="form-check-lable" htmlFor="goods">
                    Flaura/Fauna
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="RF"
                    name="goods"
                    onChange={(e) => {
                      setGoods(3);
                    }}
                    value="3"
                  />
                  <label className="form-check-lable" htmlFor="goods">
                    Drivers
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="RF"
                    name="goods"
                    onChange={(e) => {
                      setGoods(4);
                    }}
                    value="4"
                  />
                  <label className="form-check-lable" htmlFor="goods">
                    Tourism
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="RF"
                    name="goods"
                    onChange={(e) => {
                      setGoods(5);
                    }}
                    value="5"
                  />
                  <label className="form-check-lable" htmlFor="goods">
                    Fishers
                  </label>
                </div>
              </section>
            </div>

            <div className="form-check">
              <button
                className="btn btn-primary"
                type="submit"
                name="Train"
                value="Train"
              >
                Get
              </button>
            </div>
          </form>
        </div>
      </div>
      <>
      {show? ( 
        <>
        <div> 
    {
      data1.map((item, index) => {
        return ( <div>
            { item.map((c, i) => <div>
            <h3>{c.max}</h3>
            <h3>{c.min}</h3>
            </div>)}
          </div>
        )
      })

    }
    no
    </div>
      </>
      ) : ('')}
      </>
    </main>
  );
};

export default Test;
