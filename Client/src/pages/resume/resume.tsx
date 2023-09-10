import { useEffect } from "react";
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
  const fetch = useAppSelector((state) => state.user.fetch);
  const expires = useAppSelector((state) => state.user.expires);
  const navigate = useNavigate();
  useEffect(() => {
    if ((!loggedIn && fetch) || expires) {
      navigate("/");
    }
  }, [loggedIn, navigate, fetch, expires]);

  return (
    <section id="resume">
      <Form />
      <Wrapper />
    </section>
  );
};

export default Resume;
