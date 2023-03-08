import React from "react";
import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
const Comentary = () => {
  const [search, setSearch] = useLocalStorage("search", []);
  const [open, setOpen] = useState(true);

  return (
    <div className={`${!open ? "" : " w-min"
      } fixed z-10 flex flex-col items-end min-h-fit max-h-min rounded-sm bottom-2 right-0 sm:bottom-4 md:bottom-6 lg:bottom-8`}>
      <div className="">
        <button
          className={`{${!open ? "" : " mr-2 sm:mr-4 md:mr-6 lg:mr-8"
            } h-8 lg:h-10 w-8 lg:w-10 flex justify-center items-center rounded-xl bg-purple-600 `}
          onClick={() => setOpen(!open)}
        >
          <p className="w-6 rounded-lg">
            <code className={" rounded-lg text-white text-2"}>
              <FontAwesomeIcon icon={faComment} />
            </code>
          </p>
        </button>
      </div>
      <div className={`${!open ? "" : "w-0 h-0 overflow-hidden invisible"
        } z-10 flex flex-row-reverse rounded-lg w-min`}>
        <form
          className={`${!open ? "w-60 md:w-80 border-2 h-min" : ""
            } bg-purple-400 bg-opacity-60 border-purple-900 max-h-[290px] rounded-lg flex flex-col transition-all duration-500`}
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
          <div className="overflow-x-hidden max-h-[50%] rounded-xl">
            <ul className="flex-col flex-wrap max-h-[100%] mr-1 space-y-1 rounded-xl gitflex">
              {search
                .slice(0)
                .reverse()
                .map((coment, index) => (
                  <li
                    key={index}
                    className="flex items-center p-1 text-xs break-all border-2 border-black border-purple-300 rounded-lg shadow-sm w-80 bg-slate-100 hover:bg-purple-200 shadow-black"
                  >
                    <p className="pt-2 pb-2 pl-2 pr-3 rounded-lg bg-slate-200 w-72">
                      {coment.charAt(0).toUpperCase() + coment.slice(1)}
                    </p>
                  </li>
                ))}
            </ul>
          </div>
        </form>
      </div>
    </div >
  );
};

export default Comentary;
