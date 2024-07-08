import subject from "../../models/subject.js";
export const create = async (req, res) => {
  const { title } = req.body;
  const sub = await subject.create({
    title,
  });
  res.status(201).json(sub);
};

export const getAll = async (req, res) => {
  const { title } = req.body;
  const sub = await subject.find();
  res.status(200).json(sub);
};

export const getOne = async (req, res) => {
  const { title } = req.body;
  const sub = await subject.findById(req.params.id);
  res.status(200).json(sub);
};

export const update = async (req, res) => {
  const { title } = req.body;
  const sub = await subject.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json(sub);
};

export const remove = async (req, res) => {
  const { title } = req.body;
  const sub = await subject.findByIdAndDelete(req.params.id);
  res.status(200).json(sub);
};
