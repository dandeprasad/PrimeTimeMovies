import React from "react";

export class CollegeInfo extends React.Component{



render(){

        return (
            <div>
       <div className="card-body">
    <div className="card-title"><h3>College Information</h3></div>
  <div className="row">




		<div className=" col-xs-12 col-sm-12 col-md-4" >
						<div className="form-group ">
    <label forname="CLG_NAME" className="bmd-label-floating">COLLEGE NAME<span className="req-ind">*</span></label>
    <input type="text" className="form-control" id="CLG_NAME" required={true} value={this.props.CLG_NAME} onChange={this.props.HandleChangeclgName}/>
   <span className="bmd-help">You need to enter your College Name.</span> <br/>
     <span style={{color: "red"}}>{this.props.ErrorMsgclgName }</span>
  </div>
						</div>

<div className=" col-xs-12 col-sm-12 col-md-4" >
						<div className="form-group ">
    <label forname="CLG_TYPE" className="bmd-label-floating">COLLEGE TYPE<span className="req-ind">*</span></label>
    <input type="text" className="form-control" id="CLG_TYPE" required={true} value={this.props.CLG_TYPE} onChange={this.props.HandleChangeclgType}/>
   <span className="bmd-help">You need to enter your College Type.</span> <br/>
     <span style={{color: "red"}}>{this.props.ErrorMsgclgType }</span>
  </div>
						</div>




<div className=" col-xs-12 col-sm-12 col-md-4" >
						<div className="form-group ">
    <label forname="CLG_WEBSITE" className="bmd-label-floating">COLLEGE WEBSITE<span className="req-ind">*</span></label>
    <input type="text" className="form-control" id="CLG_WEBSITE" required={true} value={this.props.CLG_WEBSITE} onChange={this.props.HandleChangeclgWeb}/>
   <span className="bmd-help">You need to enter your College Website.</span> <br/>
     <span style={{color: "red"}}>{this.props.ErrorMsgclgWeb}</span>
  </div>
						</div>




			<div className=" col-xs-12 col-sm-12 col-md-4">
							<div className="form-group">
    <label forname="CLG_EMAILID" className="bmd-label-floating">COLLEGE EMAIL-ID<span className="req-ind">*</span></label>
    <input type="email" className="form-control" id="CLG_EMAILID" required={true} value={this.props.CLG_EMAILID} onChange={this.props.HandleChangeClgEmail}/>
    <span className="bmd-help">You need to enter your College Email ID.</span><br/>
     <span style={{color: "red"}}>{this.props.ErrorMsgClgEmail }</span>

  </div>
						</div>



                        <div className=" col-xs-12 col-sm-12 col-md-4">
							<div className="form-group">
    <label forname="CLG_PH_NUM" className="bmd-label-floating">COLLEGE PHONE NUMBER<span className="req-ind">*</span></label>
    <input type="number" className="form-control" id="CLG_PH_NUM" required={true} value={this.props.CLG_PH_NUM} onChange={this.props.HandleChangeClgPhno}/>
    <span className="bmd-help">You need to enter your College phone number.</span><br/>
     <span style={{color: "red"}}>{this.props.ErrorMsgClgPhno }</span>
  </div>
						</div>



		<div className=" col-xs-12 col-sm-12 col-md-4" >
						<div className="form-group ">
    <label forname="CLG_LOC" className="bmd-label-floating">COLLEGE LOCATION<span className="req-ind">*</span></label>
    <input type="text" className="form-control" id="CLG_LOC" required={true} value={this.props.CLG_LOC} onChange={this.props.HandleChangeclgLoc}/>
   <span className="bmd-help">You need to enter your College location.</span> <br/>
     <span style={{color: "red"}}>{this.props.ErrorMsgclgLoc }</span>
  </div>
						</div>




                        		<div className=" col-xs-12 col-sm-12 col-md-4" >
						<div className="form-group ">
    <label forname="HW_REACH" className="bmd-label-floating">HOW TO REACH<span className="req-ind">*</span></label>
    <input type="text" className="form-control" id="HW_REACH" required={true} value={this.props.HW_REACH} onChange={this.props.HandleChangeHowtoReach}/>
   <span className="bmd-help">Directions to your college.</span> <br/>
     <span style={{color: "red"}}>{this.props.ErrorMsgHowtoReach }</span>
  </div>
						</div>
            <div className=" col-xs-12 col-sm-12 col-md-4" >
<div className="form-group ">
<label forname="CITY" className="bmd-label-floating">COLLEGE CITY<span className="req-ind">*</span></label>
<input type="text" className="form-control" id="CITY" required={true} value={this.props.CLG_CITY} onChange={this.props.HandleChangeClgCity}/>
<span className="bmd-help">City of the college.</span> <br/>

</div>
</div>
<div className=" col-xs-12 col-sm-12 col-md-4" >
<div className="form-group ">
<label forname="STATE" className="bmd-label-floating">COLLEGE STATE<span className="req-ind">*</span></label>
<input type="text" className="form-control" id="STATE" required={true} value={this.props.CLG_STATE} onChange={this.props.HandleChangeClgState}/>
<span className="bmd-help">State of the college.</span> <br/>

</div>
</div>
                        </div>





                        <hr/>





</div>
            </div>
        );
}}
