import axios, { AxiosResponse } from "axios";

export const getAppointments = async (
  token: string
): Promise<AxiosResponse> => {
  const result = await axios.get("http://localhost:3000/session/list", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};
