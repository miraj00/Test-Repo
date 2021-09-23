const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// create our Post model
class Post extends Model { }

 
// create fields/columns for Post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    office_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    office_address: {
      type: DataTypes.TEXT,
      allowNull: false,
      },

    contact_number: {
    type: DataTypes.TEXT,
     allowNull: false,   
      },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);

module.exports = Post;
