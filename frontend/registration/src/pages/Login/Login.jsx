import {react, useState} from 'react'
import axios from 'axios'

export const Login = () =>{
    const [values, setValues] = useState({
        email: "",
        password: "",
      })
      const handleEvent = (e) => {
        setValues({ ...values, [e.target.name] : [e.target.value] });
        console.log(e.target.name, e.target.email);
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/login", values)
        .then((res)=> console.log('Success'))
        .catch((err) => console.log('error', err))
      };
    return(
        <>
             <div className=" w-full bg-neutral-400 h-96 flex justify-center align-middle rounded-xl">
        <form action="" className="flex flex-col justify-center align-middle">
         <h1 className='mb-5 text-5xl '>Login</h1>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email: </strong>
            </label>
            <input
              type="text"
              name="email"
              placeholder="Enter email"
              id=""
              className=" rounded-md h-8"
              onChange={handleEvent}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password: </strong>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              id=""
              className="form-control rounded-md h-8 "
              onChange={handleEvent}
            />
          </div>
          <button type="submit" onClick={handleSubmit} className="btn btn-scuccess w-100 rounded-0">
            Sign up
          </button>
          <p>You are agree to our terms and policies</p>
          <a
            to="/"
            className="btn btn-default w-100 bg-light rounded-0 text-decoration-none border"
          ></a>
        </form>
      </div>
        </>
    )
}