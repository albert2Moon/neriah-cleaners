import { Link, useParams } from 'react-router-dom';
import './ServicesList.css'
import { services } from '../../assets/assets';

const ServiceDetail = () => {
    const { id } = useParams();
    const service = services[id]; // Get the service by ID from the array

    return (
        <>
            <div className='services-detail-container'>
                <div className="services-detail-card">
                    <h1>{service.title}</h1>
                    {/* <img src={service.img} alt={service.title} /> */}
                    <h4>Description</h4>
                    <p>{service.shortDescription}</p>

                    <div className="service-detail-content" dangerouslySetInnerHTML={{ __html: service.content }} />

                    <div className="service-detail-cta">
                        <button className='btn2'><Link to="/services#our-services">Back to Services</Link></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetail;
