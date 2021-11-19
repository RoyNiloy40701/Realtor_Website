import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState({});
    useEffect(() => {
        fetch(`https://agile-beyond-87526.herokuapp.com/plans`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                console.log(data);
            })
    }, [])
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, To cancel');
        if (proceed) {
            fetch(`https://agile-beyond-87526.herokuapp.com/plan/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingProducts = products.filter(product => product._id !== id)
                        setProducts(remainingProducts)
                    }
                })
        }
    }
    return (
        <div>
            <h2>Manage Products</h2>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Product ID</th>
                            <th scope="col">Product Image</th>
                            <th scope="col">Rent</th>
                            <th scope="col">Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(products).length !== 0 &&
                            products.map(product =>
                                <tr key={products._id}>
                                    <th className="align-middle" scope="row">{(product._id).slice(0, 10)}...</th>
                                    <td><img src={product.img} alt="" width="200px" height="80px" /></td>
                                    <td className="align-middle">{product.name}</td>
                                    <td className="align-middle">{product.rent}</td>
                                    <td className="align-middle">
                                        <button onClick={() => handleDelete(product._id)} className="btn btn-danger px-3  btn-sm mx-1">X</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;