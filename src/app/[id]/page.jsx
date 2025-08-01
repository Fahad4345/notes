"use client";
import Link from "next/link";
import { timeConvertion } from "../../lib/util";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditNote() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [createdAt, setDate] = useState("");
  const [foundnotes, setFoundNotes] = useState([]);
  const [foundObject, setFoundObject] = useState([]);

  const params = useParams();
  let timeString = timeConvertion(foundObject.updatedAt);

  useEffect(() => {
    const foundnotes = JSON.parse(localStorage.getItem("notes")) || [];
    const foundObject = foundnotes.find((note) => note.id == params.id);
    setFoundNotes(foundnotes);
    setFoundObject(foundObject);

    if (foundObject) {
      setTitle(foundObject.title);
      setBody(foundObject.body);
      setDate(foundObject.createdAt);
    } else {
    }
  }, [params]);
  function handleRemove() {
    const updatedNotes = foundnotes.filter((note) => note.id != params.id);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setFoundNotes(updatedNotes);
  }

  function handleupdate() {
    const updatedNotes = foundnotes.map((note) => {
      if (note.id === params.id) {
        return {
          id: note.id,
          title: title,
          body: body,
          updatedAt: Date.now(),
          createdAt: createdAt,
        };
      }
      return note;
    });
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setFoundNotes(updatedNotes);
  }

  return (
    <div>
      <div className=" bg-[#F7F7F7] w-full flex items-center min-h-[70px] p-[10px]">
        <div className="max-w-[700px] flex w-full gap-[20px] mx-auto justify-between">
          <Link href="/">
            <p className="text-[18px] ">Home</p>
          </Link>
          <h1 className="text-[18px] ">Last Edited:{timeString}</h1>
        </div>
      </div>
      <div className="flex mx-auto flex-col max-w-[700px] w-full gap-[16px] mt-[20px] p-[16px]">
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Type your Notes title"
            className="max-w-[700px] w-full p-[10px] bg-[#F7F7F7] text-[18px]  rounded-[5px]"
          />
        </div>
        <div>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Type your notes body"
            className="text-start max-w-[700px] w-full bg-[#F7F7F7] p-[10px] text-[18px]   rounded-[5px]"
          />
        </div>
        <div className="flex justify-between">
          <button
            className=" rounded-[5px] bg-[#437993]  hover:bg-black text-white text-[18px]  p-[10px]"
            onClick={handleRemove}
          >
            Remove Note
          </button>
          <button
            className=" rounded-[5px] bg-[#437993] hover:bg-black text-white text-[18px]  p-[10px] "
            onClick={handleupdate}
          >
            Update Note
          </button>
        </div>
      </div>
    </div>
  );
}
