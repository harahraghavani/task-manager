import { RESPONSE_OK } from "../constants/appConstants";
import { convertObjToQueryString } from "../utils/utils";
import { axiosInstance } from "./apiInterceptors";

export const api = async ({
    endpoint,
    payloadData: data,
    id = null,
    params = null,
}) => {
    const { method, url } = endpoint;

    let res = null;

    try {
        let obj = {
            data,
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            url: `${process.env.REACT_APP_API_BASE_URL}${url}${id ? id : ""}${params ? convertObjToQueryString(params) : ""
                }`,
        };

        if (method === "GET" && data && typeof data === "string") {
            obj.url += data;
        }
        res = await axiosInstance(obj);
    } catch (err) {
        res = err.response;
        if (res?.status !== RESPONSE_OK) {
        }
    }
    return res;
};