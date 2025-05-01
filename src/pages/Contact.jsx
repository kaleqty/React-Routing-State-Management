import { useState } from 'react';
import ContactForm from '../components/ContactForm';
import FormSummary from '../components/FormSummary';

function Contact() {
  // State lifted to the parent component
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you might send this data to an API here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg mb-6">
        Have a question or want to work together? Fill out the form below and we'll get back to you as soon as possible.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactForm 
          formData={formData} 
          setFormData={setFormData} 
          handleSubmit={handleSubmit} 
        />
        
        <div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-3">
              <p><strong>Email:</strong> info@example.com</p>
              <p><strong>Phone:</strong> (123) 456-7890</p>
              <p><strong>Address:</strong> 123 Web Dev St, React City, JS 12345</p>
            </div>
          </div>
          
          {/* Display the form summary */}
          <FormSummary formData={formData} submitted={submitted} />
        </div>
      </div>
    </div>
  );
}

export default Contact;