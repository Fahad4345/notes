"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
export default function Home() {
  const [notes, setNote] = useState([]);
  const [Search, setSearch] = useState("");
    const [ filterNotesList, setfilterNotes] = useState([]);


  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    setNote(notes);
    
  }, []);
  function SelectOption(e) {
    
    const selectElement = e.target.value

    if (selectElement == "Alphabet")
    
    {
      
      const sortedNotes = [...notes].sort((a, b) =>
        a.title.localeCompare(b.title));
      setNote(sortedNotes);
     
    }
    else if (selectElement == "Recently Created") {
      console.log("recently added")
        const sortedNotes = [...notes].sort((a, b) =>
        new Date(b.createdAt) - new Date(a.createdAt)
      );
      setNote(sortedNotes)
      
    }
    else if (selectElement == "Last Edited") {
      console.log("Last Edited")
 const sortedNotes = [...notes].sort((a, b) =>
        new Date(b.updatedAt) - new Date(a.updatedAt)
      );
      setNote(sortedNotes)
      
    }
   
  }
  function FilterTitle(e) {
    const keyword = e.target.value;
    setSearch(keyword);
    
    const filterNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setfilterNotes(filterNotes);

     
   }
 const NoteToDisplay= Search ? filterNotesList:notes 
  return (
    <div>
      {/* Head Sec */}
      <div className=" bg-[#F7F7F7] w-full flex items-center min-h-[70px] p-[10px] ">
        <div className=" flex w-full  justify-center  gap-x-[50px]  mx-auto">
          <input
            type="text"
             value={Search}
            onChange={FilterTitle}
            placeholder="Filter by"
            className="w-[200px]   rounded-[8px] bg-white  px-[8px] py-[8px]"
          />
          <select
            onChange={SelectOption}

            
            name="sortBy"
            id="sortBy"
            className="bg-white w-[200px] rounded-[8px] px-[8px] py-[8px]"
          >
            <option value="Alphabet" >
              Alphabet
            </option>
            <option value="Last Edited">Last Edited</option>
            <option value="Recently Created">Recently Created</option>
          </select>
        </div>
      </div>{" "}
      
      <div className=" max-w-[700px] flex w-full  flex-col gap-[10px] mx-auto mt-[20px]">
        {NoteToDisplay.map((note) => {
          return (
            <Link key={note.id} href={`${note.id}`}>
              <div className=" flex cursor-pointer flex-col gap-[10px]  bg-[#F7F7F7] p-[10px] max-">
                <div className=" flex flex-row">
                  <h1>{note.title} </h1>
                </div>
                <div>
                  <h1>last Edited:{note.createdAt}</h1>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {/* Button */}
      <div className="fixed bottom-0 right-0 m-[20px]">
        <Link href="/NewNotes">
          <button className="hover:bg-black text-white bg-[#437993] rounded-[8px] text-[18px] p-[20px]  cursor-pointer">
            Create New Note
          </button>
        </Link>
      </div>
    </div>
  );
}
