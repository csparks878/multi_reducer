import React, { Component } from "react";
import { connect } from "react-redux";
import ACTIONS from "../store/actions";

class Main extends Component{
    constructor(props){
        super(props);

        this.state = {
            localName: "",
            localAge: undefined
        }
    }

    handleUpdateName = (event) => {
        event.preventDefault();
        this.setState({
            localName: event.target.value
        })
    }

    handleUpdateAge = (event) => {
        const newAge = parseInt(event.target.value);
        this.setState({
            localAge: newAge
        })
    }

    render(){
        return(
            <div className="main">
                <h1>Name: {this.props.name}</h1>
                <h1>Age: {this.props.age}</h1>
                <div className="main__inputs">
                    <div className="main__name">
                        <input type="text" placeholder="Enter New Name Here" value={this.state.localName} onChange={this.handleUpdateName} />
                        <br />
                        <input type="submit" value="Submit" onClick={() => this.props.updateName(this.state.localName)} />
                    </div>

                    <div className="main__age">
                        <input type="text" placeholder="Enter New Age Here" value={this.state.localAge} onChange={this.handleUpdateAge} />
                        <br />
                        <input type="submit" value="Submit" onClick={() => this.props.updateAge(this.state.localAge)} />
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
      name: state.rd1.name,
      age: state.rd2.age
    }
  }


const mapDispatchToProps = (dispatch) => {
    return {
        updateName: (name) => dispatch({type: ACTIONS.UPDATE_NAME, payload: {value: name}}),
        updateAge: age => dispatch({type: ACTIONS.UPDATE_AGE, payload: {value: age}}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);