function About() {
    return (
      <div className="mt-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
          <p className="mb-4">
            We strive to create intuitive, efficient, and beautiful web applications 
            using the latest technologies and best practices in web development.
          </p>
          <p>
            Our team is passionate about React, JavaScript, and building 
            applications that provide exceptional user experiences.
          </p>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Our Values</h2>
          <ul className="list-disc pl-6">
            <li className="mb-2">Quality code that's maintainable and scalable</li>
            <li className="mb-2">Continuous learning and improvement</li>
            <li className="mb-2">User-centered design and development</li>
            <li className="mb-2">Collaboration and knowledge sharing</li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default About;