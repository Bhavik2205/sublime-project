import mongoose from 'mongoose';

const customerSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    city: {type: String, required: true},
    company: {type: String, required: true},
    id: {type: String}
});

export default mongoose.model('CustomerData', customerSchema);