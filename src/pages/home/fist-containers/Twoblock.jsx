const Twoblock = () => {
  return (
    <>
      <div className="row align-items-md-stretch mt-4">
        <div className="col-md-6 ">
          <div className="h-100 p-5 text-white bg-dark rounded-3 border border-1">
            <h2>Change the background</h2>
            <p>
              Swap the background-color utility and add a `.text-*` color
              utility to mix up the jumbotron look. Then, mix and match with
              additional component themes and more.
            </p>
            <button className="btn btn-outline-light" type="button">
              Example button
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 bg-light border rounded-3 text-dark">
            <h2>Add borders</h2>
            <p>
              Or, keep it light and add a border for some added definition to
              the boundaries of your content. Be sure to look under the hood at
              the source HTML here as we've adjusted the alignment and sizing of
              both column's content for equal-height.
            </p>
            <button className="btn btn-outline-secondary" type="button">
              Example button
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Twoblock;
