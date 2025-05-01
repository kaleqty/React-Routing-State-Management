import ServiceCard from '../components/ServiceCard';

function Services() {
  // Services data defined in parent component
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom website development using modern frameworks like React, Vue, and Angular.',
      icon: '💻'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      icon: '📱'
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'User-centered design process focused on creating intuitive and engaging interfaces.',
      icon: '🎨'
    },
    {
      id: 4,
      title: 'Consulting & Training',
      description: 'Expert advice and hands-on training for teams looking to level up their skills.',
      icon: '👨‍🏫'
    }
  ];

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <p className="text-lg mb-6">
        We offer a wide range of web and mobile development services to help your business succeed online.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Passing each service as props to ServiceCard */}
        {services.map(service => (
          <ServiceCard 
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;