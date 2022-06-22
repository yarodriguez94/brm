import {Sequelize, DataTypes} from 'sequelize';
import { sequelize } from '../database/db.js';

export const productsModel = sequelize.define('products', {

    id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,

    },
    lot_numer:{
        type: DataTypes.INTEGER(200),
        allowNull:false,

    },

    name_product:{
        type: DataTypes.STRING(100),
        allowNull:false,        
    },
    
    price: {
        type: DataTypes.INTEGER(50),
        allowNull:false,
    },

    quantity_available:{
        type: DataTypes.INTEGER(20), 
        allowNull:false
    },

    date_entry:{
        type:DataTypes.DATE,
        allowNull:false,
    }

});
