import express from 'express';
import { getPersonDetails } from '../controllers/person.controller.js';

const router = express.Router();

router.get("/:id", getPersonDetails);



export default router;