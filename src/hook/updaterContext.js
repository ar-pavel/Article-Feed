import React from "react";

const UpdaterContex = React.createContext({
  updateStatus: false,
  setUpdateStatus: () => {},
});

export default UpdaterContex;
