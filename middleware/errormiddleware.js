const errorhandle = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODEENV === "produciton" ? null : err.stack,
  });
};

module.exports = { errorhandle };
