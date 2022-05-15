const Models = require("../../../models/index");

const findAll = async () => await Models.LinkedinPost.findAll();

const findByPk = async (userId) => await Models.LinkedinPost.findByPk(userId,{include: ['user']});

const create = async (user) => await Models.LinkedinPost.create(user);

const update = async (user, userId) => await Models.LinkedinPost.update(user, { where: { id: userId } });

const destroy = async (userId) => await Models.LinkedinPost.destroy({ where: { userId: userId } });

const findOne = async (user) => await Models.LinkedinPost.findOne(user);

module.exports = {
    findAll,
  findByPk,
  create,
  update,
  destroy,
  findOne,
}