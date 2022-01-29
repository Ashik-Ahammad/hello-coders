import React from 'react';
import { useForm } from "react-hook-form";

const AddCourse = () => {

    const { register, handleSubmit,reset} = useForm();
    const onSubmit = data => {
      fetch('https://frozen-forest-00333.herokuapp.com/courses', {
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
            <img className='img-fluid w-25' src="https://i.ibb.co/tbWkWCx/5607.jpg" alt="" />
            <h4>ADD NEW COURSE</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                
            <input placeholder="Course Name" {...register("name")} required/>
            <input placeholder="Key" {...register("key")} required/>
            <textarea placeholder="Description" {...register("description")} />
            <input placeholder="Image url" {...register("img")} />
            <input placeholder="Price" {...register("price")} required/>

            <input type="submit" value="Post"/>
             </form>
        </div>
    );
};

export default AddCourse;