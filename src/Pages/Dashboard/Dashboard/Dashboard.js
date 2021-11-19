import React from 'react';
import { BsFillArrowLeftSquareFill, BsFillCreditCardFill, BsHandbagFill, BsPeopleFill, BsSpeedometer } from "react-icons/bs";
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddProduct from '../AddProduct/AddProduct';
import AllOrders from '../AllOrders/AllOrders';
import DashboadHome from '../DashboadHome/DashboadHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const {  logOut, admin } = useAuth();


    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline"> </span>
                        </a>
                        {
                            admin ?
                                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start text-white" id="menu">
                                    <li className="nav-item">
                                        <Link to={`${url}/allOrders`} className="nav-link align-middle px-0">
                                            <BsHandbagFill></BsHandbagFill><span className="ms-1 d-none d-sm-inline text-white">Manage All Orders</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={`${url}/addProduct`} className="nav-link align-middle px-0">
                                            <BsHandbagFill></BsHandbagFill><span className="ms-1 d-none d-sm-inline text-white">Add A product</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={`${url}/makeAdmin`} className="nav-link align-middle px-0">
                                            <BsFillCreditCardFill></BsFillCreditCardFill><span className="ms-1 d-none d-sm-inline text-white">Make Admin</span>
                                        </Link>
                                        <Link to={`${url}/manageProducts`} className="nav-link align-middle px-0">
                                            <BsHandbagFill></BsHandbagFill><span className="ms-1 d-none d-sm-inline text-white">Manage Products</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <div onClick={logOut} style={{ cursor: "pointer" }} className="nav-link align-middle px-0">
                                            <BsFillArrowLeftSquareFill></BsFillArrowLeftSquareFill><span className="ms-1 d-none d-sm-inline text-white">Sign out</span>
                                        </div>
                                    </li>


                                </ul>
                                :
                                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start text-white" id="menu">
                                    <li className="nav-item">
                                        <Link to={`${url}`} className="nav-link px-0 align-middle">
                                            <BsSpeedometer></BsSpeedometer><span className="ms-1 d-none d-sm-inline text-white">Dashboard</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={`${url}/payment`} className="nav-link align-middle px-0">
                                            <BsFillCreditCardFill></BsFillCreditCardFill><span className="ms-1 d-none d-sm-inline text-white">Pay</span>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to={`${url}/myOrders`} className="nav-link align-middle px-0">
                                            <BsHandbagFill></BsHandbagFill><span className="ms-1 d-none d-sm-inline text-white">My Orders</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={`${url}/Review`} className="nav-link align-middle px-0">
                                            <BsPeopleFill></BsPeopleFill><span className="ms-1 d-none d-sm-inline text-white">Review</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <div onClick={logOut} style={{ cursor: "pointer" }} className="nav-link align-middle px-0">
                                            <BsFillArrowLeftSquareFill></BsFillArrowLeftSquareFill><span className="ms-1 d-none d-sm-inline text-white">Sign out</span>
                                        </div>
                                    </li>
                                </ul>
                        }


                    

                        <hr />
                    </div>
                </div>
                <div className="col py-3">
                    <Switch>
                        <Route exact path={path}>
                            <DashboadHome></DashboadHome>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                        <Route path={`${path}/myOrders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/Review`}>
                            <Review></Review>
                        </Route>
                    
                        <AdminRoute path={`${path}/allOrders`}>
                            <AllOrders></AllOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addProduct`}>
                            <AddProduct></AddProduct>
                        </AdminRoute>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>

                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;