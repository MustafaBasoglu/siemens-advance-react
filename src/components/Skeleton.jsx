const Skeleton = () => {
  return (
    <div className="container mx-auto p-6 animate-pulse">
      <div className="flex flex-wrap -mx-6">
        <div className="w-full md:w-1/2 p-6">
          <div className="bg-gray-300 h-48 md:h-96 w-full rounded"></div>
        </div>
        <div className="w-full md:w-1/2 p-6">
          <div className="h-8 bg-gray-300 w-3/4 mb-4 rounded"></div>
          <div className="h-4 bg-gray-300 w-full mb-4 rounded"></div>
          <div className="h-4 bg-gray-300 w-full mb-4 rounded"></div>
          <div className="h-4 bg-gray-300 w-1/2 mb-4 rounded"></div>
          <div className="mt-6 h-10 bg-blue-300 w-32 rounded"></div>
        </div>
      </div>
      <div className="mt-12">
        <div className="h-6 bg-gray-300 w-1/4 mb-4 rounded"></div>
        <div className="h-4 bg-gray-300 w-full mb-4 rounded"></div>
        <div className="h-4 bg-gray-300 w-full mb-4 rounded"></div>
        <div className="h-4 bg-gray-300 w-3/4 mb-4 rounded"></div>
      </div>
    </div>
  );
};

export default Skeleton;
