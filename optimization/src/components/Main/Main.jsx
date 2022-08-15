import react, { useState } from "react";
import { ChildOne } from "../ChildOne/ChildOne";

export const Main = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h3>Input text : {input}</h3>
      <ChildOne />
    </div>
  );
};
