import React from 'react';

const ServicesSection = () => {
    const services = [
        { id: 1, title: 'Block Construction', description: 'High-quality block construction services for residential and commercial projects.' },
        { id: 2, title: 'Masonry Work', description: 'Expert masonry work including brick, stone, and block installations.' },
        { id: 3, title: 'Renovations', description: 'Comprehensive renovation services to enhance your property.' },
        { id: 4, title: 'Custom Designs', description: 'Tailored designs to meet your specific construction needs.' },
    ];

    return (
        <section className="services-section">
            <h2>Our Services</h2>
            <div className="services-list">
                {services.map(service => (
                    <div key={service.id} className="service-item">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;