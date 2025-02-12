import React,{useState} from 'react';
import { useNavigate } from "react-router-dom"; 
import { loginUser } from "../../Service/authService";
import Loading from '../UI/Loading/loading';

const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [isloading, setIsloading]= useState(false)
    const [error, setError] = useState("");
    const navigate = useNavigate(); // Initialize navigation
    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simple validation
        if (formData.username == "" || formData.password.length > 15 || formData.password.length < 6) {
            setError("Invalid email or password (min 6 characters)");
            return;
        }
        try {
            setIsloading(true)
            const response = await loginUser(formData.username, formData.password);

            if(response.responseStatus == "true"){
                localStorage.setItem("token", response.result.token); // Save token for future requests
                // Redirect to Dashboard after successful login
                navigate("/admin/");
            }else{
                alert(response.responseMasage);
            }
            setFormData({ username: "", password: "" }); // Reset form
        } catch (err) {
            setError(err.message);
        } finally {
            setIsloading(false)
        }
    };
  return (
    <div className='h-[calc(100%-14px)] flex w-screen'>
        {isloading?<Loading></Loading>:''}
        <div className={`h-screen p-0 w-3/5 relative bg-gray-900`}>
            test
        </div>
        
        <div className={ "w-2/5"}>
        <div className="m-10 mt-50 align-middle p-10 border-2 border-gray-700 rounded-sm">
            <h2>Login</h2>
            <form className="space-y-6" onSubmit={handleSubmit} method="POST">
            <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">User Name</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username || ""}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg"
                />
                <div className="mt-2">
                </div>
            </div>

            <div>
                <div className="items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg"
                />
                </div>
                <div className="mt-2">
                </div>
            </div>

            <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Login;
