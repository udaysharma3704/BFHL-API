const {
  generateFibonacci,
  filterPrimes,
  calculateLCM,
  calculateHCF
} = require("../utils/math.js");

const { askAI } = require("../utils/ai.js");

require("dotenv").config();

exports.handleBFHL = async (req, res) => {
  try {
    const body = req.body;
    const keys = Object.keys(body);

    if (keys.length !== 1) {
      return res.status(400).json({
        is_success: false,
        error: "Request must contain exactly one key"
      });
    }

    const key = keys[0];
    let data;

    switch (key) {
      case "fibonacci":
        if (!Number.isInteger(body[key]) || body[key] < 0) {
          throw new Error("Invalid fibonacci input");
        }
        data = generateFibonacci(body[key]);
        break;

      case "prime":
        if (!Array.isArray(body[key])) {
          throw new Error("Prime input must be an array");
        }
        data = filterPrimes(body[key]);
        break;

      case "lcm":
        if (!Array.isArray(body[key])) {
          throw new Error("LCM input must be an array");
        }
        data = calculateLCM(body[key]);
        break;

      case "hcf":
        if (!Array.isArray(body[key])) {
          throw new Error("HCF input must be an array");
        }
        data = calculateHCF(body[key]);
        break;

      case "AI":
        if (typeof body[key] !== "string") {
          throw new Error("AI input must be a string");
        }
        data = await askAI(body[key]);
        break;

      default:
        return res.status(400).json({
          is_success: false,
          error: "Invalid key"
        });
    }

    res.status(200).json({
      is_success: true,
      official_email: process.env.OFFICIAL_EMAIL,
      data
    });

  } catch (error) {
    res.status(500).json({
      is_success: false,
      error: error.message
    });
  }
};