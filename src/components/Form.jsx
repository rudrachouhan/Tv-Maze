import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Form = () => {

  const location = useLocation();
  const text = location.state.text;
  const num = location.state.num;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tickets: 1,
    city: '',
    state: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Form data saved!');
    setFormData({ name: '', email: '', tickets: 1, city: '', state: '' });
  };

  return (
    <div className="flex w-screen">
      <div className="flex flex-col bg-red-500 w-[50%] mx-auto p-4 rounded-xl">
        <h1 className='text-2xl font-bold mx-auto'>{`${text[num].show.name}`}</h1>
        <form onSubmit={handleSubmit} className='mt-5 gap-4 flex flex-col'>
          <div className='flex flex-col gap-1'>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className='w-[50%]'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='w-[50%]'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label>Number of Tickets:</label>
            <input
              type='number'
              name="tickets"
              value={formData.tickets}
              onChange={handleChange}
              className='w-[50%]'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className='w-[50%]'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label>State:</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className='w-[50%]'
            />
          </div>
          <button type="submit" className='mt-4 bg-slate-500 w-[20%] mx-auto rounded-lg'>Submit</button>
        </form>
      </div>
    </div>
  );
};


