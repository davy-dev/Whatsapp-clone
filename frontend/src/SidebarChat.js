import React, { useEffect,useState } from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";
import db from "./firebase";
import { Link } from "react-router-dom";

export default function SidebarChat({ id, name, addNewChat }) {
  const [messages,setMessages]=useState("")
useEffect(()=>{
  if(id){
    db.collection("rooms").doc(id).collection("messages").orderBy("timestamp","desc").onSnapshot(
      snapshot=>(
          setMessages(snapshot.docs.map((doc)=>
            doc.data()
          ))
      )
    )
  }
},[id])

  const createChat = () => {
    const roomName = prompt("Entrer un nom de groupe");
    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      {" "}
      <div className="SidebarChat">
        <Avatar />
        <div className="sidebarChat-info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>{" "}
    </Link>
  ) : (
    <div onClick={createChat} className="SidebarChat">
      <h2>Add new Chat</h2>
    </div>
  );
}
