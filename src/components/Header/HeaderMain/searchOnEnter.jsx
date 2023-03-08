import { useNavigate } from "react-router";

export const SearchOnEnter = (searchField, handleClick) => {
  const navigate = useNavigate();
  const close = (enter) => {
    if (enter.key === "Enter" && searchField != "") {
      window.removeEventListener("keydown", close, true);
      handleClick();
      navigate("/search");
    }
  };
  window.addEventListener("keydown", close, true);
};
