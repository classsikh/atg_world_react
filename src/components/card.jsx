import React from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import TodayIcon from '@mui/icons-material/Today';
import ShareIcon from '@mui/icons-material/Share';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useMediaQuery } from "react-responsive";
function Card(props){
  const isMobile = useMediaQuery({ query: `(max-width: 1000px)`})
    return (
        
          <div className="card shadow-sm">
            <img src={props.cardImage} className="imageCard"></img>
            <div className="card-body">
              <h6 className="card-category">
              {props.cardCategory}
              </h6>
              <div className="headingCard">
              <h5 className="cardHeading">{props.cardHeading}</h5>
              <MoreHorizIcon/>
              </div>
              <div className={props.classDate}>
                <p className="card-date"><TodayIcon sx={{ fontSize:20 }}

                />{props.eventDate}</p>
                <p className="card-place"><LocationOnOutlinedIcon sx={{ fontSize:20 }}/>{props.eventLocation}</p>
              </div>
              <div className={props.btnClass}>
              <button type="button" className={props.btnTheme}>{props.btnText}</button>
              </div>
              <p className="cardtext">{props.cardText}</p>
              <div className="cardfooter">
               <div className="cfl">
                <img src={props.avatarImage} alt="avatr" className="avtar"></img>
                {isMobile?(<div className="carduser">
                  <p className="cardauthor">{props.avatarName}</p>
                  <p  className="cardview"> 1.4k views</p>
                </div>):(<p className="cardauthor">{props.avatarName}</p>)}
                
                </div>
                <div className="cfr">
                {isMobile?(<button className="btn btn-sm btn-light" style={{fontSize:12}}><ShareIcon sx={{ fontSize:18 }} /> Share</button>):(<><p  className="cardview"><RemoveRedEyeOutlinedIcon sx={{ fontSize:18 }}/> 1.4k views</p>
                  <div className="shareicon"><ShareIcon /></div></>)}
                  
                  
                </div>
              </div>
             </div>
          </div>
       
    )
}

export default Card;


