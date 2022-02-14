import axios, { AxiosInstance } from "axios";


const axiosClient: AxiosInstance = axios.create();
const isDev = process.env.NODE_ENV === "development";

class ServiceApi {
  public base = "v1";
  public url = "";

  // SELECT BASE URL VERSION
  service(version: string = this.base) {
    axiosClient.defaults.baseURL = isDev
      ? process.env.REACT_APP_BASE_DEV_URL
      : process.env.REACT_APP_BASE_PROD_URL;

    this.url = version === "new"
      ? `/${process.env.REACT_APP_API_V2}`
      : `/${process.env.REACT_APP_API_V2}`;
    return this;
  }

  // APPEND URL TO API URL
  appendToURL(url: string) {
    return (`${this.url}${url}`);
  }

  // GET API REQUEST
  async fetch(url: string, resolve: boolean = true) {
    try {
      const response = await axiosClient.get(
        this.appendToURL(url),
        this.setupHeaders()
      );
      return resolve ? response?.data : response;
    } catch(err) {
      return this.handleErrors(err);
    }
  }

  // POST API REQUEST
  async push(url: string, payload: any = null, resolve = true, is_attached = false) {
    try {
      const response = await axiosClient.post(
        this.appendToURL(url),
        payload,
        this.setupHeaders(is_attached)
      );

      return resolve ? response?.data : response;
    } catch(err) {
      return this.handleErrors(err);
    }
  }

  // PUT API REQUEST
  async update(url: string, payload: any = {}, resolve = true, is_attached = false) {
    try {
      const response = await axiosClient.put(
        this.appendToURL(url),
        payload,
        this.setupHeaders(is_attached),
      );

      return resolve ? response?.data : response;
    } catch(err) {
      return this.handleErrors(err);
    }
  }

  // DELETE API REQUEST
  async remove(url: string, payload: any = {}, resolve = true) {
    try {
      const response = await axiosClient.delete(
        this.appendToURL(url),
        {
          data: payload,
          ...this.setupHeaders(),
        }
      );

      return resolve ? response?.data : response;
    } catch(err) {
      return this.handleErrors(err);
    }
  }

  // SETUP HEADERS FOR SCENARIOS LIKE IMAGE UPLOAD
  setupHeaders(is_attached: boolean = false) {
    return is_attached
      ? {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${'token'}`
          },
        }
      : {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${'token'}`
          },
        };
  }

  // HANDLE API REQUEST ERRORS
  handleErrors(err: any) {
    // Alert an error message
    return err?.response;
  }
}

export default ServiceApi;


// YOU CAN USE THIS API SERVICE LIKE SO
// const $api = new ServiceApi();

// let response = $api.service('new') // new or old
//   .fetch('/posts');

// console.log(response);