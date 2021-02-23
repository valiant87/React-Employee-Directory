import React from "react";
import Tbody from "./Tbody";

function Table(props) {
  const sortedResults = props.results;
  const simplePropertyRetriever = function (obj) {
    return obj.name.first;
  };
  const sortTrue = function (propertyRetriever, arr) {
    arr.sort(function (a, b) {
      const valueA = propertyRetriever(a);
      const valueB = propertyRetriever(b);
      if (valueA < valueB) {
        return -1;
      } else if (valueA > valueB) {
        return 1;
      } else {
        return 0;
      }
    });
  };
  const sortFalse = function (propertyRetriever, arr) {
    arr.sort(function (a, b) {
      const valueA = propertyRetriever(a);
      const valueB = propertyRetriever(b);
      if (valueB < valueA) {
        return -1;
      } else if (valueB > valueA) {
        return 1;
      } else {
        return 0;
      }
    });
  };
  if (props.sort === true) {
    sortTrue(simplePropertyRetriever, sortedResults);
  } else {
    sortFalse(simplePropertyRetriever, sortedResults);
  }
  //This returns a Table component
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">
            Name{" "}
            <button className="btn btn-light" onClick={props.handleSort}>
              Sort
            </button>
          </th>
          <th scope="col">Picture</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Location</th>
        </tr>
      </thead>
      <Tbody results={sortedResults} key={sortedResults.email} />
    </table>
  );
}

export default Table;
