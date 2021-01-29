import React from "react";

export class FestInfo extends React.Component{


    constructor(props){
        super();

    }
    render(){
        return (
            <div>
       <div className="card-body">
    <div className="card-title"><h3>Fest Information</h3></div>
  <div className="row">
 <hr/>


        		<div className=" col-xs-12 col-sm-12 col-md-4" >
						<div className="form-group ">
    <label forname="FEST_NAME" className="bmd-label-floating">FEST NAME<span className="req-ind">*</span></label>
    <input type="text" className="form-control" id="FEST_NAME" required={true} value={this.props.FEST_NAME} onChange={this.props.HandleChangefestName}/>
   <span className="bmd-help">You need to enter your Fest Name.</span> <br/>
     <span style={{color: "red"}}>{this.props.ErrorMsgfestName }</span>
  </div>
						</div>




        		<div className=" col-xs-12 col-sm-12 col-md-4" >
						<div className="form-group ">
    <label forname="FEST_CAPTION" className="bmd-label-floating">FEST CAPTION<span className="req-ind">*</span></label>
    <input type="text" className="form-control" id="FEST_CAPTION" required={true} value={this.props.FEST_CAPTION} onChange={this.props.HandleChangefestCap}/>
   <span className="bmd-help">You need to enter your Fest Caption.</span> <br/>
     <span style={{color: "red"}}>{this.props.ErrorMsgfestCap }</span>
  </div>
						</div>





 <div className=" col-xs-12 col-sm-12 col-md-4" >
 <div className="form-group">
    <label forname="FEST_TYPE" className="bmd-label-floating">FEST TYPE<span className="req-ind">*</span></label>
    <select className="form-control" id="FEST_TYPE" required={true} value={this.props.FEST_TYPE} onChange={this.props.HandleChangefestType}>
      <option>ALL</option>
      <option>Technical</option>
      <option>Cultural</option>
      <option>Sports</option>
    </select>
      <span className="bmd-help">You need to enter your Fest Type.</span><br/>
     <span style={{color: "red"}}>{this.props.ErrorMsgfestType }</span>
  </div>
  </div>

    <div className=" col-xs-12 col-sm-12 col-md-4" >
      <div className="form-group"></div>
    <label forname="FEST_DESC" className="bmd-label-floating">FEST DESCRIPTION<span className="req-ind">*</span></label>
    <textarea className="form-control" id="FEST_DESC" rows="4" required={true} value={this.props.FEST_DESC} onChange={this.props.HandleChangefestDesc}/>
 <span className="bmd-help">You need to enter your Fest Description.</span> <br/>
     <span style={{color: "red"}}>{this.props.ErrorMsgfestDesc }</span>
  </div>




                                		<div className=" col-xs-12 col-sm-12 col-md-4" >
						<div className="form-group ">
    <label forname="FEST_WEBSITE" className="bmd-label-floating">FEST WEBSITE<span className="req-ind">*</span></label>
    <input type="text" className="form-control" id="FEST_WEBSITE" required={true} value={this.props.FEST_WEBSITE} onChange={this.props.HandleChangefestWeb}/>
   <span className="bmd-help">You need to enter your Fest Website.</span> <br/>
     <span style={{color: "red"}}>{this.props.ErrorMsgfestWeb }</span>
  </div>
						</div>

                                		<div className=" col-xs-12 col-sm-12 col-md-4" >
						<div className="form-group ">
    <label forname="FEST_DEPRT" className="bmd-label-floating">FEST DEPARTMENT<span className="req-ind">*</span></label>
    <input type="text" className="form-control" id="FEST_DEPRT" required={true} value={this.props.FEST_DEPRT} onChange={this.props.HandleChangefestDept}/>
   <span className="bmd-help">You need to enter your Fest Department.</span> <br/>
     <span style={{color: "red"}}>{this.props.ErrorMsgfestDept }</span>
  </div>
						</div>



                                		<div className=" col-xs-12 col-sm-12 col-md-4" >
						<div className="form-group ">
    <label forname="FEST_ST_DATE" className="bmd-label-floating">FEST START DATE (YYYY-MM-DD)<span className="req-ind">*</span></label>
    <input type="text" className="form-control" id="FEST_ST_DATE" required={true} value={this.props.FEST_ST_DATE} onChange={this.props.HandleChangefestStDate}/>
   <span className="bmd-help">You need to enter your Fest Start Date.</span> <br/>
     <span style={{color: "red"}}>{this.props.ErrorMsgfestStDate }</span>
  </div>
						</div>


                                		<div className=" col-xs-12 col-sm-12 col-md-4" >
						<div className="form-group ">
    <label forname="FEST_END_DATE" className="bmd-label-floating">FEST END DATE (YYYY-MM-DD)<span className="req-ind">*</span></label>
    <input type="text" className="form-control" id="FEST_END_DATE" required={true} value={this.props.FEST_END_DATE} onChange={this.props.HandleChangefestEdDate}/>
   <span className="bmd-help">You need to enter your Fest End Date.</span> <br/>
     <span style={{color: "red"}}>{this.props.ErrorMsgfestEdDate }</span>
  </div>
						</div>




    <div className=" col-xs-12 col-sm-12 col-md-4" >
      <div className="form-group"></div>
    <label forname="FEST_REG_URL" className="bmd-label-floating">FEST REGISTRATION URL'S<span className="req-ind">*</span></label>
    <textarea className="form-control" id="FEST_REG_URL" rows="4" required={true} value={this.props.FEST_REG_URL} onChange={this.props.HandleChangefestRegUrl}/>
 <span className="bmd-help">You need to enter your Fest Registration Urls.</span> <br/>
     <span style={{color: "red"}}>{this.props.ErrorMsgfestRegUrl }</span>
  </div>




    <div className=" col-xs-12 col-sm-12 col-md-4" >
      <div className="form-group"></div>
    <label forname="FEST_ACC" className="bmd-label-floating">FEST ACCOMODATION<span className="req-ind">*</span></label>
    <textarea className="form-control" id="FEST_ACC" rows="4" required={true} value={this.props.FEST_ACC} onChange={this.props.HandleChangefestAcc}/>
 <span className="bmd-help">You need to enter your Fest Accomodation Details</span> <br/>
     <span style={{color: "red"}}>{this.props.ErrorMsgfestAcc }</span>
  </div>



                    		<div className=" col-xs-12 col-sm-12 col-md-4" >
						<div className="form-group ">
    <label forname="FEST_EMAIL_ADD" className="bmd-label-floating">FEST EMAIL ADDRESS<span className="req-ind">*</span></label>
    <input type="email" className="form-control" id="FEST_EMAIL_ADD" required={true} value={this.props.FEST_EMAIL_ADD} onChange={this.props.HandleChangefestEmAddrs}/>
   <span className="bmd-help">You need to enter your Fest  Email Address.</span> <br/>
     <span style={{color: "red"}}>{this.props.ErrorMsgfestEmAddrs }</span>
  </div>
						</div>




      <div className=" col-xs-12 col-sm-12 col-md-4" >
      <div className="form-group">
    <label forname="FEST_BANNER" className="bmd-label-floating">FEST BANNER<span className="req-ind">*</span></label>
    <input type="file" className="form-control-file" id="FEST_BANNER" required={true} onChange={this.props.HandleFestBanner}/>
    <small className="text-muted">Upload your Fest Banner.</small>
  </div>
  </div>

      <div className=" col-xs-12 col-sm-12 col-md-4" >
      <div className="form-group" style={{display: 'none'}} >
    <label forname="FEST_LOGO"className="bmd-label-floating">FEST LOGO<span className="req-ind">*</span></label>
    <input type="file" className="form-control-file" id="FEST_LOGO" required={true} onChange={this.props.HandleFestLogo}/>
  </div>
  </div>
      <div className=" col-xs-12 col-sm-12 col-md-4" >
      <div className="form-group" style={{display: 'none'}}>
    <label forname="FEST_IMGS"  className="bmd-label-floating">FEST IMAGES<span className="req-ind">*</span></label>
    <input type="file" className="form-control-file" id="FEST_IMGS" required={true}   multiple onChange={this.props.HandleFestImages}/>
    <small className="text-muted">Upload your Fest Images.</small>
  </div>
  </div>









</div>
<hr/>
              </div>
            </div>
        );
    }
}
