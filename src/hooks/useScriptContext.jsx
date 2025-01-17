import { useContext } from "react";
import { ScriptContext } from "../context/scriptContext";

export const useScriptContext = () => {
  return useContext(ScriptContext);
};
