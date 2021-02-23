import React from "react";

function Search(props) {
  return (
    <div>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={props.value}
          name="search"
          onChange={props.handleChange}
        />
        <button
          className="btn btn-success my-2 my-sm-0"
          type="submit"
          onClick={props.handleSubmit}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
