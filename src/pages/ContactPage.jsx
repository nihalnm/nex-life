import React, { useState } from 'react';
import styled from 'styled-components';

const ContactForm = styled.form`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin-bottom: 30px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid ${props => props.error ? '#dc3545' : '#ced4da'};
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:focus {
    border-color: #3a6fc9;
    box-shadow: 0 0 0 0.2rem rgba(58, 111, 201, 0.25);
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid ${props => props.error ? '#dc3545' : '#ced4da'};
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:focus {
    border-color: #3a6fc9;
    box-shadow: 0 0 0 0.2rem rgba(58, 111, 201, 0.25);
    outline: none;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid ${props => props.error ? '#dc3545' : '#ced4da'};
  border-radius: 4px;
  font-size: 1rem;
  height: 45px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:focus {
    border-color: #3a6fc9;
    box-shadow: 0 0 0 0.2rem rgba(58, 111, 201, 0.25);
    outline: none;
  }
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  background-color: #3a6fc9;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background-color: #2c5999;
    transform: translateY(-2px);
  }
  
  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: center;
`;

const ContactInfoCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 30px;
  height: 100%;
`;

const ContactIcon = styled.div`
  font-size: 2rem;
  color: #3a6fc9;
  margin-bottom: 15px;
`;

const MapContainer = styled.div`
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 30px;
  
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
      isValid = false;
    }
    
    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      tempErrors.phone = 'Please enter a valid phone number';
      isValid = false;
    }
    
    if (!formData.subject.trim()) {
      tempErrors.subject = 'Subject is required';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 20) {
      tempErrors.message = 'Message should be at least 20 characters';
      isValid = false;
    }
    
    if (!formData.inquiryType) {
      tempErrors.inquiryType = 'Please select an inquiry type';
      isValid = false;
    }
    
    setErrors(tempErrors);
    return isValid;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          inquiryType: ''
        });
      }, 1500);
    }
  };
  
  return (
    <div className="contact-page">
      {/* Page Header */}
      <header className="page-header bg-primary text-white py-5">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="lead">Get in touch with our team</p>
        </div>
      </header>
      
      {/* Contact Content */}
      <section className="contact-content container my-5">
        <div className="row mb-4">
          <div className="col-lg-8 mx-auto text-center">
            <h2>How Can We Help You?</h2>
            <p className="lead">
              We're here to answer your questions and address your transportation needs.
              Fill out the form below, and our team will get back to you as soon as possible.
            </p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-8">
            {submitted ? (
              <SuccessMessage>
                <h4>Thank you for contacting us!</h4>
                <p>Your message has been received. We'll get back to you shortly.</p>
                <button 
                  className="btn btn-outline-success mt-3"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </SuccessMessage>
            ) : (
              <ContactForm onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <FormGroup>
                      <Label htmlFor="name">Full Name*</Label>
                      <Input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                      />
                      {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                    </FormGroup>
                  </div>
                  <div className="col-md-6">
                    <FormGroup>
                      <Label htmlFor="email">Email Address*</Label>
                      <Input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                      />
                      {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                    </FormGroup>
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-6">
                    <FormGroup>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        error={errors.phone}
                      />
                      {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
                    </FormGroup>
                  </div>
                  <div className="col-md-6">
                    <FormGroup>
                      <Label htmlFor="inquiryType">Inquiry Type*</Label>
                      <Select 
                        id="inquiryType" 
                        name="inquiryType" 
                        value={formData.inquiryType}
                        onChange={handleChange}
                        error={errors.inquiryType}
                      >
                        <option value="">Select an option</option>
                        <option value="general">General Inquiry</option>
                        <option value="booking">Booking Information</option>
                        <option value="feedback">Feedback</option>
                        <option value="complaint">Complaint</option>
                        <option value="partnership">Business Partnership</option>
                      </Select>
                      {errors.inquiryType && <ErrorMessage>{errors.inquiryType}</ErrorMessage>}
                    </FormGroup>
                  </div>
                </div>
                
                <FormGroup>
                  <Label htmlFor="subject">Subject*</Label>
                  <Input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    error={errors.subject}
                  />
                  {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="message">Message*</Label>
                  <TextArea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                  />
                  {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
                </FormGroup>
                
                <SubmitButton type="submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </SubmitButton>
              </ContactForm>
            )}
            
            <MapContainer>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215373064617!2d-73.98509492404045!3d40.75838097138413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1694521234567!5m2!1sen!2sus" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Nex-Life Transport Location"
              ></iframe>
            </MapContainer>
          </div>
          
          <div className="col-lg-4">
            <ContactInfoCard>
              <h3>Contact Information</h3>
              <p>Reach out to us directly using the information below:</p>
              
              <div className="mb-4">
                <ContactIcon>
                  <i className="fas fa-map-marker-alt"></i>
                </ContactIcon>
                <h5>Address</h5>
                <p>
                  123 Transport Avenue<br />
                  New York, NY 10001<br />
                  United States
                </p>
              </div>
              
              <div className="mb-4">
                <ContactIcon>
                  <i className="fas fa-phone-alt"></i>
                </ContactIcon>
                <h5>Phone</h5>
                <p>
                  Main: (123) 456-7890<br />
                  Support: (123) 456-7891<br />
                  Toll-free: 1-800-NEX-LIFE
                </p>
              </div>
              
              <div className="mb-4">
                <ContactIcon>
                  <i className="fas fa-envelope"></i>
                </ContactIcon>
                <h5>Email</h5>
                <p>
                  General: info@nexlifetransport.com<br />
                  Support: support@nexlifetransport.com<br />
                  Bookings: bookings@nexlifetransport.com
                </p>
              </div>
              
              <div className="mb-4">
                <ContactIcon>
                  <i className="fas fa-clock"></i>
                </ContactIcon>
                <h5>Business Hours</h5>
                <p>
                  Monday - Friday: 8:00 AM - 8:00 PM<br />
                  Saturday: 9:00 AM - 5:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
              
              <div className="social-links mt-4">
                <h5>Connect With Us</h5>
                <div className="d-flex gap-3">
                  <a href="#" className="text-primary fs-4"><i className="fab fa-facebook"></i></a>
                  <a href="#" className="text-info fs-4"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-danger fs-4"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="text-primary fs-4"><i className="fab fa-linkedin"></i></a>
                </div>
              </div>
            </ContactInfoCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

// Made with Bob
