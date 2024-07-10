import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Grouplist from './grouplist';
import groupLists from '../groupLists';
function createList(groupItem){
  return <Grouplist 
          key={groupItem.id}
          groupIcon={groupItem.groupIcon}
          groupName={groupItem.groupName}
          />
}
const Group = () => {
  return (
    <div className='recommenedGroup'>
       <div className='groupHeader'>
         <ThumbUpIcon sx={{ fontSize:18 }}/>
         <h6>Recommended Groups</h6>
       </div>
        {groupLists.map(createList)}
       <div className='seemore'>See More...</div>
    </div>
  )
}

export default Group;