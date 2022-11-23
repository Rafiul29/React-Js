import React, { useEffect, useState } from "react";

const USers = () => {

  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [isload, setIsload] = useState(true);

  // const fetchUsers=()=>{
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((response) =>{
  //         if(!response.ok) throw new Error("Something went wrong")
  //        return response.json()
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         setUsers(data);
  //         setIsload(false)
  //       })
  //       .catch((e) => {
  //        setError(e.message)
  //        setIsload(false)
  //       });
  // }

  const fetchUsers2 = async()=> {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) throw new Error("Somethig Went Wrong");
      const data = await response.json();
      setUsers(data);
      setIsload(false);
    } catch (error) {
      setError(error.message);
      setIsload(false);
    }
  };



  useEffect(() => {
    fetchUsers2();
    // fetchUsers()
  }, []);



  return (
    <div>
      {isload ? <p>Loading ........</p> : null}

      {error ? (
        <p>{error}</p>
      ) : (
        users.map((user) => {
          return (
            <div key={user.id}>
              <h2>{user.id}</h2>
              <h3>{user.name}</h3>
              <h4>{user.email}</h4>
              <h5>{user.phone}</h5>
            </div>
          );
        })
      )}
    </div>
  );
};

export default USers;
