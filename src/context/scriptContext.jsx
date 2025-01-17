import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deployScript, generateScript } from "../services/script";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { generateRandomUser } from "../lib/utils";
import { getAssistantDetail } from "../services/assistant.js";

export const ScriptContext = createContext(null);

export const ScriptContextProvider = ({ children }) => {
  const [message, setMessage] = useState([]);
  const [script, setScript] = useState("");
  const [title, setTitle] = useState("");
  const [temp, setTemp] = useState({});
  const [assistant, setAssistant] = useState(null);
  const location = useLocation();
  const assistantId = location.pathname.slice(11);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: (data) => generateScript(data),
    onError: (error) => {
      if (error instanceof AxiosError) toast.error(error.message);
      else toast.error("Something went wrong");
    },
    onSuccess: (data) => {
      const newAssistantStrategy = {
        role: "assistant",
        content: data.explanation,
      };

      setMessage((prevMessage) => [...prevMessage, newAssistantStrategy]);
      setTemp(data);

      if (data?.generatedScript !== "N/A") setScript(data.generatedScript);
      if (data?.title !== "N/A") setTitle(data.title);
    },
  });

  // scripts

  const { isLoading: isLoadingDeploy, mutateAsync: mutateAsyncDeploy } =
    useMutation({
      mutationFn: (data) => deployScript(data),
      onError: (error) => {
        if (error instanceof AxiosError) toast.error(error.message);
        else toast.error("Something went wrong");
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["deployed", "launched"] });
      },
    });

  const apiCall = async (strategyDescription) => {
    try {
      const newStrategy = { role: "user", content: strategyDescription };
      setMessage((prevMessage) => [...prevMessage, newStrategy]);
      return await mutateAsync({
        strategyDescription: strategyDescription,
        threadId: temp?.threadId ?? "",
        assistantId: assistantId,
      });
    } catch (error) {
      if (error instanceof AxiosError) toast.error(error.message);
      else toast.error("Something went wrong");
    }
  };

  const deploy = async () => {
    try {
      if (script.length === 0) {
        return toast.error("Cannot deploy");
      }
      const author = generateRandomUser();
      await mutateAsyncDeploy({
        assistantId: assistantId,
        explanation: temp.explanation,
        title: temp.title,
        script: script,
        tags: temp.tags,
        author: author,
      });
      toast.success("Deploy succes");
      navigate("/strategy-feed");
      return;
    } catch (error) {
      if (error instanceof AxiosError) toast.error(error.message);
      else toast.error("Something went wrong");
    }
  };

  // Assistant
  const { isLoading: isLoadingAssistant, mutateAsync: mutateAsyncAssistant } =
    useMutation({
      mutationFn: (id) => getAssistantDetail(id),
      onError: (error) => {
        if (error instanceof AxiosError) toast.error(error.message);
        else toast.error("Something went wrong");
      },
      onSuccess: (data) => {
        setAssistant(data);
      },
    });

  const fetchAssistant = async () => {
    try {
      await mutateAsyncAssistant(assistantId);
    } catch (error) {
      if (error instanceof AxiosError) toast.error(error.message);
      else toast.error("Something went wrong");
    }
  };
  const value = {
    apiCall,
    deploy,
    fetchAssistant,
    isLoading: isLoading || isLoadingDeploy || isLoadingAssistant,
    message,
    script,
    title,
    assistant,
  };

  return (
    <ScriptContext.Provider value={value}>{children}</ScriptContext.Provider>
  );
};
