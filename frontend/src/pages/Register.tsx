import { Link } from "react-router-dom";
import Form from "../components/Form";

function Register() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Create Account</h2>
                <Form 
                    route="/api/user/register/"
                    method="register"
                />
                <p className="mt-6 text-center text-gray-600 text-sm">
                    Already have an account?{' '}
                    <Link to="/login" className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
  );
}

export default Register;