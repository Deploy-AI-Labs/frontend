import { instanceApi } from "../lib/axios";

export const createComment = async (data) =>
  instanceApi.post("/comment/create", data).then((res) => res.data);

export const deleteComment = async (id) =>
  instanceApi.delete(`/comment/${id}`).then((res) => res.data);
