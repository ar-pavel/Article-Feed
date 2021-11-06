import React from "react";

const UpdaterContex = React.createContext({
  updateStatus: 0,
  setUpdateStatus: () => {},
});

export default UpdaterContex;
