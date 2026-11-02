import { useState } from "react";

const Booleannulish = () => {
  const [condition, setCondition] = useState(undefined);

  const handlenull = () => {
    setCondition("Hello Mugundhan");
  };

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold">
          {condition ?? "This is Mugundhan"}
        </h1>

        <button
          className="m-3 border-2 p-2 text-2xl"
          onClick={handlenull}
        >
          Click Me
        </button>
      </div>
    </>
  );
};

export default Booleannulish