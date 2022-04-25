import express from 'express';
import {getCustomerData, createCustomerData, customerCount, searchP} from "../controllers/customers.js";

const router = express.Router();

router.get('/:customerId', getCustomerData);
router.post('/createData', createCustomerData);
router.get('/', customerCount);
router.get('/:params/query', searchP);
export default router;
