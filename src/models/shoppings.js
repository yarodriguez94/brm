import {Sequelize, DataTypes} from 'sequelize';
import { sequelize } from '../database/db.js';
import { products } from './products.js';
import { users } from './users.js';

export const shoppings = sequelize.define('shoppings',{

    date_purchase:{
        type: DataTypes.DATE,
        allowNull:false,
    },
    id_product:{
        type: DataTypes.INTEGER,
        allowNull:false,   
        references: {
            model: products,
            key:'id',

        }
    },
    id_user:{
        type: DataTypes.INTEGER,        
        allowNull:false,
        references: {
            model: users,
            key:'id',
            
        }
    },
    amount_purchase:{
        type: DataTypes.INTEGER,        
        allowNull:false,
    }


});
