import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://agile-beyond-87526.herokuapp.com/plan', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert("New Plan Added Successfully");
                    reset();
                }
            })
    }
    return (
        <Container>
            <h2 className="text-center my-2">Add A New Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="name" className="form-label mt-2">Apartment Type</label>
                <input className="form-control" id="name" {...register("name", { required: true })} placeholder="Name of Apartment" />
                {errors.name && <p className="text-danger">This field is required</p>}


                <label htmlFor="shortDec" className="form-label  mt-2">Short Decription</label>
                <textarea className="form-control" id="shortDec" {...register("shortDec", { required: true })} placeholder="Write a Short Decription " />
                {errors.shortDec && <p className="text-danger">This field is required</p>}

                <label htmlFor="img" className="form-label  mt-2">Apartment Photo Link </label>
                <input className="form-control" id="img" {...register("img", { required: true })} placeholder="Image URL Link " />
                {errors.img && <p className="text-danger">This field is required</p>}


                <label htmlFor="rent" className="form-label  mt-2">Rent</label>
                <input className="form-control" id="rent" {...register("rent", { required: true })} placeholder="Rent Price" />
                {errors.rent && <p className="text-danger">This field is required</p>}


                <label htmlFor="Rooms" className="form-label  mt-2">Total Rooms </label>
                <input className="form-control" id="Rooms" {...register("Rooms")} placeholder="Total Rooms" />

                <label htmlFor="TotalArea" className="form-label  mt-2">Total Area </label>
                <input className="form-control" id="TotalArea" {...register("TotalArea")} placeholder="Total Area" />

                <p className="text-center mt-2">
                    <input className="btn btn-success my-2" type="submit" value="Add Product" /></p>
            </form>
        </Container>
    );
};

export default AddProduct;