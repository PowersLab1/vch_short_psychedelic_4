import React, { Component } from 'react';
import './Continue_rating.css';
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";

class Continue_rating extends Component {

    constructor(props) {
        super(props);
      this.keyFunction = this.keyFunction.bind(this);
      this.state = {
        continue: false,
      }
    }

    keyFunction(event){
    if(event.keyCode === 81) {
      alert("User has Requested to Continue");
      this.setState((state, props) => ({
        continue: true
      }));
    }
  }

   componentDidMount(){
    document.addEventListener("keydown", this.keyFunction, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.keyFunction, false);
  }


      render() {
        console.log(this.props.data);

        if(this.state.continue === true){
      return <Redirect to="/TrialQ" />
    }

        return (
          <div className="Continue_rating">
            <header className="Continue_rating-header">
            <div className="text-container">
              <p className="Continue_rating-text">
                Congratulations
                <br /><br /> You have completed the first trial.
                <br /><br /> A visual white noise will be shown throughout the experiment.
                <br /><br /> A striped-texture will appear inside the white noise when a tone is played.
                <br /><br /> Press <b> "Q"/YES </b> if you <b> DO </b>see the stripes.
                <br /><br /> Press <b> "E"/NO </b> if you <b> DO NOT </b> see the stripes.
                <br /><br /> There are no ratings for this part, so only indicate YES or NO, similar to the first practice session.
                <br /><br /> Please respond as <b> QUICKLY </b> and as <b> ACCURATELY </b> as you <b> POSSIBLY CAN </b>
                <br /><br /><br /> PRESS "Q"/YES TO BEGIN THE EXPERIMENT.
              </p>
            </div>
            </header>
          </div>
        );
      }
    }

const mapStateToProps = state => ({
  data: state.data,
})

export default connect(mapStateToProps)(Continue_rating)