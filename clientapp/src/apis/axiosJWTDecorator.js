import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import * as microsoftTeams from "@microsoft/teams-js";
import i18n from "i18n";

export class AxiosJWTDecorator {
  async get(url, handleError, needAuthorizationHeader = true, config) {
    try {
      if (needAuthorizationHeader) {
        config = await this.setupAuthorizationHeader(config);
      }
      return await axios.get(url, config);
    } catch (error) {
      if (handleError) {
        this.handleError(error);
        throw error;
      } else {
        throw error;
      }
    }
  }

  async delete(url, handleError, config) {
    try {
      config = await this.setupAuthorizationHeader(config);
      return await axios.delete(url, config);
    } catch (error) {
      if (handleError) {
        this.handleError(error);
        throw error;
      } else {
        throw error;
      }
    }
  }

  async post(url, data, handleError, config) {
    try {
      config = await this.setupAuthorizationHeader(config);
      return await axios.post(url, data, config);
    } catch (error) {
      if (handleError) {
        this.handleError(error);
        throw error;
      } else {
        throw error;
      }
    }
  }

  async put(url, data, handleError, config) {
    try {
      config = await this.setupAuthorizationHeader(config);
      return await axios.put(url, data, config);
    } catch (error) {
      if (handleError) {
        this.handleError(error);
        throw error;
      } else {
        throw error;
      }
    }
  }

  handleError(error) {
    if (error.hasOwnProperty("response")) {
      const errorStatus = error.response.status;
      if (errorStatus === 403) {
        window.location.href = `/errorpage/403?locale=${i18n.language}`;
      } else if (errorStatus === 401) {
        window.location.href = `/errorpage/401?locale=${i18n.language}`;
      } else {
        window.location.href = `/errorpage?locale=${i18n.language}`;
      }
    } else {
      window.location.href = `/errorpage?locale=${i18n.language}`;
    }
  }

  async setupAuthorizationHeader(config) {
    microsoftTeams.initialize();

    return new Promise((resolve, reject) => {
      const authTokenRequest = {
        successCallback: (token) => {
          if (!config) {
            config = axios.defaults;
          }
          config.headers["Authorization"] = `Bearer ${token}`;
          config.headers["Accept-Language"] = i18n.language;
          resolve(config);
        },
        failureCallback: (error) => {
          // When the getAuthToken function returns a "resourceRequiresConsent" error,
          // it means Azure AD needs the user's consent before issuing a token to the app.
          // The following code redirects the user to the "Sign in" page where the user can grant the consent.
          // Right now, the app redirects to the consent page for any error.
          console.error("Error from getAuthToken: ", error);
          window.location.href = `/signin?locale=${i18n.language}`;
        },
        resources: [],
      };
      microsoftTeams.authentication.getAuthToken(authTokenRequest);
    });
  }
}

const axiosJWTDecoratorInstance = new AxiosJWTDecorator();
export default axiosJWTDecoratorInstance;
