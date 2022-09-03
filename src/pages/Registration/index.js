import { useState } from "react"
import SignUp from "../../components/SignUp"
import "./style.css"

const Registration = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const props = {
    handleEmail,
    handlePassword,
    handleName,
    handleSubmit,
    name,
    email,
    password,
  }
  return (
    <div>
      <SignUp {...props} />
    </div>
  )
}

export default Registration
