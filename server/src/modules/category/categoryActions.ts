// Some data to make the trick
import categoryRepository from "./category.repository";

import type { RequestHandler } from "express";

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

// Declare the actions

const browse: RequestHandler = async (req, res) => {
  const categoriesFromDB = await categoryRepository.readAll();
  res.json(categoriesFromDB);
};

const read: RequestHandler = (req, res) => {
  const parseId = Number.parseInt(req.params.id);
  const findCategory = categories.find((c) => c.id === parseId);
  if (parseId != null) {
    res.json(findCategory);
  } else {
    res.sendStatus(404);
  }
};

// Export them to import them somewhere else

export default {
  browse,
  read,
};
