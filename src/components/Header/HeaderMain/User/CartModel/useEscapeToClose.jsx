export const useEscapeToClose = (status, setStatus) => {
  if (status == true) {
    const close = (esc) => {
      if (esc.key === "Escape") {
        window.removeEventListener("keydown", close, true);
        setStatus(false);
      }
    };
    window.addEventListener("keydown", close, true);
  }
};
