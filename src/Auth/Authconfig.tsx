export const msalConfig = {
  auth: {
    clientId: "d009d3ab-731e-4a34-9579-b72655c8ddad",
    authority:
      "https://login.microsoftonline.com/832b3bfb-fb20-4b76-8ace-75b2ab98dcd5/",
    redirectUri: "http://localhost:3000/",
  },
  cache: {
    cacheLocation: "localStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

export const loginRequest = {
  scopes: ["User.Read"],
};

// demo@myoffice3749.onmicrosoft.com
// Lloyd@123