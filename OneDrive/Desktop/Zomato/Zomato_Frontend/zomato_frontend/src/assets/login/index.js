import { useState } from "react"
// import styles from "./login.module.css"
import toast from "react-hot-toast"
import { login } from "../../routes"
import { useNavigate } from "react-router-dom"
import Food from '../../images/Rectangle 8.png'
import Logo1 from '../../images/LOGO 1.png'
import Logo2 from '../../images/Welcome.png'

export default function Login() {
    // const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const [loading, setLoading] = useState(false)
    const [formErrors, setFormErrors] = useState({
        email: null,
        password: null,
    })
    const handleRegister = async (e) => {
        e.preventDefault()
        let errors = false;
        setFormErrors((formErrors) => { return { ...formErrors, email: null, name: null, phone: null, password: null } })
        if (!formData.email || formData.email.length < 1 || !formData.email.includes("@") || !formData.email.includes(".")) {
            setFormErrors((formErrors) => { return { ...formErrors, email: "Email is invalid" } })
            errors = true
        }
        if (!formData.password) {
            setFormErrors((formErrors) => { return { ...formErrors, password: "Password is required" } })
            errors = true
        }
        if (errors) {
            return
        }
        try {
            setLoading(() => true)
            const response = await login(formData)
            toast.success(response.message)
            console.log(response)
            if (response.token) {
                localStorage.setItem("token", response.token)
                localStorage.setItem("userId", response.id)
                // navigate("/")
            }
        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(() => false)
        }
    }
    return (
        <div className="loginContainer">
            <div className="loginLeft">

            <header>
            <img src={Logo1} alt="Order"/>
            <img src={Logo2} alt="Welcome Back"/>
            </header>
            <form className="" onSubmit={handleRegister}>
                <input value={formData.email} type="text" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                {formErrors.email && <p className="">{formErrors.email}</p>}
                <input value={formData.password} type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                {formErrors.password && <p className="">{formErrors.password}</p>}
                <button disabled={loading} type="submit">{loading ? "Loading..." : "Sign Up"}</button>
            </form>
            </div>
            <div className="loginRight">
                <img src={Food} alt="Food"/>
            </div>
        </div>
    )
}