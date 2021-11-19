import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://agile-beyond-87526.herokuapp.com/review', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert("Order Placed Successfully");
                    reset();
                }
            })
    }
    return (
        <div>

            <div className="" >
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor="userName" className="form-label mt-2">My Name</label>
                    <input className="form-control" defaultValue={user.displayName} id="userName" {...register("customerName")} placeholder="Name" />

                    <label htmlFor="userEmail" className="form-label  mt-2">My Email</label>
                    <input readOnly className="form-control" defaultValue={user.email} id="userEmail" {...register("customerEmail")} placeholder="Email" />

                    <label htmlFor="shortReview" className="form-label  mt-2">Review</label>
                    <textarea className="form-control" id="shortReview" {...register("Reviews")} placeholder="Write a short review about this page" />

                    <label htmlFor="starRating" className="form-label  mt-2">Rating</label>
                    <input className="form-control" id="starRating" {...register("starRating")} placeholder="Rating out of 5" />

                    <p className="text-center mt-2"><input className="btn btn-success my-2" type="submit" value="Review this website" /></p>

                </form>
            </div>
        </div>
    );
};

export default Review;