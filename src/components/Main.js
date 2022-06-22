import React, { Component } from "react";
import "./App.css";

import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Button from "react-bootstrap/Button";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demoModal: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({ demoModal: !this.state.demoModal });
  }

  render() {
    
    let etherAmount = this.props.ethBalance;
    etherAmount = window.web3.utils.fromWei(etherAmount, "Ether");
    return (
      <div>
        <h4>Eth Balance : {etherAmount}</h4>
        <h4>Starter Count : </h4>
        <div>
          <button class="btn btn-primary" onClick={this.toggle}>Click Modal</button>
          <Modal
            scrollable={true}
            show={this.state.demoModal}
            fade={false}
            style={{ display: "block" }}
          >
            <ModalHeader toggle={this.toggle}>Edit Value</ModalHeader>
            <form
              // onSubmit={(event) => {
              //   event.preventDefault();
              //   let new_task_content;
              //   new_task_content = this.input.value;
              //   let id = this.state.editid;
              //   // console.log(this.state.editid)
              //   // console.log(new_task_content)
              //   this.props.editTask(id, new_task_content);
              // }}
            >
              <ModalBody>
                <label>Edit Text Below</label>
                <br />
                <input
                  type="text"
                  // placeholder={this.state.edittext}
                  // ref={(input) => {
                  //   this.input = input;
                  // }}
                  name="edittask"
                  className="form-control"
                />
              </ModalBody>
              <ModalFooter>
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
                <Button className="btn btn-secondary" onClick={this.toggle}>
                  Close
                </Button>
              </ModalFooter>
            </form>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Main;
