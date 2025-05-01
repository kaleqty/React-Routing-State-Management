function Home() {
    return (
      <div className="mt-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg mb-4">
          This is a multi-page React application built with React Router.
          It demonstrates routing, props passing, and state lifting concepts.
        </p>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Explore Our Features</h2>
          <ul className="list-disc pl-6">
            <li className="mb-1">Learn about our company in the About page</li>
            <li className="mb-1">Check out our services in the Services page</li>
            <li className="mb-1">Get in touch through our Contact page</li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Home;