import { Button, Input } from "@nextui-org/react";
import React from "react";
import { connect } from "react-redux";

class CounterClass extends React.Component {
  state = {
    count : 0,
    // inputCounter: 0
  };

  addCount =() => {
    this.setState({count: this.state.count + 1})
  };

  subtractCount =() => {
    this.setState({count: this.state.count - 1})
  };
  
  render(){
    return(
      <>
          <div className="flex flex-wrap gap-5 justify-center mt-10">
          <Button color="primary" onClick={this.addCount}> + </Button> 
            <p>{this.state.count}</p>
          <Button color="danger" onClick={this.subtractCount}> - </Button>
        </div>

        <div>
            <Input type="number"/>
            <Button color="secondary" >Set</Button>
          </div>

          <Button color="primary"> + </Button> 
            <p>{this.selector.count}</p>
          <Button color="danger"> - </Button>
          <p>Global state:{this.props.counter.count} </p>
      </>
    
    )
  }
}

const mapStateToProps = (store) => {
  return {
    counter: store.counter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementGlobalCounter: () => {
      dispatch({
        type: "INCREMENT"
      })
    },
    decrementGlobalCounter: () => {
      dispatch({
        type: "DECREMENT"
      })
    },
    inputGlobalCounter: (inputCounter) => {
      dispatch({
        type: "SET",
        payload: inputCounter
      })
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);