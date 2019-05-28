import React, { Component } from "react";
import { connect } from "react-redux";

class Input extends Component {
  state = {};
  render() {
    return (
      <div>
        <label>Add new todo:</label>
        <input
          readonly
          id="myInput"
          type="text"
          onChange={e => {
            this.props.hundelChange(e.target);
          }}
        />
        <button
          className="waves-effect waves-light btn"
          onClick={() => {
            this.props.add(this.props.input);
            document.getElementById("myInput").value = "";
            document.getElementById("myInput").focus();
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    input: state.input
  };
};
const mapDispatchToProps = dispatch => {
  return {
     
    hundelChange: target => {
      dispatch({ type: "SET_INPUT", value: target.value });
    },

    add: input => {
      let obj = {};
      let id = Math.floor(Math.random() * 1000);
      let input1 = input;
      obj = { id, input1 };
      if (input1 !== "" ) {
        dispatch({ type: "ADD_INPUT", input: obj });
       
      }
      console.log(obj, input);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);