import React, { Component } from 'react'

// THIS IS HOW WE DISPLAY THE LOGO, IN THIS COMPONENT
class TextEditWorkspace extends Component {
    render() {
        const styles = {
            container: {
                color: this.props.logo.textColor,
                fontSize: this.props.logo.fontSize + "pt",

                borderThickness: this.props.logo.borderThickness + "px",
                borderColor: this.props.logo.borderColor,
                borderRadius: this.props.logo.borderRadius + "pt",
                padding: this.props.logo.padding + "pt",
                margin: this.props.logo.margin + "pt",
                backgroundColor: this.props.logo.backgroundColor,
                text: this.props.logo.text
            }
        }
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <div className="col s8"
            style={ styles.container }>
               
            {this.props.logo.text}</div>
            </div>
        )
    }
}

export default TextEditWorkspace