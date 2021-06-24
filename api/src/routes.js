const express = require("express")
const router = express.Router();

const clients = require('../clients.mock');

/** Get all clients */
router.get("/", (req, res, next) => {
  let array = [];
  for (let i = 0; i < clients.length; i++) {
    let enterprise = clients[i].enterprises;
    array.push({
      _id: clients[i]._id,
      name: clients[i].name,
      image_src: clients[i].image_src,
      total_enterprises: enterprise.length,
      enterprises: enterprise
    })
  }
  res.send(array)
});  

/** Get clients by name */
router.get("/name/:name", (req, res, next) => {
  const name = req.params.name;
  const data = clients.filter(d => d.name === name);
  if (data.length === 0) {
    return res.status(400).send({ message: "Nenhum usuário foi encontrado" });
  } 
  return res.status(200).send(data);
});
  
/** Get client totals */
router.get("/:client_id/totals", (req, res, next) => {
  const id = req.params.client_id;
  const allEnterprises = [];
  const allRealties = [];
  for (let i = 0; i < clients.length; i++) {
    if (clients[i]._id === id) {
      let enterprise = clients[i].enterprises;
      allEnterprises.push(enterprise.length);
      for (let j = 0; j < enterprise.length; j++) {
        allRealties.push(parseInt(enterprise[j].realties));
      }
      break;
    }
  }
  const totalEnterprises = allEnterprises.reduce((acc, e) => acc + e);
  const totalRealties = allRealties.reduce((acc, r) => acc + r);
  res.status(200).send({
    enterprises: totalEnterprises,
    totalRealties: totalRealties
  });
});  

/** Get all enterprises */
router.get("/enterprise", (req, res, next) => {
  const array = [];
  for (let i = 0; i < clients.length; i++) {
    let enterprise = clients[i].enterprises;
    for (let j = 0; j < enterprise.length; j++) {
      array.push({
        _id: enterprise[j]._id,
        name: enterprise[j].name,
        image_src: enterprise[j].image_src,
        company_name: clients[i].name,
        realties: enterprise[j].realties
      });
    }
  }
  res.status(200).send(array);
});

/** Get enterprises by name */
router.get("/enterprise/name/:name", (req, res, next) => {
  const name = req.params.name;
  const array = [];
  for (let i = 0; i < clients.length; i++) {
    let enterprise = clients[i].enterprises;
    for (let j = 0; j < enterprise.length; j++) {
      if (enterprise[j].name === name) {
        array.push({
          _id: enterprise[j]._id,
          name: enterprise[j].name,
          image_src: enterprise[j].image_src,
          company_name: clients[i].name,
          realties: enterprise[j].realties
        });
        break;
      }
    }
  }
  if (array.length === 0) {
    return res.status(400).send({ message: "Nenhum empreendimento foi encontrado" });
  }
  return res.status(200).send(array);
});

/** Get all enterprises by client */
router.get("/:client_id/enterprise", (req, res, next) => {
  const id = req.params.client_id;
  const array = [];
  for (let i = 0; i < clients.length; i++) {
    if (clients[i]._id === id) {
      let enterprise = clients[i].enterprises;
      for (let j = 0; j < enterprise.length; j++) {
        array.push({
          _id: enterprise[j]._id,
          name: enterprise[j].name,
          image_src: enterprise[j].image_src
        });
      }
      break;
    }  
  }
  if (array.length === 0) {
    return res.status(400).send({ message: "Nenhum usuário foi encontrado" });
  } 
  return res.status(200).send(array);
});

/** Get enterprises by client and name */
router.get("/:client_id/enterprise/name/:name", (req, res, next) => {
  const id = req.params.client_id;
  const name = req.params.name;
  const array = [];
  for (let i = 0; i < clients.length; i++) {
    if (clients[i]._id === id) {
      let enterprise = clients[i].enterprises;
      for (let j = 0; j < enterprise.length; j++) {
        if (enterprise[j].name === name) {
          array.push({
            _id: enterprise[j]._id,
            name: enterprise[j].name,
            image_src: enterprise[j].image_src,
            realties: enterprise[j].realties
          });
          break;
        }
      }
    }
  }
  if (array.length === 0) {
    return res.status(400).send({ message: "Nenhum empreendimento foi encontrado" });
  }
  return res.status(200).send(array);
});

/** Get general totals */
router.get("/totals", (req, res, next) => {
  const allClients = clients.length;
  const allEnterprises = [];
  const allRealties = [];
  for (let i = 0; i < clients.length; i++) {
    let enterprise = clients[i].enterprises;
    allEnterprises.push(enterprise.length);
    for (let j = 0; j < enterprise.length; j++)
      allRealties.push(parseInt(enterprise[j].realties));
  }
  const totalEnterprises = allEnterprises.reduce((acc, e) => acc + e);
  const totalRealties = allRealties.reduce((acc, r) => acc + r);
  res.status(200).send({
    total_clients: allClients,
    total_enterprises: totalEnterprises,
    total_realties: totalRealties
  });
});

/** Get a client by _id */
router.get("/:_id", (req, res, next) => {
  const id = req.params._id;
  const array = [];
  for (let i = 0; i < clients.length; i++) {
    if (clients[i]._id === id) {
      array.push({
        _id: clients[i]._id,
        name: clients[i].name,
        image_src: clients[i].image_src
      });
      break;
    }
  }
  if (array.length === 0) {
    return res.status(400).send({ message: "Nenhum usuário foi encontrado" });
  } 
  return res.status(200).send(array);
});
  
module.exports = router;

