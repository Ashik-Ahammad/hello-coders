import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {

    const { register, handleSubmit,reset} = useForm();
  const onSubmit = data => {
    fetch('https://frozen-forest-00333.herokuapp.com/services', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(result => {
            if (result.insertedId) {
                alert('Posted');
                reset();
            }
        })
      console.log(data)
    };

    return (
        <div className='addService'>
            <img className='img-fluid w-25' src="https://i.ibb.co/ydMSZfv/5608.jpg" alt="" />
            <h4>ADD NEW SERVICE</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder=" Service Name" {...register("name")} required/>
                <textarea placeholder="Description" {...register("description")} />
                <input placeholder="Image url" {...register("img")} />
                <input type="submit" value="Post"/>
            </form>
        </div>
    );
};

export default AddService;