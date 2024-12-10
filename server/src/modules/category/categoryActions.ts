// Some data to make the trick

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

const categoriesList: RequestHandler = (req, res) => {
  const filteredCategory = categories.filter((c) => c.name);

  res.json(filteredCategory);
};

const category: RequestHandler = (req, res) => {
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
  categoriesList,
  category,
};
