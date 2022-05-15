'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LinkedinPosts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LinkedinPosts.init({
    text: DataTypes.TEXT,
    postDate: DataTypes.DATEONLY,
    postHour: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'LinkedinPost',
  });
  return LinkedinPosts;
};