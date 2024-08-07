import { TextCase } from "@/types";
import { useCallback } from "react";

export const useText = () => {
  const getTextCaseClassName = useCallback((textCase: TextCase): string => {
    switch (textCase) {
      case "NORMAL_CASE":
        return "normal-case";
      case "UPPER_CASE":
        return "uppercase";
      case "CAPITALIZE":
        return "capitalize";
    }
  }, []);

  return {
    getTextCaseClassName,
  };
};
