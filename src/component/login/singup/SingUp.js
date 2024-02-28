import { useState, useContext } from "react";
import Login from "./Login";
import UserContext from "../../context/UserContext";
import { useNavigate } from 'react-router-dom';

const SingUp = () => {
    const [state, setState] = useState(false); // Initialize state to false
    const { setObj } = useContext(UserContext);
    const navigate=useNavigate();

    const handleChange = (e, type) => {
        const newValue = e.target.value;
        setObj(prev => ({ ...prev, [type]: newValue }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
          navigate('/login');
        // Prevent default form submission behavior
        // Perform your form validation here
        // For example, check if all required fields are filled
        // If validation passes, you can proceed with further actions
        // If validation fails, you can display error messages or prevent form submission
    }

    if (state) return <Login />;
    else return (
        <div className="flex justify-end h-auto  mr-2 mt-1">
            <div className=" w-[30%] border border-black bg-gray-100 rounded-md text-center pb-6">
                <div className="flex mt-10 justify-between ml-20">
                    <h1 className="font-bold border-b border-black text-xl">SingUp</h1>
                    <button className="  text-blue-600 text-lg"
                     onClick={() => {
                        setState(!state)
                        navigate('/login')
                     }}
                     
                     >Login</button><br />
                </div>
                <form onSubmit={handleSubmit}>
                    <input className="mt-10 border rounded-lg p-3 px-11" type="number" placeholder="Phone Number" required
                        onChange={(e) => handleChange(e, "number")} /><br />

                    <input className="mt-2 border rounded-lg p-3 px-11" type="text" placeholder="Name" required
                        onChange={(e) => handleChange(e, "name")} /><br />

                    <input className="mt-2 border rounded-lg p-3 px-11" type="email" placeholder="Email" required
                        onChange={(e) => handleChange(e, "email")} /><br />

                    <input className="mt-2 border rounded-lg p-3 px-11" type="password" placeholder="Password" required
                        onChange={(e) => handleChange(e, "password")} /><br />

                    <input className="mt-2 border rounded-lg p-3 px-11" type="password" placeholder="Confirm Password" required
                        onChange={(e) => handleChange(e, "cpassword")} /><br />

                    <button type="submit" className="mt-3 border p-2 bg-blue-600 text-white rounded-md px-28">SingUp</button><br />
                </form>
                <p>By clicking on Login, you accept our Term & Condition & policy</p>
            </div>
        </div>
    )
}

export default SingUp;