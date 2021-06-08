import { Router } from "express";
import * as TC from "../controllers/todoController.js";
import { protect } from "../middleware/AuthMiddleware.js";

const todoRouter = Router();

todoRouter.route("/add").post(protect, TC.addTodo);

todoRouter.route("/remove").post(protect, TC.removeTodo);

todoRouter.route("/update").post(protect, TC.updateTodo);

todoRouter.route("/:author").get(protect, TC.getTodos);

todoRouter.route("/:tid").post(protect, TC.getTodo);

export default todoRouter;