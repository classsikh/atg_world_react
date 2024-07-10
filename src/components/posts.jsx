import React from "react";
import Location from "./location";
import Card from "./card";
import Group from "./group";
import postDetails from "../postDetails";

var isloggedin = true;

function createCard(postItem){
  return <Card
           key={postItem.id}
           cardImage={postItem.cardImage}
           cardCategory={postItem.cardCategory}
           cardHeading={postItem.cardHeading}
           cardText={postItem.cardText}
           avatarImage={postItem.avatarImage}
           avatarName={postItem.avatarName}
           classDate={postItem.classDate}
           eventDate={postItem.eventDate}
           eventLocation= {postItem.eventLocation}
           btnClass={postItem.btnClass}
           btnTheme={postItem.btnTheme}
           btnText={postItem.btnText}
           />
}

function Posts() {
  return (
    <posts>
    
      <div className=" post ">
        <div className="section1">
         {postDetails.map(createCard)}
          
        </div>
        <div className="aside">
          <Location />
          {isloggedin&&<Group/>}

          
        </div>
      </div>
    </posts>
  );
}

export default Posts;
