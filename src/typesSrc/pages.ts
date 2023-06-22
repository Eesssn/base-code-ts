import { Dispatch, SetStateAction } from "react";

export interface IWrapper {
  setPage: Dispatch<SetStateAction<string>>;
  page: string;
}
export interface IPage {
  setPage: Dispatch<SetStateAction<string>>;
}
