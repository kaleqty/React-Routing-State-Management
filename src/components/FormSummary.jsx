function FormSummary({ formData, submitted }) {
    // Only display if the form has been submitted or has any data
    if (!submitted || !formData.name) return null;
  
    return (
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-semibold mb-4 text-green-800">Form Submission Summary</h2>
        <div className="space-y-3">
          <div>
            <span className="font-medium">Name:</span> {formData.name}
          </div>
          <div>
            <span className="font-medium">Email:</span> {formData.email}
          </div>
          <div>
            <span className="font-medium">Subject:</span> {formData.subject}
          </div>
          <div>
            <span className="font-medium">Message:</span> 
            <p className="mt-1 pl-4 border-l-2 border-green-300">{formData.message}</p>
          </div>
        </div>
        <div className="mt-4 text-green-700">
          Thank you for your feedback! We'll get back to you soon.
        </div>
      </div>
    );
  }
  
  export default FormSummary;