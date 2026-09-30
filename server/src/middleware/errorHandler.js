export function notFoundHandler(req, res, next) {
  res.status(404).json({
    success: false,
    message: `Khong tim thay route: ${req.method} ${req.originalUrl}`,
  });
}

export function errorHandler(err, req, res, next) {
  console.error("[error]", err);

  if (err.name === "CastError") {
    return res.status(400).json({
      success: false,
      message: "ID khong hop le",
    });
  }

  if (err.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }

  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: statusCode === 500 ? "Loi server noi bo" : err.message,
  });
}
