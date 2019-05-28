import React, { Component } from "react";
import { connect } from "react-redux";

class Main extends Component {
  render() {
    return (
      <div className="todos collection">
        <ul>
          {this.props.todo.length ? (
            this.props.todo.map(el => (
              <li
                onClick={() => this.props.delete(el.id)}
                className="collection-item"
                key={el.id}
              >
                {el.input1}
              </li>
            ))
          ) : (
            <p className="center">you have no todo s left, yey</p>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state.main
  };
};
const mapDispatchToProps = dispatch => {
  return {
    delete: id => {
      dispatch({ type: "REMOVE_INPUT", id: id });
       document.getElementById("myInput").focus();
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);