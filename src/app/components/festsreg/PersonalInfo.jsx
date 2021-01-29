import React from "react";

export class PersonalInfo extends React.Component{



render(){

        return (

            <div>
          <div className="card-body">
    <div className="card-title"><h3>Personal Information</h3></div>
  <div className="row">  

		
						<div className=" col-xs-12 col-sm-12 col-md-4" >
						<div className="form-group ">
    <label forname="UR_NAME" className="bmd-label-floating">YOUR NAME<span className="req-ind">*</span></label>
    <input type="text" className="form-control" id="UR_NAME" required={true} value={this.props.UR_NAME} onChange={this.props.HandleChange}/>
   <span className="bmd-help">You need to enter your name.</span> <br/>
     <span style={{color: "red"}}>{this.props.ErrorMsg }</span>
  </div>
						</div>
						<div className=" col-xs-12 col-sm-12 col-md-4">
							<div className="form-group">
    <label forname="UR_EMAIL_ADDRS" className="bmd-label-floating">YOUR EMAIL ADDRESS<span className="req-ind">*</span></label>
    <input type="email" className="form-control" id="UR_EMAIL_ADDRS" required={true} value={this.props.UR_EMAIL_ADDRS} onChange={this.props.HandleEmChange}/>
    <span className="bmd-help">You need to enter your Email Address</span><br/>
     <span style={{color: "red"}}>{this.props.ErrorMsgem }</span>
    
  </div>
						</div>
						<div className=" col-xs-12 col-sm-12 col-md-4">
							<div className="form-group">
    <label forname="YOUR_PH_NUMBER" className="bmd-label-floating">YOUR PHONE NUMBER<span className="req-ind">*</span></label>
    <input type="number" className="form-control" id="YOUR_PH_NUMBER" required={true} value={this.props.YOUR_PH_NUMBER} onChange={this.props.HandlephChange}/>
    <span className="bmd-help">You need to enter your phone number.</span><br/>
     <span style={{color: "red"}}>{this.props.ErrorMsgph }</span>
  </div>
						</div>
                        </div>
                        <hr/>

				



</div>
            </div>
        );
};
};









