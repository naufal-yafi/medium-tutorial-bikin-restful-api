import Joi from "joi";

const createCategory = Joi.object({
  name: Joi.string().min(4).max(30).required(),
});

export { createCategory };
