import User from "../models/User.model";

export const guardarUser = async (data) => {
  const guardar = await User.create(data);
  return guardar;
};

export const buscarUser = async (data) => {
  const user = await User.findOne({ where: data });
  return user;
};

export const actualizarUser = async (data, credentials) => {
  const user = await User.update(data, { where: credentials });
  return user;
};
