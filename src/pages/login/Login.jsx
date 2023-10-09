import { useContext, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { MyAuthContext } from "../../contextApi/MyAuthProvider"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [message, setMessage] = useState('')
  const {myLogin} = useContext(MyAuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  console.log("login", location)

  const handleLogin=(e)=>{
      e.preventDefault()
      const myForm = new FormData(e.currentTarget)
      const email = myForm.get("email")
      const password = myForm.get("password")
      setMessage('')
      myLogin(email, password)
          .then(()=>{
              // toast.success("Login Successfull!")
              navigate(location?.state ? location?.state: '/')
          })
          .catch(err=>setMessage(err.message))
  }

  return (
    <div className="w-1/3 mx-auto bg-gray-100 rounded-md p-10">
      <p className="text-red-700 font-bold my-8">{message}</p>
      <div>
      <h2 className="text-3xl font-bold text-center mb-3">Login Now!</h2>
      <div className="w-full h-[2px] bg-priColor"></div>
      <form onSubmit={handleLogin} className="mt-4 text-xl w-[90%] mx-auto">
        <label htmlFor="">Enter Email</label><br />
        <input type="email" name="email" placeholder="Email" className="w-full h-10 pl-4 mt-1 mb-3 rounded text-[16px]"/> <br />

        <label htmlFor="">Enter Password</label><br />
        <input type="password" name="password" placeholder="Password" className="w-full h-10 pl-4 mt-1 mb-3 rounded text-[16px]" /> <br />

        <input type="submit" value="Login" className="px-6 py-2 text-xl text-white bg-priColor rounded"/>
      </form>
      <p className="text-center mt-5">Don&apos;t have an account? <Link to="/register" className="underline text-blue-400">Create an account!</Link></p>
    </div>

    <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
      />

    </div>
  )
}

export default Login


