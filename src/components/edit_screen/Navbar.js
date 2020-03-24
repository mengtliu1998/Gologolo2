import React from 'react'
import { Modal } from 'react-materialize'
import {Button} from 'react-materialize';

class Navbar extends React.Component {
  constructor() {
    super();

    console.log("Navbar constructed");
  }

  componentDidMount = () => {
      console.log("\tNavbar component did mount");
  }

  componentWillUnmount = () => {
      console.log("\tNavbar component will unmount");
  }

  handleGoHome = () => {
    console.log("handleGoHome");
    this.props.goToHomeCallback();
  }

  handleConfirm = () => {
    console.log("handleConfirm");
    this.props.removeLogo();
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div  className='brand-logo' 
                style={ {cursor: "pointer"} }
                onClick={this.handleGoHome}>
            goLogoLo
          </div>
          <Modal
          trigger={<div
           style = {{display:"flex"}}><button className="waves-effect waves-light btn-small" onClick={this.handleEdit} style={{marginLeft: "auto"}}>&#128465;</button></div>}
          bottomSheet={false}
          fixedFooter={false}
          header="Delete"
          id="modal-0"
          options={{
          dismissible: false,
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: '4%'
          }}> <div style={{ display: "flex"}}>
            <Button onClick={this.handleConfirm} flat modal = "close" node = "button" waves="green" style={{ marginLeft: "auto"}}>Confirm</Button></div>
        </Modal>
        </div>
      </nav>
    )
  };
}

export default Navbar;