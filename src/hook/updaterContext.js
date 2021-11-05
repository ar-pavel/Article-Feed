import React from "react";

const UpdaterContex = React.createContext({
  updateStatus: 0,
  createStatus: 0,
  setUpdateStatus: () => {},
  setCreateStatus: () => {},
});

export default UpdaterContex;
