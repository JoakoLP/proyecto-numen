import React from "react";
import { useState } from "react";
const Comentary = () => {
  const data = [{ text: "hola" }, { text: "hi" }, { text: "holi" }];
  const [search, setSearch] = useState([]);

  return (
    <div className="px-10 py-10">
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          setSearch([...search, ev.target.search.value]);
        }}
      >
        <input
          className="bg-purple-400"
          type="text"
          name="search"
          required
          placeholder="Escribe un comentario..."
          autoFocus
          size="42"
          autoComplete="off"
        ></input>
        <button type="submit" className="bg-purple-400">
          Comentar
        </button>
        <div className="">
          <ul className="flex flex-col space-y-4">
            {search
              .slice(0)
              .reverse()
              .map((coment, index) => (
                <li
                  key={index}
                  className="pt-5 pb-5  h-8  rounded-lg border-2 border-black shadow-black shadow-sm"
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
