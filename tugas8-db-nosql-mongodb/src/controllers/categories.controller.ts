import { Request, Response } from "express";
import CategoryModel from "@/models/categories.model";

export default {
  async create(req: Request, res: Response) {
    try {
      const result = await CategoryModel.create(req.body);
      res.status(201).json({
        data: result,
        message: "Success create category",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed create category",
      });
    }
  },
  async findAll(req: Request, res: Response) {
    try {
      const result = await CategoryModel.find().populate("productId");
      res.status(200).json({
        data: result,
        message: "Success get all category.model",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed get all category.model",
      });
    }
  },
  async findOne(req: Request, res: Response) {
    try {
      const result = await CategoryModel.findOne({
        _id: req.params.id,
      }).populate("productId");
      res.status(200).json({
        data: result,
        message: "Success get one category",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed get one category",
      });
    }
  },
  async update(req: Request, res: Response) {
    try {
      const result = await CategoryModel.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {
          new: true,
        }
      ).populate("productId");

      res.status(200).json({
        data: result,
        message: "Success update category",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed update category",
      });
    }
  },
  async delete(req: Request, res: Response) {
    try {
      const result = await CategoryModel.findOneAndDelete({
        _id: req.params.id,
      }).populate("productId");

      res.status(200).json({
        data: result,
        message: "Success delete category",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed delete category",
      });
    }
  },
};
