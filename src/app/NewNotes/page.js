"use client";
import Link from "next/link";
import React, { useState } from "react";
import { v4 } from "uuid";

export default function NewNotes() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function HandleAddNote() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const newNote = {
      id: v4(),
      title: title,
      body: body,
       updatedAt:null,
       createdAt: new Date().toLocaleString(),
    };

    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));
   
    alert("Pushed");
  }

  const handleAddNote = () => {
    console.log("Arrow function")
  } 

  return (
    <div>
      {/* Head Sec */}
      <div className="  bg-[#F7F7F7] flex  min-h-[70px] p-[10px]">
        <div className="max-w-[700px]  w-full items-center flex mx-auto">
          <Link href="/"><p className="text-[18px]">Home</p></Link>
        </div>
      </div>
      <div className=" flex mx-auto flex-col max-w-[700px] w-full gap-[10px]  mt-[20px] p-[16px]">
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder=" Type your Notes title"
            className=" max-w-[700px] w-full p-[10px] bg-[#F7F7F7] text-[18px] rounded-[5px]"
          />
        </div>
        <div>
          <textarea
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder=" Type your notes body"
            className=" max-w-[700px] w-full p-[10px] bg-[#F7F7F7] text-[18px] rounded-[5px]"
          />
        </div>
         <div className=""><button
          id=" saveNoteBtn"
          className="  border-1 rounded-[8px] hover:bg-black  p-[10px] bg-[#437993] text-white"
          onClick={HandleAddNote}
        >
          {" "}
          Add Note
        </button>
      </div>
        </div>
    </div>
  );
}
