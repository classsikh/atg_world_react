import React, { useState } from 'react'

const Grouplist = (props) => {
  const[togle,setTogle]= useState(true);
  const togleBtn = () =>{
    setTogle(!togle)
  }
  return (
    <div>
    <div className='groupList'>
    <div className='groupItem'>
    <div className='groupItemleft'>
       <img src={props.groupIcon}  alt='groupImage'
           className='grouppic'/> 
           <p className='groupName'>{props.groupName}</p>
       </div>
       {togle ? (<button onClick={togleBtn} type="button" class="btn-custom btn btn-secondary btn-sm">Follow</button>):(<button onClick={togleBtn} type="button" class="btn btn-dark btn-sm">Followed</button>) }
       
    </div>
  </div>
  </div>
  )
}

export default Grouplist;