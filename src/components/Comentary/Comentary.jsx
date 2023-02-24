import React from "react";
import { useState } from "react";
const Comentary = () => {
  const data = [{ text: "hola" }, { text: "hi" }, { text: "holi" }];
  const [search, setSearch] = useState([]);

  return (
    <div className="flex max-w-50 flex flex-row-reverse rounded-lg">
      <button>
        <p>
          <code className="text-white text-2xl">&lt;</code>
        </p>
      </button>

      <form
        className=" bg-[#8a4af3] rounded-lg "
        onSubmit={(ev) => {
          ev.preventDefault();
          setSearch([...search, ev.target.search.value]);
        }}
      >
        <textarea
          rows="60"
          cols="40"
          className="h-12 mb-1 px-2 rounded-lg capitalize border-2 bg-white border-black shadow-black shadow-sm"
          type="text"
          name="search"
          required
          placeholder="Escribe un comentario..."
          autoFocus
          size="42"
          autoComplete="off"
        ></textarea>
        <button
          type="submit"
          className="text-white rounded-full whitespace-nowrap bg-[#8a4af3] hover:bg-purple-900 font-bold sm:text-xs py-2 px-4  duration-300 hover:shadow-inner hover:shadow-neutral-800"
        >
          Comentar
        </button>
        <div className="overflow-y-auto overflow-x-hidden max-h-80">
          <ul className="flex flex-col space-y-1 ">
            {search
              .slice(0)
              .reverse()
              .map((coment, index) => (
                <li
                  key={index}
                  className="h-16 w-full px-2 flex items-center capitalize md:w-auto rounded-lg border-2 text-justify bg-white border-black shadow-black shadow-sm"
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
