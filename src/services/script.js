import { instanceApi } from "../lib/axios";

export const generateScript = async (data) =>
  instanceApi.post("/script/generate", data).then((res) => res.data);

export const deployScript = async (data) =>
  instanceApi.post("/script/deploy", data).then((res) => res.data);

export const getScripts = async () =>
  instanceApi.get("/script").then((res) => res.data);

export const getCustomScripts = async (
  status = "DEPLOYED",
  page = 1,
  limit = 10
) =>
  instanceApi
    .get(`/script?status=${status}&page=${page}&limit=${limit}`)
    .then((res) => res.data);

export const getScriptDetail = async (id) =>
  instanceApi.get(`/script/${id}`).then((res) => res.data);
