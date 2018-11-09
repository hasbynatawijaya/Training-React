import {createReducer} from "../../common/util/reducerUtil";
import { CREATE, UPDATE, DELETE } from "./dataConstants";

const initialState = [
  {
    id: 1,
    name: "user1",
    job: "Job1"
  },
  {
    id: 2,
    name: "user2",
    job: "Job2"
  },
  {
    id: 3,
    name: "user3",
    job: "Job3"
  },
  {
    id: 4,
    name: "user4",
    job: "Job4"
  }
];

export const createData = (state, payload) => {
  return [...state, Object.assign({}, payload.data)];
};

export const updateData = (state, payload) => {
  return [
    ...state.filter(data => data.id !== payload.data.id),
    Object.assign({}, payload.data)
  ];
};

export const deleteData = (state, payload) => {
  return [...state.filter(data => data.id !== payload.dataId)];
};

export default createReducer(initialState, {
    [CREATE]: createData,
    [UPDATE]: updateData,
    [DELETE]: deleteData
  });
