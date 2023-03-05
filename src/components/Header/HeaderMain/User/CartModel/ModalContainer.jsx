import React from "react";
import * as styles from "./styles";
import { useDisableBodyScroll } from "./useDisableBodyScroll";
import { useEscapeToClose } from "./useEscapeToClose";

const ModalContainer = ({ children, status, setStatus }) => {
  useDisableBodyScroll(status);
  useEscapeToClose(status, setStatus);

  const x = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      class="bi bi-x"
      viewBox="0 0 16 16"
    >
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    </svg>
  );
  return (
    <>
      {status && (
        <div
          className={styles.overlay}
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
        >
          <div
            className={styles.modCont}
            style={{ boxShadow: "rgba(100,100,111, 0.2) 0px 7px 29px 0px" }}
          >
            <div className={styles.modHeader}>
              <h3 className={styles.modTitle}>Carrito de Compras</h3>
            </div>
            <button
              className={styles.closeBtn}
              onClick={() => setStatus(!status)}
            >
              <span className="flex flex-wrap content-center pl-[5px]">
                Esc
              </span>
              <span className={styles.closeBtnX}>{x}</span>
            </button>

            <div className={styles.childrenCont}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalContainer;
