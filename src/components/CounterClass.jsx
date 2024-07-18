import { Button } from "@nextui-org/react";
import React from "react";

class CounterClass extends React.Component {
  state = {
    count : 0,
  };

  addCount =() => {
    this.setState({count: this.state.count + 1})
  };

  subtractCount =() => {
    this.setState({count: this.state.count - 1})
  };
  
  render(){
    return(
      <div className="flex flex-wrap gap-5 justify-center mt-10">
      <Button color="primary" onClick={this.addCount}> + </Button> 
        <p>{this.state.count}</p>
      <Button color="danger" onClick={this.subtractCount}> - </Button>
    </div>
    )
  }
}
export default CounterClass;