import {
  DEV_BACKEND_URL,
  DEV_BACKEND_URL_LOCALHOST,
  PROD_BACKEND_URL,
  PROD_BACKEND_URL_LOCALHOST,
} from "@env";

const isLocalhost = false; // TODO: Change this to true when running locally

const devEnvirontment = {
  BACKEND_URL: isLocalhost ? DEV_BACKEND_URL_LOCALHOST : DEV_BACKEND_URL,
};

const prodEnvirontment = {
  BACKEND_URL: isLocalhost ? PROD_BACKEND_URL_LOCALHOST : PROD_BACKEND_URL,
};

export default __DEV__ ? devEnvirontment : prodEnvirontment;
