import {
  HTMLAttributes,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactNode,
} from "react";

export interface IButton {
  children: ReactNode;
  onClick: () => void;
}

export type inputParam = {
  onChange: () => void;
};

export interface IInput extends InputHTMLAttributes<inputParam> {}
