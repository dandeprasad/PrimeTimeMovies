import React from "react";

export class FestOthers extends React.Component{


    constructor(props){
        super();
   
    }
    render(){
        return (
            <div>
          <div className="card-body">
    <div className="card-title"><h3>Others</h3></div>
  <div className="row">  




		
						<div className=" col-xs-12 col-sm-12 col-md-4" >
						<div className="form-group ">
    <label forname="FEST_GUEST" className="bmd-label-floating">FEST GUEST</label>
    <input type="text" className="form-control" id="FEST_GUEST"  value={this.props.FEST_GUEST} onChange={this.props.HandleChangefestGuest} />
    <span className="bmd-help">You need to enter your Fest Guest.</span><br/>

  </div>
						</div>
	<div className=" col-xs-12 col-sm-12 col-md-4" >
						<div className="form-group ">
    <label forname="FEST_SPONSERS" className="bmd-label-floating">FEST SPONSORS</label>
    <input type="text" className="form-control" id="FEST_SPONSERS" value={this.props.FEST_SPONSERS} onChange={this.props.HandleChangeFestspons}/>
    <span className="bmd-help">You need to enter your Fest Sponsers.</span> <br/>

  </div>
						</div>
                        	<div className=" col-xs-12 col-sm-12 col-md-4" >
						<div className="form-group ">
    <label forname="DEADLINE_REG" className="bmd-label-floating">DEAD LINE REGISTRATION</label>
    <input type="text" className="form-control" id="DEADLINE_REG"  value={this.props.DEADLINE_REG} onChange={this.props.HandleChangeDeadRegis}/>
    <span className="bmd-help">You need to enter your Fest DeadLine Registration.</span><br/>

  </div>
						</div>
                            	<div className=" col-xs-12 col-sm-12 col-md-4" >
						<div className="form-group ">
    <label forname="REG_FEE" className="bmd-label-floating">REGISTRATION FEE</label>
    <input type="text" className="form-control" id="REG_FEE"  value={this.props.REG_FEE} onChange={this.props.HandleChangeRegFee}/>
    <span className="bmd-help">You need to enter your Fest  Registration Fee.</span><br/>

  </div>
						</div>
                                  	<div className=" col-xs-12 col-sm-12 col-md-4" >
						<div className="form-group ">
    <label forname="FEST_CONT_PERSN" className="bmd-label-floating">FEST CONTACT PERSON</label>
    <input type="text" className="form-control" id="FEST_CONT_PERSN"  value={this.props.FEST_CONT_PERSN} onChange={this.props.HandleChangeFestContPrsn}/>
    <span className="bmd-help">You need to enter your Fest  Contact Person.</span><br/>

  </div>
						</div>
                        </div>
                        <hr/>

				



</div>
            </div>
        );}
};









