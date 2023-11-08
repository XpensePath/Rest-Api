/**
 * GET /bankAccounts
 * @summary Returns a user by ID.
 * @response 200 - OK
 */
const getBankAccounts = async (req: any, res: any) => {
  try {
    res.send("<h2>It's Working!</h2>");
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = getBankAccounts;
