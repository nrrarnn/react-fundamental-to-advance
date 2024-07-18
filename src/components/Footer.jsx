import { Button } from "@nextui-org/react";
import React from "react";

class Footer extends React.Component {
  state = {
    message: this.props.message
  }
  componentDidMount() {
    // ketika kita memasang komponen, componentDidMount ini akan ke panggil
    alert("DID MOUNT");
  }
  // componentDidUpdate akan ke panggil setelah update nya terjadi (setelah state berubah)
  componentDidUpdate(){
    alert("DID UPDATE")
  }

  changeMessage = () => {
    this.setState({message : "Changed Message"})
  }

  // ketika component nya mau diganti ia akan ke panggil, jadi sebelum component di hilangkan si dia ke panggil
  componentWillUnmount(){
    alert('Goodbye')
  }

  render() {
    return(
      <footer>
        <h3>my footer</h3>
        <p>{this.props.message}</p>
        <p>{this.state.message}</p>
        <Button onClick={this.changeMessage}>Change message</Button>
        {/* ketika button di klik maka componentDidUpdate akan ke panggil karena state nya berubah */}
      </footer>
    )
  }
}

export default Footer;