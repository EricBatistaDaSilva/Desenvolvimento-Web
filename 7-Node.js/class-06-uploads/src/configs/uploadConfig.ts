import multer from "multer";
import path from "path";
import crypto from "node:crypto";
import { Request } from "express";

export const UPLOADS_FOLDER = path.resolve(__dirname, "..", "uploads");

const storage = multer.diskStorage({
  destination: UPLOADS_FOLDER,
  filename(_req, file, callback) {
    const hash = crypto.randomBytes(10).toString("hex");
    const fileName = `${hash}_${file.originalname.replaceAll(" ", "_")}`;
    return callback(null, fileName);
  },
});

const fileFilter = (
  _req: Request,
  file: Express.Multer.File,
  callback: multer.FileFilterCallback
) => {
  const formatfiles = ["image/jpeg", "image/pjepg", "image/png", "image/gif"];

  if (formatfiles.includes(file.mimetype)) return callback(null, true);

  const error = new Error("Invalid image type!") as Error & { status: number };
  error.status = 400;

  if (callback) {
    callback(error, false);
  }
};

export const MULTER = {
  storage,
  fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 2, //2MB
  },
};
