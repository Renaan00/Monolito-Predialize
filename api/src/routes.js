const express = require("express")
const router = express.Router();

const ClientsController = require("./controllers/ClientsController");

/** Get all clients */
router.get("/", ClientsController.getClients);
/** Get clients by name */
router.get("/name/:name", ClientsController.getClientName);
/** Get client totals */
router.get("/:client_id/totals", ClientsController.getClientTotals);  
/** Get all enterprises */
router.get("/enterprise", ClientsController.getEnterprises);
/** Get enterprises by name */
router.get("/enterprise/name/:name", ClientsController.getEnterpriseName);
/** Get all enterprises by client */
router.get("/:client_id/enterprise", ClientsController.getEnterpriseClient);
/** Get enterprises by client and name */
router.get("/:client_id/enterprise/name/:name", ClientsController.getEnterpriseClientName);
/** Get general totals */
router.get("/totals", ClientsController.getTotals);
/** Get a client by _id */
router.get("/:_id", ClientsController.getClientId);
  
module.exports = router;

