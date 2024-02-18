import { apiEndPoints } from "../constants/apiEndPoints";
import { API_METHOD_GET, API_METHOD_POST } from "../constants/appConstants";

/** AUTHENTICATION API */
export const SIGNUP_USER_API = {
    url: apiEndPoints.ENDPOINTS_SIGNUP_USER,
    method: API_METHOD_POST,
    isMultipart: false,
    showToast: true,
    ToastMessages: "",
}

export const LOGIN_USER_API = {
    url: apiEndPoints.ENDPOINTS_LOGIN_USER,
    method: API_METHOD_POST,
    isMultipart: false,
    showToast: true,
    ToastMessages: "",
}

export const LOGOUT_USER_API = {
    url: apiEndPoints.ENDPOINTS_LOGOUT_USER,
    method: API_METHOD_POST,
    isMultipart: false,
    showToast: true,
    ToastMessages: "",
}

/** TASK API */

export const GET_ALL_TASKS_API = {
    url: apiEndPoints.ENDPOINT_GET_ALL_TASKS,
    method: API_METHOD_GET,
    isMultipart: false,
    showToast: true,
    ToastMessages: "",
}

export const CREATE_TASK_API = {
    url: apiEndPoints.ENDPOINTS_CREATE_TASK,
    method: API_METHOD_POST,
    isMultipart: false,
    showToast: true,
    ToastMessages: "",
}

export const EDIT_TASK_API = {
    url: apiEndPoints.ENDPOINTS_EDIT_TASK,
    method: API_METHOD_POST,
    isMultipart: false,
    showToast: true,
    ToastMessages: "",
}

export const DELETE_TASK_API = {
    url: apiEndPoints.ENDPOINTS_DELETE_TASK,
    method: API_METHOD_POST,
    isMultipart: false,
    showToast: true,
    ToastMessages: "",
}