import { instanceApi } from "../lib/axios";

export const getAssistant = async () =>
  instanceApi.get("/assistant").then((res) => res.data);

export const getAssistantDetail = async (id) =>
  instanceApi.get(`/assistant/${id}`).then((res) => res.data);
