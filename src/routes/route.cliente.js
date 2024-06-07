import { Router } from "express";
import clientesCliente from "../controllers/controller.cliente.js";

const routeCliente = Router();

routeCliente.get("/clientes", ClienteController.getAllCliente);
routeClientes.post("/clientess", ClientesController.createClientes);
routeClientes.put("/clientess", ClientesController.editClientes);

export default routeclientes;