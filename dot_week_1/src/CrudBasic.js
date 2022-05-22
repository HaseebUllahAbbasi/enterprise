import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Lottie from 'react-lottie';
import * as animationData from './assets/noData.json'



const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};


const CrudBasic = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [data, setData] = useState();
  const [id, setId] = useState();
  const [submit, setSubmit] = useState(false);
  useEffect(async () => {
    const data = await fetch(`http://localhost:3001/`);
    const json = await data.json();
    // console.log(json)
    setData(json);
  }, [data]);

  return (
    <>
      <motion.div
        className="container mt-5"
        animate={{ y: 30 }}
        transition={{
          type: "spring",
          delay: 0.01,
          duration: 2,
          stiffness: 190,
        }}
      >
        <div className="container ">
          <div className="row my-3">
            <form onSubmit={(e)=>{
              e.preventDefault();
              if (name == "" || email == "") {
                alert("Please Enter Data");
                return;
              }
              const data = { name: name, email: email };

              fetch(`http://localhost:3001/`, {
                method: "POST", // or 'PUT'
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log("Success:", data);
                })
                .catch((error) => {
                  console.error("Error:", error);
                });
              setData(0);
              setName("");
              setemail("");
            }}>
<div className="col-md-6 offset-md-3  col-sm-12 col-xs-12">
              <input
                className="form-control my-1"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="name"
                type="text"
                name="name"
              />
              <input
                className="form-control my-1"
                value={email}
                type="email"
                placeholder="email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                name="email"
              />
              <div className="text-center">
                <div className="d-flex justify-content-around">
                  <button
                    hidden={!submit}
                    onClick={() => {
                      setSubmit(false);
                    }}
                    his
                    className="btn btn-info"
                  >
                    {" "}
                    Cancel
                  </button>{" "}
                  <button
                    hidden={!submit}
                    className="btn btn-success"
                    onClick={() => {
                      const data = { id: id, name: name, email: email };
                      setSubmit(true);
                      fetch(`http://localhost:3001/`, {
                        method: "PUT", // or 'PUT'
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data),
                      })
                        .then((response) => response.json())
                        .then((data) => {
                          console.log("Success:", data);
                        })
                        .catch((error) => {
                          console.error("Error:", error);
                        });
                      setData(0);
                      setName("");
                      setemail("");
                    }}
                  >
                    Update
                  </button>
                </div>
                <button
                  hidden={submit}
                  className="btn btn-primary"
                  onClick={() => {
                    
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
            </form>
            
          </div>
        </div>
        <div className="row">
          {data  ?
            data.list_data.map((item) => (
              <motion.div
                whileHover={{ scale: 1.2 }}
                key={item._id}
                className="col-md-4 col-sm-6 my-3 col-xs-12"
              >
                <div className="card">
                  <div className="card-header">{item.name}</div>
                  <div className="card-body">{JSON.stringify(item)}</div>
                  <div className="card-footer">
                    <div className="d-flex justify-content-between">
                      {" "}
                      <button
                        className="btn btn-warning"
                        onClick={() => {
                          setSubmit(true);
                          setName(item.name);
                          setemail(item.email);
                          setId(item._id);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          fetch(`http://localhost:3001/${item._id}`, {
                            method: "Delete", // or 'PUT'
                            headers: {
                              "Content-Type": "application/json",
                            },
                          })
                            .then((response) => response.json())
                            .then((data) => {
                              console.log("Success:", data);
                            })
                            .catch((error) => {
                              console.error("Error:", error);
                            });
                          setData(0);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )): <div> <Lottie width={"400px"} className="card card-body" options={defaultOptions}
           
            isStopped={false}
            isPaused={false}/>  </div>
          
          }
        </div>
      </motion.div>
    </>
  );
};
export default CrudBasic;
