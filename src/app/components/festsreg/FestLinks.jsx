import React from "react";


export class FestLinks extends React.Component{


    constructor(props){
        super();
   
    }
    render(){
        return (
            <div>
          <div className="card-body">
    <div className="card-title"><h3>Fest Links</h3></div>
  <div className="row">  


		
						<div className=" col-xs-12 col-sm-12 col-md-4" >
						<div className="form-group ">
    <label forname="CLG_WEBSITE1" className="bmd-label-floating">COLLEGE WEBSITE<span className="req-ind">*</span></label>
    <input type="text" className="form-control" id="CLG_WEBSITE1" required={true} value={this.props.CLG_WEBSITE1} onChange={this.props.HandleChangeClgWebsite}/>
    <span className="bmd-help">You need to enter your College Website.</span><br/>
      <span style={{color: "red"}}>{this.props.ErrorMsgClgWebsite }</span>
  </div>
						</div>
	<div className=" col-xs-12 col-sm-12 col-md-4" >
						<div className="form-group ">
    <label forname="FEST_WEBSITE1" className="bmd-label-floating">FEST WEBSITE<span className="req-ind">*</span></label>
    <input type="text" className="form-control" id="FEST_WEBSITE1" required={true} value={this.props.FEST_WEBSITE1} onChange={this.props.HandleChangeFestWebsite}/>
    <span className="bmd-help">You need to enter your Fest Website.</span><br/>
      <span style={{color: "red"}}>{this.props.ErrorMsgFestWebsite }</span>
  </div>
						</div>
                        	<div className=" col-xs-12 col-sm-12 col-md-4" >
						<div className="form-group ">
    <label forname="FACEBOOK_LINK" className="bmd-label-floating">FACEBOOK</label>
    <input type="text" className="form-control" id="FACEBOOK_LINK" value={this.props.FACEBOOK_LINK} onChange={this.props.HandleChangeFacebookLink}/>
    <span className="bmd-help">You need to enter your Facebook link.</span>
  </div>
						</div>
                            	<div className=" col-xs-12 col-sm-12 col-md-4" >
						<div className="form-group ">
    <label forname="TWITTER_LINK" className="bmd-label-floating">TWITTER</label>
    <input type="text" className="form-control" id="TWITTER_LINK" value={this.props.TWITTER_LINK} onChange={this.props.HandleChangeTwitterLink}/>
    <span className="bmd-help">You need to enter your Twitter Link.</span>
  </div>
						</div>
                                  	<div className=" col-xs-12 col-sm-12 col-md-4" >
						<div className="form-group ">
    <label forname="YOUTUBE_LINK" className="bmd-label-floating">YOUTUBE LINK</label>
    <input type="text" className="form-control" id="YOUTUBE_LINK" value={this.props.YOUTUBE_LINK} onChange={this.props.HandleChangeYoutubeLink}/>
    <span className="bmd-help">You need to enter your Youtube Link.</span>
  </div>
						</div>
                               	<div className=" col-xs-12 col-sm-12 col-md-4" >
						<div className="form-group ">
    <label forname="POSTERS_LINK" className="bmd-label-floating">POSTERS LINK</label>
    <input type="text" className="form-control" id="POSTERS_LINK" value={this.props.POSTERS_LINK} onChange={this.props.HandleChangePosterLink}/>
    <span className="bmd-help">You need to enter your Posters Link.</span>
  </div>
						</div>
                        </div>
                        <hr/>

				



</div>
            </div>
        );
    }
};









