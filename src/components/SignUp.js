const SignUp = () => {
    return (
      <div className="flex justify-center items-center min-h-screen bg-blue-500">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
          <p className="text-sm text-gray-500 text-center mb-4">
            Please fill in this form to create an account.
          </p>
  
          <form>
            <div className="flex gap-2">
              <div className="w-1/2">
                <label className="block text-gray-700">First Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700">Last Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
  
            <div className="mt-4">
              <label className="block text-gray-700">Email</label>
              <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
            </div>
  
            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input type="password" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
            </div>
  
            <div className="mt-4">
              <label className="block text-gray-700">Confirm Password</label>
              <input type="password" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
            </div>
  
            <div className="mt-4 flex items-center">
              <input type="checkbox" className=" cursor-pointer mr-2" />
              <p className="text-sm text-gray-600">I accept the Terms of Use & Privacy Policy.</p>
            </div>
  
            <button className="w-full mt-6 cursor-pointer bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Sign Up
            </button>
          </form>
  
          <p className="mt-4 text-center text-gray-600">
            Already have an account? <a href="#" className="text-blue-600 hover:underline">SignIn here</a>.
          </p>
        </div>
      </div>
    );
  };
  
  export default SignUp;
  
  