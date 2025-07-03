import { useEffect, useState } from "react";


const User = ({name}) => {
  const [count] = useState(0);

  useEffect(() => {
    //
  }, []);
  
  return (
    <div className="user-card">
      <h1>count = {count} </h1>
      <h2>Name:{name}</h2>
      {/* <h2>Name:Sheikh ASif</h2> */}
      <h3>Location:Lucknow</h3>
      <h4>Contact:mdasif74083@gmail.com</h4>
    </div>
  );
};

export default User;
