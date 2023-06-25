import axios, { AxiosInstance } from "axios";

const BASE_URL: string = "https://reqres.in/api";

const axiosInstance: AxiosInstance = axios.create({
	baseURL: BASE_URL,
});
export class API {
	fetchUsers({ page = 1, signal }: { page?: number; signal: any }) {
		return axiosInstance.get(`/users?page=${page}`, { signal });
	}
}
