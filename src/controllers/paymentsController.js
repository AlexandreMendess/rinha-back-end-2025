const { nonNull } = require("../utils/non-null");

function paymentsController(req, res) {
    const paymentData = req.body;

    try {
        const payments = nonNull(paymentData);
        return res.status(200).toJson({
            success: true,
            message: "Payments received successfully!",
            data: payments,
        });
    } catch (error) {
        return res.status(400).toJson({
            success: false,
            message: "Not found payments in process",
            error: error.message
        });
    }
}

module.exports = { paymentsController };