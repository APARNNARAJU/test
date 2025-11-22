const express=require('express');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}))
const employeeData=require('../models/depemp')
router.get("/:department", async (req, res) => {
  try {
    const dept = req.params.department;
    const employees = await employeeData.find({ department: dept });
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;