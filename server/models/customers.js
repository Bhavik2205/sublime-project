import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    city: {
        type: String, 
        required: true
    },
    company: {
        type: String, 
        required: true
    },
});

let Customer = mongoose.model('CustomerData', customerSchema);
export default Customer;