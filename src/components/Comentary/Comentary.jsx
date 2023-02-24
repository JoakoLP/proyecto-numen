import React from "react";
import { useState } from "react";
const Comentary = () => {
  const data = [{ text: "hola" }, { text: "hi" }, { text: "holi" }];
  const [search, setSearch] = useState([]);

  return (
    <div className="w-full px-10 py-10">
      <form
        className="w-screen"
        onSubmit={(ev) => {
          ev.preventDefault();
          setSearch([...search, ev.target.search.value]);
        }}
      >
        <input
          className=" w-screen"
          type="text"
          name="search"
          required
          placeholder="Escribe un comentario..."
          autoFocus
          size="42"
          autoComplete="off"
        ></input>
        <button type="submit" className="border-black shadow-black">
          Comentar
        </button>
        <div className="">
          <ul className="flex flex-col space-y-4 ">
            {search
              .slice(0)
              .reverse()
              .map((coment, index) => (
                <li
                  key={index}
                  className="  h-8  rounded-lg border-2 text-justify border-black shadow-black shadow-sm"
                >
                  {coment}
                </li>
              ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Comentary;
