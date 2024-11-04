import { useState } from "react";

export const useHome = () => {
  const [formNumber, setFormNumber] = useState(1);

  return { formNumber, setFormNumber };
};
