const Contact = () => {
  return (
    <div className="w-6/12 bg-amber-100 mx-auto mt-8 p-4">
      <h1 className="text-3xl font-serif font-bold">Contact Us</h1>
      <form>
        <div className="p-2">
          <label className="font-serif">Enter Name : </label>
          <input placeholder="Name" className="border-black border rounded-sm p-1"/> <br/>
        </div>
        <div className="p-2">
          <label className="font-serif" >Enter Email : </label>
          <input placeholder="Email" className="border-black border rounded-sm p-1"/> <br/>
        </div>
        <button className="px-2 my-3 bg-gray-500 rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
