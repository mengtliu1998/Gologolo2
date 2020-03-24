import React, { Component } from 'react'
import { Modal } from 'react-materialize'
import {Button} from 'react-materialize';

class TextEditSidebar extends Component {
    constructor(props) {
        super(props);

        // WE'LL MANAGE THE UI CONTROL
        // VALUES HERE
        this.state = {
            textColor : "#FF0000",
            backgroundColor : this.props.logo.backgroundColor,
            fontSize : 24,
            show : false,
            textValue: this.props.logo.text,
            //placeholder: "Enter Text"
            borderColor: this.props.logo.borderColor,
            borderRadius: this.props.logo.borderRadius,
            borderThickness: this.props.logo.borderThickness,
            margin: this.props.logo.margin,
            padding: this.props.logo.padding
        }
    }

    handleUndo = () => {
        this.props.undoCallback();
    }

    handleDo = () => {
        this.props.redoCallback();
    }

    handleEdit = () => {
        this.setState({show: true});
    }

    handleText = (event) =>{
        let trimmed = event.target.value.trim();
        if(trimmed.length !== 0){
            this.setState({textValue: event.target.value});
        }
    }

    handleEditEnter =(event) => {
        this.completeUserEditing();
    }

    handleTextColorChange = (event) => {
        console.log("handleTextColorChange to " + event.target.value);
        this.setState({ textColor: event.target.value }, this.completeUserEditing);
    }

    handleBackgroundColorChange = (event) => {
        console.log("handleBackgroundColorChange to " + event.target.value);
        this.setState({ backgroundColor: event.target.value }, this.completeUserEditing);
    }

    handleMarginChange = (event) => {
        console.log("handleMarginChangeComplete to " + event.target.value);
        this.setState({ margin: event.target.value }, this.completeUserEditing);
    }

    handlePaddingChange = (event) => {
        console.log("handleTextColorChangeComplete to " + event.target.value);
        this.setState({ padding: event.target.value }, this.completeUserEditing);
    }

    handleRadiusChange = (event) => {
        console.log("handleTextColorChangeComplete to " + event.target.value);
        this.setState({ borderRadius: event.target.value }, this.completeUserEditing);
    }

    handleThicknessChange = (event) => {
        console.log("handleTextColorChangeComplete to " + event.target.value);
        this.setState({ borderThickness: event.target.value }, this.completeUserEditing);
    }

    handleBorderColorChange = (event) => {
        console.log("handleTextColorChangeComplete to " + event.target.value);
        this.setState({ borderColor: event.target.value }, this.completeUserEditing);
    }

    handleFontSizeChange = (event) => {
        console.log("handleTextColorChangeComplete to " + event.target.value);
        this.setState({ fontSize: event.target.value }, this.completeUserEditing);
    }

    completeUserEditing = () => {
        console.log("completeUserEditing");
        console.log("this.state.textColor: " + this.state.textColor);
        this.props.changeLogoCallback(this.props.logo, this.props.logo.key, this.state.textValue, this.state.textColor, this.state.fontSize,
                                        this.state.backgroundColor, this.state.margin, this.state.borderRadius, this.state.padding,
                                        this.state.borderColor, this.state.borderThickness);
    }

    //oldLogo, logoKey, newText, newTextColor, newFontSize, newBackgroundColor, newMargin, newRadius, newPadding, newBorderColor, newThickness
    render() {
        let undoDisabled = !this.props.canUndo();
        let undoClass = "waves-effect waves-light btn-small";
        let redoDisabled = !this.props.canRedo();
        let redoClass = "waves-effect waves-light btn-small";
        if (undoDisabled)
            redoClass += " disabled";
        if (redoDisabled)
            redoClass += " disabled";
        return (
            <div className="card-panel col s4">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                    <Modal
                            trigger={<button className="waves-effect waves-light btn-small" onClick={this.handleEdit}>&#9998;</button>}
                            bottomSheet={false}
                            fixedFooter={false}
                            header="Edit Logo"
                            id="modal-0"
                            options={{
                                dismissible: false,
                                endingTop: '10%',
                                inDuration: 250,
                                onCloseEnd: null,
                                onCloseStart: null,
                                onOpenEnd: null,
                                onOpenStart: null,
                                opacity: 0.5,
                                outDuration: 250,
                                preventScrolling: true,
                                startingTop: '4%'
                            }}
                            >
                            <div><input placeholder="Change Logo" id="edit_text" type="text" className="validate" 
                                onChange={this.handleText} />
                                <label></label></div>
                                <Button onClick={this.handleEditEnter} flat modal = "close" node = "button" waves="green">Enter</Button>
                        </Modal>
                        <button className={undoClass} onClick={this.handleUndo}>Undo</button>
                        <button className={redoClass} onClick={this.handleDo}>Redo</button>
                    </div>
                </div>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Text</span>
                        <div className="row">
                            <div className="col s4">Text Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleTextColorChange}
                                        value={this.props.logo.textColor}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s4">Background Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleBackgroundColorChange}
                                        value={this.props.logo.BackgroundColor}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s4">Border Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleBorderColorChange}
                                        value={this.props.logo.borderColor}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s4">Font Size:</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleFontSizeChange}
                                    value={this.props.logo.fontSize} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s4">Padding:</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handlePaddingChange}
                                    value={this.props.logo.padding} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s4">Margin:</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleMarginChange}
                                    value={this.props.logo.margin} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s4">Border Radius:</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleRadiusChange}
                                    value={this.props.logo.borderRadius} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s4">Border Thickness:</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleThicknessChange}
                                    value={this.props.logo.borderThickness} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextEditSidebar