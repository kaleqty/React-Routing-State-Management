# React Multi-Page Application

A structured multi-page React application demonstrating routing, props, and state lifting concepts.

##  Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Pages/Routes](#pages-routes)
- [Props Implementation](#props-implementation)
- [State Lifting Implementation](#state-lifting-implementation)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Technologies Used](#technologies-used)

##  Overview

This project is a React application that showcases fundamental React concepts including routing between multiple pages, passing data via props, and lifting state between components. The application simulates a company website with various pages including a contact form with real-time data display.

##  Features

- Multi-page navigation using React Router
- Dynamic component rendering with props
- Form handling with state lifting
- Responsive design
- Clear component separation and organization

##  Pages/Routes

The application includes the following routes:

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home` | Landing page with introduction to the application |
| `/about` | `About` | Information about the company, mission, and values |
| `/services` | `Services` | List of services offered, displayed as cards |
| `/contact` | `Contact` | Contact form with real-time submission summary |

Each route is configured in the `App.jsx` file using React Router's `<Route>` components:

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/services" element={<Services />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```

Navigation between routes is handled by the `<Navbar>` component, which uses React Router's `<Link>` components.

##  Props Implementation

Props are primarily demonstrated in the Services page where:

1. The parent `Services` component contains an array of service objects:
   ```jsx
   const services = [
     {
       id: 1,
       title: 'Web Development',
       description: 'Custom website development using modern frameworks like React, Vue, and Angular.',
       icon: '💻'
     },
     // More services...
   ];
   ```

2. Each service object is passed as props to the child `ServiceCard` component using the `.map()` method:
   ```jsx
   {services.map(service => (
     <ServiceCard 
       key={service.id}
       title={service.title}
       description={service.description}
       icon={service.icon}
     />
   ))}
   ```

3. The `ServiceCard` component receives and displays the data:
   ```jsx
   function ServiceCard({ title, description, icon }) {
     return (
       <div className="bg-white p-6 rounded-lg shadow-md mb-4">
         <div className="flex items-center mb-4">
           <div className="text-blue-500 text-2xl mr-3">{icon}</div>
           <h3 className="text-xl font-semibold">{title}</h3>
         </div>
         <p className="text-gray-700">{description}</p>
       </div>
     );
   }
   ```

This implementation demonstrates:
- Data defined in a parent component
- Data passed to child components via props
- Dynamic rendering of multiple components using array mapping
- Props destructuring in the child component

##  State Lifting Implementation

State lifting is demonstrated in the Contact page where:

1. The state is defined in the parent `Contact` component:
   ```jsx
   const [formData, setFormData] = useState({
     name: '',
     email: '',
     subject: '',
     message: ''
   });
   
   const [submitted, setSubmitted] = useState(false);
   ```

2. The state and setter function are passed to the `ContactForm` component:
   ```jsx
   <ContactForm 
     formData={formData} 
     setFormData={setFormData} 
     handleSubmit={handleSubmit} 
   />
   ```

3. The `ContactForm` component updates the parent's state:
   ```jsx
   const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData(prevData => ({
       ...prevData,
       [name]: value
     }));
   };
   ```

4. The same state is shared with the `FormSummary` component:
   ```jsx
   <FormSummary formData={formData} submitted={submitted} />
   ```

5. The `FormSummary` component displays the data from the parent's state:
   ```jsx
   function FormSummary({ formData, submitted }) {
     if (!submitted || !formData.name) return null;
     
     return (
       // Display form data here
     );
   }
   ```

This implementation demonstrates:
- State defined and managed in a parent component
- State and state updater functions passed to child components
- Multiple child components sharing the same state
- Child components updating parent state
- Conditional rendering based on state values

##  Project Structure

```
react-multipage-app/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar component
│   │   ├── ServiceCard.jsx  # Service card component for Services page
│   │   ├── ContactForm.jsx  # Form component for Contact page
│   │   └── FormSummary.jsx  # Form summary component for Contact page
│   ├── pages/
│   │   ├── Home.jsx         # Home page component
│   │   ├── About.jsx        # About page component
│   │   ├── Services.jsx     # Services page component (parent of ServiceCard)
│   │   └── Contact.jsx      # Contact page component (parent of ContactForm and FormSummary)
│   ├── App.jsx              # Main component with routing configuration
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── package.json
└── vite.config.js
```

##  Installation & Setup

1. Clone the repository:
   ```
   git clone https://github.com/your-username/react-multipage-app.git
   cd react-multipage-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Technologies Used

- React 18
- React Router v6
- Vite
- CSS (converted from Tailwind utility classes)
