const router = require("express").Router();

const Controller = require("../controllers/WardController");

const { protect } = require("../middleware/AuthMiddleware");

// API endpoints for ward
router.post("/ward/create", protect, Controller.createWard);
router.get("/ward", protect, Controller.getAllWards);
router.get("/ward/:id", protect, Controller.getWardById);
router.put("/ward/:id", protect, Controller.updateWardById);
router.delete("/ward/:id", protect, Controller.deleteWardById);

// API endpoints for bed
router.post("/bed/create", protect, Controller.createBed);
router.get("/bed/", protect, Controller.getAllBeds);
router.get("/bed/occupacy-stats", protect, Controller.getOccupancyStats);
router.get("/bed/occupancy/:id", protect, Controller.getBedOccupancyById);
router.get("/bed/:id", protect, Controller.getBedById);
router.put("/bed/:id", protect, Controller.updateBedById);
router.delete("/bed/:id", protect, Controller.deleteBedById);

module.exports = router;
