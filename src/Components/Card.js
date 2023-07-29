import React, { Component } from 'react';
class ExperienceCard extends Component {
  render() {
    const {
      city,
      about,
      name,
      places,
      description
    } = this.props; 

    return (
      <div style={{textAlign:"right",height:"250px",overflow:"auto",padding:"1rem",margin:".3rem",borderRadius: "10px",boxShadow: "-2px 4px 15px -3px rgba(0, 0, 0, 0.47)"}}>
          <React.Fragment>
                {city ? (
                  <React.Fragment>
                    <p style={{fontWeight:"bolder",color:"#26B3FB"}}>:{name}</p>
                    <p style={{color:"gray",fontWeight:"bold"}}>{city}</p>
                    <p style={{fontSize:"12px"}}>{description}</p>
                    <p style={{fontSize:"12px",color:"#1A2E46"}}>{places}</p>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <p >{about}</p>
                    <p >{description}</p>
                  </React.Fragment>
                )}
          </React.Fragment>
      </div>
    );
  }
}

export default ExperienceCard;
