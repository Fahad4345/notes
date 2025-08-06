"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { v4 } from "uuid";

export default function NewNotes() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const router = useRouter();

  function HandleAddNote() {
  
    if (!title.trim()||!body.trim()) {
     
     return alert("Both field required");
       
     }
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    const newNote = {
      id: v4(),
      title: title,
      body: body,
      updatedAt: Date.now(),
      createdAt: Date.now(),
    };

    console.log(newNote);

    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));
    router.push("/");
  }

  return (
    <div>
      {/* Head Sec */}
      <div className="  bg-[#F7F7F7] flex  min-h-[70px] p-[10px]">
        <div className="max-w-[700px]  w-full items-center flex mx-auto">
          <Link href="/">
            <p className="text-[18px]">Home</p>
          </Link>
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
            className=" max-w-[700px] w-full  max-h-[1000px] h-full  p-[10px] bg-[#F7F7F7] text-[18px] rounded-[5px]"
          />
        </div>
        <div className="">
          <button
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
