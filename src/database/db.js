import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    "brm_db",
     "root",
    "root",
    {
        hots:'localhost',
        dialect:'mysql'

    }
    );

    