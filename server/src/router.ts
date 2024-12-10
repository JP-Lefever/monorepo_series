import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

import programActions from "./modules/program/programActions";
/* ************************************************************************* */
import sayAction from "./modules/say/sayActions";
import categoryActions from "./modules/category/categoryActions";

router.get("/", sayAction.sayWelcome);
router.get("/api/programs", programActions.browse);
router.get("/api/programs/:id", programActions.read);
router.get("/api/categories", categoryActions.categoriesList);
router.get("/api/categories/:id", categoryActions.category);

export default router;
