const Error = ({ children }) => {
  return (
    <div className="text-white bg-red-600 text-center p-3 uppercase font-bold mb-11 rounded-md">
      {children}
    </div>
  );
};

export default Error;
