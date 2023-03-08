import { useNavigate } from "react-router";

export const SearchOnEnterMobile = (
  searchField,
  handleClick,
  status,
  setStatus
) => {
  const navigate = useNavigate();
  const close = (enter) => {
    if (enter.key === "Enter" && searchField != "") {
      window.removeEventListener("keydown", close, true);
      handleClick();
      setStatus(false);
      navigate("/search");
    }
  };
  window.addEventListener("keydown", close, true);
};
