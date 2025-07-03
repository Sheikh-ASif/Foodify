// const Contact = () => {
//   return (
//     <div>
//       <h1>Contact Page</h1>
//       <h2>This is the contactUs page from the header of the body thats it</h2>
//       <p>
//         //1-when there is no dependencies array in the useeffect as a argument
//         then the header component rerender every time when we render the
//         component of the header or whatever the compinent is
        
//          //2- when there is
//         an array dependencie in the useEffect= [] then its only render the
//         header component not the now it will (useEfect)not be called again and
//         again when the header renderd 

//         //3- when there is something in the array
//         dwpwncies then its depend on the value of that array every time the
//         value of the [BtnNameReact] changes the useEffect is called or renderd
//       </p>
//     </div>
    
//   );
// };



  const Contact = () => {
  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-md shadow-amber-300 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Feel Free to Contact Us</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Enter Your Name"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="tel"
          placeholder="Enter Your Phone Number"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          placeholder="Enter Your Email ID"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <textarea
          placeholder="How may we help you?"
          className="w-full p-2 border border-gray-300 rounded-md h-24"
        ></textarea>
        <button className="w-full bg-black text-white p-2 rounded-md cursor-pointer">Submit</button>
      </form>
    </div>
  );
};
  

export default Contact;