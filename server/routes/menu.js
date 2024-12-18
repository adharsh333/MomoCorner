const express = require('express');
const Menu = require('../models/Menu');

const router = express.Router();

// Get All Menu Items
router.get('/', async (req, res) => {
  try {
    const menuItems = await Menu.find();
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add New Menu Item
router.post('/', async (req, res) => {
  try {
    const newMenuItem = new Menu(req.body);
    await newMenuItem.save();
    res.status(201).json(newMenuItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
