const mongoose = require("mongoose");
const { Schema } = mongoose;
const objectID = Schema.ObjectId;

const siteSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    domain: {
      type: String,
      index: true,
      required: true,
    },
    thumbnail: {
      type: String,
      trim: true,
    },
    user: { type: Schema.Types.ObjectId, ref: "User", index: true },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("Site", siteSchema);
