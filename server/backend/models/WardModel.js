const mongoose = require("mongoose");

// Ward Scheme
const WardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
      default: 0,
    },
    location: {
      type: String,
      required: true,
    },
    freeBeds: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Bed Scheme
const BedSchema = new mongoose.Schema(
  {
    uniqueNumber: {
      type: String,
      required: true,
      unique: true,
    },
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    wardId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ward",
      required: true,
    },
    occupancy: {
      type: String,
      enum: ["Reserved", "Occupied", "Empty"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Ward = mongoose.models.Ward || mongoose.model("Ward", WardSchema);

const Bed = mongoose.models.Bed || mongoose.model("Bed", BedSchema);

module.exports = { Ward, Bed };
