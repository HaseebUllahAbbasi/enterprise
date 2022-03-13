import { useEffect, useState } from "react";
const Counter = () => {
  const [number, setNum] = useState(0);
  useEffect(() => { console.log("mounter")}, []);
  // it will be called as the compoment did mount

  useEffect(() => { console.log("updated ");
  return () => {
    console.log("unmounted");// will unmount
  };
}, [number]);
  // it will be called as the compoment did update

  return (
    <div className="display-4">
      Counter Practice With UseEffect
      <div className="text-center mt-5">number is {number}</div>
      <div className="row p-5">
            <button className="btn btn-info m-3" onClick={()=>
            {
                setNum(number+1);

            }}>
                +
            </button>
            <button className="btn btn-info m-3" onClick={()=>
            {
                setNum(number-1);
                
            }}>
                -
            </button>
            
      </div>
    </div>
  );
};
export default Counter;
