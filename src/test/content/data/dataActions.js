import { CREATE, UPDATE, DELETE } from "./dataConstants";

export const createData = data => {
  return {
    type: CREATE,
    payload: {
      data
    }
  }; 
};

export const updateData = data => {
  return {
    type: UPDATE,
    payload: {
      data
    }
  };
};

export const deleteData = dataId => {
  return {
    type: DELETE,
    payload: {
      dataId
    }
  };
};
