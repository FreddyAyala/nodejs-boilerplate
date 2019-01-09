import express from 'express';
const wrap = require("../../infrastructure/middleware/wrap")
import {
  getData,
  getDataWithParameter
} from '../../data/placeholder';
import {
  Motorcycle
} from '../../domain/Motorcycle';
const Joi = require('joi')
const validator = require('express-joi-validation')({})
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

/* GET home page. */
router.get("/test", wrap(async (req, res, next) => {
  var result = await getData();
  res.setHeader('Content-Type', 'application/json');
  res.send(result);
}));



/* POST home page. */
router.post("/test", wrap(async (req, res, next) => {


  const schema = Joi.object({
    id: Joi.number().integer().required()
  });


  var validated = await Joi.validate(req.body, schema);
  var result = await getDataWithParameter(validated.id);
//  res.setHeader('Content-Type', 'application/json');
  res.send(result);

}));


/* POST home page. */
router.get("/motorcycle", wrap(async (req, res, next) => {

  var moto = new Motorcycle("Harley-Davidson", 1987);
  res.setHeader('Content-Type', 'application/json');
  res.send(moto.toString());

}));

export default router;