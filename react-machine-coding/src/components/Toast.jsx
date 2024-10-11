import { useState } from "react";

export default function Toast() {
const [showToast, setShowToast] = useState(false)

  return (
    <>
{showToast &&      <div className="toast">
        message <span onClick={()=>setShowToast(false)}>x</span>
      </div>}

      <button onClick={()=>setShowToast(true)}>success</button>
      <button>info</button>
      <button>error</button>
      <button>warning</button>
    </>
  );
}
