import { useState } from "react";
import toast from 'react-hot-toast';
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  // Timeout helper function for fetch requests
  const fetchWithTimeout = (url, options, timeout = 10000) => {
    return Promise.race([
      fetch(url, options),
      new Promise((_, reject) => setTimeout(() => reject(new Error('Request timed out')), timeout))
    ]);
  };

  // Validate form inputs
  const handleInputErrors = ({ fullName, username, password, confirmPassword, gender }) => {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
      toast.error("Please fill all the fields");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return false;
    }
    return true;
  };

  // Signup function
  const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
    const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });

    if (!success) return false; // Return false if validation fails

    setLoading(true);
    try {
      // Use fetchWithTimeout to handle long request times
      const res = await fetchWithTimeout("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
      });

      const data = await res.json();

      if (data.error) {
        if (data.error === 'Username already exists') {
          // Handle "username already exists" case
          toast.error("This username is already taken. Please choose another.");
        } else {
          throw new Error(data.error);  // Throw other errors
        }
      }

      // Store user data in local storage
      localStorage.setItem("chat-user", JSON.stringify(data));

      // Update context with new user data
      setAuthUser(data);

      // Return true for successful signup
      return true;
    } catch (error) {
      // Handle different types of errors
      if (error.message === 'Request timed out') {
        toast.error("Signup process is taking too long. Please try again.");
      } else {
        toast.error(error.message);
      }
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;
