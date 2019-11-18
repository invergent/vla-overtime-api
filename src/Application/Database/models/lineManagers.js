const lineManagers = (sequelize, DataTypes) => {
  const LineManagers = sequelize.define('LineManagers', {
    idNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  LineManagers.associate = (models) => {
    LineManagers.hasMany(models.Staff, { as: 'supervisorSubordinates', foreignKey: 'supervisorId' });
    LineManagers.hasMany(models.Staff, { as: 'BSMSubordinates', foreignKey: 'bsmId' });
  };
  return LineManagers;
};

export default lineManagers;
