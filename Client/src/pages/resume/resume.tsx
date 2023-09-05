import type { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../slices/store";
import "./resume.css";
import Form from "./sub/form/form";
import Wrapper from "./sub/preview-wrapper/preview-wrapper";
const Resume = () => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const loggedIn = useAppSelector((state) => state.user.loggedIn);
  const navigate = useNavigate();
  if (!loggedIn) {
    navigate("/");
  }
  return (
    <section id="resume">
      <Form />
      <Wrapper />
    </section>
  );
};

export default Resume;
