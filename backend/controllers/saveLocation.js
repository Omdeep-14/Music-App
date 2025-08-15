import express from "express";

export const saveLocation = async (req, res) => {
  try {
    const userId = req?.auth?.userId;
    const { country, state, city, area } = req.body;

    if (!userId) {
      return res
        .status(401)
        .json({ success: false, message: "UNAUTHORIZED ACCESS" });
    }

    if (!country || !state || !city) {
      return res.status(400).json({
        success: false,
        message: "Country,State and CIty are compulsory",
      });
    }

    res
      .status(200)
      .json({ success: true, message: "Profile saved successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Unable to save profile" });
  }
};
