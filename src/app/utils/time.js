import React from "react";
import { Row, Col } from 'reactstrap';
export default class ReactTimer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { time: {}, seconds: props.movieStartTime};
      this.timer = 0;
      this.startTimer = this.startTimer.bind(this);
      this.countDown = this.countDown.bind(this);
    }
  
    secondsToTime(secs){
      let hours = Math.floor(secs / (60 * 60));
  
      let divisor_for_minutes = secs % (60 * 60);
      let minutes = Math.floor(divisor_for_minutes / 60);
  
      let divisor_for_seconds = divisor_for_minutes % 60;
      let seconds = Math.ceil(divisor_for_seconds);
  
      let obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
      };
      return obj;
    }
  
    componentDidMount() {
        {this.startTimer()}
      let timeLeftVar = this.secondsToTime(this.state.seconds);
      this.setState({ time: timeLeftVar });
    }
  
    startTimer() {
      if (this.timer == 0 && this.state.seconds > 0) {
        this.timer = setInterval(this.countDown, 1000);
      }
    }
  
    countDown() {
      // Remove one second, set state so a re-render happens.
      let seconds = this.state.seconds - 1;
      this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
      });
      
      // Check if we're at zero.
      if (seconds == 0) { 
        clearInterval(this.timer);
      }
    }
  
    render() {
      return(
        <Row style={{color:"#bdf2b7"}}>

          
          <Col xs="4" sm="4" md="4">
              <h5>hrs</h5>
          {this.state.time.h}
          </Col>
          <Col xs="4" sm="4" md="4">
              <h5>min</h5>
          {this.state.time.m}
          </Col>
          <Col xs="4" sm="4" md="4">
              <h5>sec</h5>
          {this.state.time.s}
          </Col>
         </Row>
      );
    }
  }