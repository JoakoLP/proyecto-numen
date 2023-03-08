import React from "react";
import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
const Comentary = () => {
  const [search, setSearch] = useLocalStorage("search", []);
  const [open, setOpen] = useState(true);

  return (
    <div className="fixed z-10 flex flex-row-reverse mt-48 rounded-sm inset-x-1 top-64">
      <div className="">
        <button
          className={`h-8 rounded-xl bg-red-500  bg-purple-600`}
          onClick={() => setOpen(!open)}
        >
          <p className="w-6 rounded-lg">
            <code className={" rounded-lg text-white text-2"}>
              <FontAwesomeIcon icon={faComment} />
            </code>
          </p>
        </button>
      </div>
      <div className="fixed z-10 flex flex-row-reverse mt-56 rounded-lg inset-x-1 top-64 ">
        <form
          className={`${!open ? "w-60 md:w-80 border-2" : "w-0  "
            } max-h-96 bg-purple-300 bg-opacity-40 border-purple-900 rounded-lg flex flex-col transition-all duration-500`}
          onSubmit={(ev) => {
            ev.preventDefault();
            setSearch([...search, ev.target.search.value]);
          }}
        >
          <div className={`flex pl-16 md:justify-center md:pl-0 w-80`}>
            <p className="text-lg font-medium text-white">Comentarios</p>
          </div>
          <textarea
            rows="60"
            cols="40"
            className={`${!open ? "w-57 border-2 px-2 mb-1 md:w-76" : " overflow-y-hidden"
              } max-h-20 hover:bg-purple-200 rounded-lg  bg-slate-100 border-purple-500 shadow-black shadow-sm `}
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
            className={`${!open ? "w-50" : " "
              } m-1 text-white rounded-full whitespace-nowrap bg-[#8a4af3] hover:bg-purple-900 font-bold sm:text-xs py-2 mb-2 px-4 transition-all duration-500 hover:shadow-inner hover:shadow-neutral-800`}
          >
            Comentar
          </button>
          <div className="overflow-x-hidden  rounded-xl">
            <ul className="flex-col flex-wrap mr-1 space-y-1 overflow-x-hidden overflow-y-hidden  rounded-xl gitflex">
              {search
                .slice(0)
                .reverse()
                .map((coment, index) => (
                  <li
                    key={index}
                    className="flex items-center p-1 text-xs break-all border-2 border-black border-purple-300 rounded-lg shadow-sm w-80 bg-slate-100 hover:bg-purple-200 shadow-black"
                  >
                    <p className="w-full pt-2 pb-2 pl-2 pr-3 rounded-lg bg-slate-200 w-72 ">
                      {coment.charAt(0).toUpperCase() + coment.slice(1)}
                    </p>
                  </li>
                ))}
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comentary;
