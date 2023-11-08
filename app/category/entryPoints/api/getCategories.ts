/**
 * GET /categories
 * @summary Returns a user by ID.
 * @response 200 - OK
 */
const getCategories = async (req: any, res: any) => {
  try {
    res.send("<h2>It's Working!</h2>");
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = getCategories;
