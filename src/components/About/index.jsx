import React from "react";
import Table from "./Table";
import * as styles from "./styles";

const Github = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-github"
      viewBox="0 0 16 16"
      className="inline"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
};

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full text-purple-700 py-7">
        <h3 className="pb-2 text-3xl font-bold text-center text-purple-700">
          EQUIPO DE DESARROLLO
        </h3>
        <div className={styles.tablesCont}>
          <Table
            name="Joaquin Takara"
            img="https://i.imgur.com/FMh2V5R.jpg"
            linkedin="joaquintakara"
            github="JoakoLP"
            email="joakotakara@gmail.com"
            cellphone={{ number: 5492215018488, string: "54 9221 501-8488" }}
            instagram="joaquin_takara"
          />

          <Table
            name="Florencia Lopez"
            linkedin="blablabla"
            github="blablabla"
            email="blablabla@gmail.com"
            cellphone={{ number: 0, string: "" }}
            instagram=""
          />

          <Table
            name="Angel Ruiz Diaz"
            linkedin="blablabla"
            github="blablabla"
            email="blablabla@gmail.com"
            cellphone={{ number: 0, string: "" }}
            instagram=""
          />

          <Table
            name="Noé Navarrete"
            linkedin="blablabla"
            github="blablabla"
            email="blablabla@gmail.com"
            cellphone={{ number: 0, string: "" }}
            instagram=""
          />

          <Table
            name="Nahir Soto"
            linkedin="blablabla"
            github="blablabla"
            email="blablabla@gmail.com"
            cellphone={{ number: 0, string: "" }}
            instagram=""
          />
        </div>
      </div>
      <div className={styles.github}>
        <a href="https://github.com/JoakoLP/proyecto-numen" target="_blank">
          <span className="whitespace-nowrap hover:text-white">
            Repositorio de Github <Github />
          </span>
        </a>
      </div>
    </>
  );
};

export default About;