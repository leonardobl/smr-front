import { useState } from "react";

export const useButtonGroupForm = () => {
  const [btnActiveNumber, setBtnActiveNumber] = useState(1);
  return { btnActiveNumber, setBtnActiveNumber };
};
