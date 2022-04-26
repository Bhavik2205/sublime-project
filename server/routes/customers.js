import express from 'express';
import {getCustomerData, createCustomerData, customerCount} from "../controllers/customers.js";

const router = express.Router();

router.get('/:customerId', getCustomerData);
router.post('/createData', createCustomerData);
router.get('/', customerCount);
export default router;
