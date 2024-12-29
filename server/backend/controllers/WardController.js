const { Ward, Bed } = require("../models/WardModel");

//create new Ward
exports.createWard = async (req, res) => {
  try {
    if (req.user.role !== "Admin") {
      res.status(400);
      throw new Error("You are not authorised");
    }

    const { name, type, capacity, location, freeBed } = req.body;

    if (!name || !type || !capacity || !location || !freeBed) {
      return res.status(400).json({
        msg: "Please enter all fields",
      });
    }

    const ward = await Ward.findOne({ name });
    if (ward) {
      return res.status(400).json({
        msg: `Ward already exist and has a capacity of ${ward.capacity}`,
      });
    }

    const newWard = await Ward.create({
      name,
      type,
      capacity,
      location,
      freeBed,
    });
    res.status(201).json(newWard);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

// Get all Wards
exports.getAllWards = async (req, res) => {
  try {
    if (req.user.role !== "Admin") {
      res.status(400);
      throw new Error("You are not authorised");
    }

    const wards = await Ward.find();
    res.json(wards);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch wards" });
  }
};

// Get a single ward by ID
exports.getWardById = async (req, res) => {
  try {
    if (req.user.role !== "Admin") {
      res.status(400);
      throw new Error("You are not authorised");
    }

    const ward = await Ward.findById(req.params.id);
    if (!ward) {
      return res.status(404).json({ msg: "Ward not found." });
    }
    res.json(ward);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the ward." });
  }
};

// Update a ward by ID
exports.updateWardById = async (req, res) => {
  try {
    if (req.user.role !== "Admin") {
      res.status(400);
      throw new Error("You are not authorised");
    }

    const updatedWard = await Ward.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedWard) {
      return res.status(404).json({ msg: "Ward not found." });
    }
    res.json(updatedWard);
  } catch (error) {
    res.status(500).json({ error: "Failed to update the ward." });
  }
};

//Delete a ward by ID
exports.deleteWardById = async (req, res) => {
  try {
    if (req.user.role !== "Admin") {
      res.status(400);
      throw new Error("You are not authorised");
    }

    const deletedWard = await Ward.findByIdAndRemove(req.params.id);
    if (!deletedWard) {
      return res.status(404).json({ msg: "Ward not found." });
    }
    res.json({ msg: "Ward deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the Ward." });
  }
};

// Create a new Bed
exports.createBed = async (req, res) => {
  try {
    if (req.user.role !== "Admin") {
      res.status(400);
      throw new Error("You are not authorised");
    }

    const { uniqueNumber, patientId, wardId, occupancy } = req.body;
    if (!uniqueNumber || !patientId || !wardId || !occupancy) {
      return res.status(400).json({
        msg: "Please enter all fields",
      });
    }

    const ward = await Ward.findOne({ _id: wardId });
    if (!ward) {
      return res.status(400).json({ msg: "No ward found with the id." });
    }

    const bed = await Bed.findOne({ uniqueNumber });
    if (bed) {
      return res.status(400).json({
        msg: `Bed already exist with a bed number ${Bed.uniqueNumber}`,
      });
    }
    const newBed = await Bed.create({
      uniqueNumber,
      patientId,
      wardId,
      occupancy,
    });
    res.status(201).json(newBed);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

//Get all beds
exports.getAllBeds = async (req, res) => {
  try {
    if (req.user.role !== "Admin") {
      res.status(400);
      throw new Error("You are not authorised");
    }

    const beds = await Bed.findOne();
    res.json(beds);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch beds" });
  }
};

// Get a single bed by ID
exports.getBedById = async (req, res) => {
  try {
    if (req.user.role !== "Admin") {
      res.status(400);
      throw new Error("You are not authorised");
    }

    const bed = await Bed.findById(req.params.id);
    if (!bed) {
      return res.status(404).json({ msg: "Bed not found" });
    }
    res.json(bed);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the bed." });
  }
};

// Get bed occupancy status
exports.getBedOccupancyById = async (req, res) => {
  try {
    if (req.user.role !== "Admin") {
      res.status(400);
      throw new Error("You are not authorised");
    }

    const id = req.params.id;
    const bed = await Bed.findById(id);

    if (!bed) {
      return res.status(404).json({ error: "Bed not found" });
    }

    res.json({ occupancy: bed.occupancy });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the bed occupancy" });
  }
};

// Get bed occupancy statistics
exports.getOccupancyStats = async (req, res) => {
  try {
    if (req.user.role !== "Admin") {
      res.status(400);
      throw new Error("You are not authorised");
    }

    const beds = await Bed.find();

    const stats = {
      empty: 0,
      occupied: 0,
      reserved: 0,
    };

    for (const bed of beds) {
      if (bed.occupancy === "Empty") {
        stats.empty++;
      } else if (bed.occupancy === "Occcupied") {
        stats.occupied++;
      } else if (bed.occupancy === "Reserved") {
        stats.reserved++;
      }
    }

    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch occupancy statistics" });
  }
};

// Update a bed by ID
exports.updateBedById = async (req, res) => {
  try {
    if (req.user.role !== "Admin") {
      res.status(400);
      throw new Error("You are not authorised.");
    }

    const updatedBed = await Bed.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBed) {
      return res.status(404).json({ msg: "Bed not found." });
    }
    res.json(updatedBed);
  } catch (error) {
    res.status(500).json({ error: "Failed to update the Bed." });
  }
};

// Delete a bed by ID
exports.deleteBedById = async (req, res) => {
  try {
    if (req.user.role !== "Admin") {
      res.status(400);
      throw new Error("You are not authorised");
    }

    const deletedBed = await Bed.findByIdAndRemove(req.params.id);
    if (!deletedBed) {
      return res.status(404).json({ msg: "Bed not found." });
    }
    res.json({ msg: "Bed deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the Bed" });
  }
};
