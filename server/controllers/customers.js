import Customer from "../models/customers.js";
import mongoose from "mongoose";
import express from "express";

const router = express.Router();

//To get customer data from index id
export const getCustomerData  = async(req, res) => {
    const { customerId } = req.params;
    try {
        const customerData = await Customer.findById(customerId);
        res.status(200).json(customerData);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

//to add a customer with city validations
export const createCustomerData = async(req, res) => {
    const {firstName, lastName, city, company} = req.body;

    try {
        const oldCity = await Customer.findOne({city});
        if(oldCity){
            const oldCompany = await Customer.findOne({company});
            if(oldCompany){
                const response = await Customer.create({firstName, lastName, city, company});
                res.status(201).json(response);
            }else{
                res.status(404).json({message: 'Company Not Found in Database'});
            }
        }else{
            res.status(404).json({message: 'City Not Found'});
        }
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};

//To get a customer count in a particular city
export const customerCount = async(req, res) => {
    const c = req.query.city; 
        try {
            //const total = await Customer.countDocuments({city: c});
            const cities = await Customer.aggregate([ {$group : {_id:"$city", count:{$sum:1}}} ]);
            res.status(200).json({cities});
        } catch (error) {
            res.status(409).json({message: error.message});
        }
};

export default router;