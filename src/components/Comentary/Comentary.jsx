import React from "react";
import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const Comentary = () => {
  const data = [{ text: "hola" }, { text: "hi" }, { text: "holi" }];
  const data2 = [];
  const [search, setSearch] = useLocalStorage("search", []);
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed z-50 inset-x-1 top-80 flex flex-row-reverse rounded-lg ">
      <button
        className={"h-10 rounded-xl bg-red-500 bg-purple-600 "}
        onClick={() => setOpen(false)}
      >
        <p className="rounded-lg w-6">
          <code className={" rounded-lg text-white text-2"}>&lt;</code>
        </p>
      </button>
      <form
        className={`${
          !open ? "w-80" : "w-0 "
        } h-auto  rounded-lg flex flex-col transition-all duration-500`}
        onSubmit={(ev) => {
          ev.preventDefault();
          setSearch([...search, ev.target.search.value]);
        }}
      >
        <div className="flex justify-between pl-1 w-80">
          <button
            className={
              "bg-red-400 p-1 z-90 bg-purple-600 text-white rounded-lg"
            }
            onClick={() => setOpen(true)}
          >
            x
          </button>
        </div>
        <textarea
          rows="60"
          cols="40"
          className={`${
            !open ? "w-80" : "w-0 hidden"
          } w-90 max-h-20 mb-1 px-2 hover:bg-purple-200 rounded-lg capitalize border-2 bg-white border-black shadow-black shadow-sm `}
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
          className={`${
            !open ? "w-50" : "w-0 hidden"
          } m-1 text-white rounded-full whitespace-nowrap bg-[#8a4af3] hover:bg-purple-900 font-bold sm:text-xs py-2 px-4 duration-300 hover:shadow-inner hover:shadow-neutral-800`}
        >
          Comentar
        </button>
        <div className="h-1/5 overflow-x-hidden rounded-xl">
          <ul className=" overflow-y-hidden gitflex flex-col flex-wrap space-y-1  ">
            {search
              .slice(0)
              .reverse()
              .map((coment, index) => (
                <li
                  key={index}
                  className=" p-4 rounded-lg max-w-80 flex break-all w-80 items-center rounded-lg border-2 bg-[#f0f2f5] hover:bg-purple-200 border-black shadow-black shadow-sm"
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
