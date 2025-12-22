const { nonNull } = require("../utils/non-null");
const db = require('../database/database');

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

    const sql = 'INSERT INTO payments SET ?';

    db.query(sql, paymentData, (err, result) => {
        if(err) {
            console.err(err);
            return res.status(500).json({
                success: false,
                message: `Database error ${err.message}`,
                error: err.code
            });
        }

        return res.status(201).json({
            success: true,
            message: "Payments added with successfully!",
            data: {
                id: result.insertId,
                ...paymentData,
            }
        })
    });
}

module.exports = { paymentsController };