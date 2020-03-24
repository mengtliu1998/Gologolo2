import React, { Component } from 'react'
import { Modal } from 'react-materialize'
import {Button} from 'react-materialize';

class TextEditSidebar extends Component {
    constructor(props) {
        super(props);

        // WE'LL MANAGE THE UI CONTROL
        // VALUES HERE
        this.state = {
            textColor : this.props.logo.textColor,
            backgroundColor : this.props.logo.backgroundColor,
            fontSize : this.props.logo.fontSize,
            show : false,
            textValue: this.props.logo.text,
            borderColor: this.props.logo.borderColor,
            borderRadius: this.props.logo.borderRadius,
            borderWidth: this.props.logo.borderWidth,
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
        console.log("handlePaddingChangeComplete to " + event.target.value);
        this.setState({ padding: event.target.value }, this.completeUserEditing);
    }

    handleRadiusChange = (event) => {
        console.log("handleRadiusChangeComplete to " + event.target.value);
        this.setState({ borderRadius: event.target.value }, this.completeUserEditing);
    }

    handleWidthChange = (event) => {
        console.log("handleWidthChangeComplete to " + event.target.value);
        this.setState({ borderWidth: event.target.value }, this.completeUserEditing);
    }

    handleBorderColorChange = (event) => {
        console.log("handleBorderColorChangeComplete to " + event.target.value);
        this.setState({ borderColor: event.target.value }, this.completeUserEditing);
    }

    handleFontSizeChange = (event) => {
        console.log("handleFontSizeChangeComplete to " + event.target.value);
        this.setState({ fontSize: event.target.value }, this.completeUserEditing);
    }

    completeUserEditing = () => {
        console.log("completeUserEditing");
        console.log("this.state.textColor: " + this.state.textColor);
        this.props.changeLogoCallback(this.props.logo, this.props.logo.key, this.state.textValue, this.state.textColor, this.state.fontSize,
                                        this.state.backgroundColor, this.state.margin, this.state.borderRadius, this.state.padding,
                                        this.state.borderColor, this.state.borderWidth);
    }

    keydownHandler =(event)=> {
        if (event.keyCode == 90 && event.ctrlKey) {
            this.handleUndo();
        }
        else if (event.keyCode == 89 && event.ctrlKey) {
            this.handleDo();
        }
    }

    componentDidMount(){
        document.addEventListener('keydown', this.keydownHandler);
    }

    render() {
        let undoDisabled = !this.props.canUndo();
        let redoDisabled = !this.props.canRedo();
        let undoClass = "waves-effect waves-light btn-small";
        let redoClass = "waves-effect waves-light btn-small";
        if (undoDisabled)
            undoClass += " disabled";
        if (redoDisabled)
            redoClass += " disabled";
        var fontS = this.state.fontSize;
        var marg = this.state.margin;
        var pad = this.state.padding;
        var rad = this.state.borderRadius;
        var thickn = this.state.borderWidth
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
                        <span className="card-title">Edits</span>
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
                            <div className="col s4">Border Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleBorderColorChange}
                                        value={this.props.logo.borderColor}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s4">Background Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleBackgroundColorChange}
                                        value={this.props.logo.backgroundColor}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s4">Font Size: {fontS}</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleFontSizeChange}
                                    value={this.props.logo.fontSize} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s4">Padding: {pad}</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handlePaddingChange}
                                    value={this.props.logo.padding} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s4">Margin: {marg}</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleMarginChange}
                                    value={this.props.logo.margin} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s4">Border Radius: {rad}</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleRadiusChange}
                                    value={this.props.logo.borderRadius} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s4">Border Thickness: {thickn}</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleWidthChange}
                                    value={this.props.logo.borderWidth} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextEditSidebar