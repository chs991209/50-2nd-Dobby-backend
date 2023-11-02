const {appDataSource} = require("../entity/utils");
const findAddress = async (userId) => {
    try {   // return => [{"":"", "":"", ..}]
        return await appDataSource.query(
            `
                    SELECT 
                    id, 
                    users_id, 
                    phonenumber,
                    content,
                    name 
                    FROM 
                    address 
                    WHERE 
                    users_id = '${userId}'
                    `
        );
    } catch (e) {
        console.error(e);
    }
}


const generateAddress = async (userId, content, phonenumber, name) => {
    try {
            return await appDataSource.query(
                `
                INSERT 
                INTO 
                address(users_id, content, phonenumber, name) 
                VALUES 
                (
                '${userId}', 
                '${content}', 
                '${phonenumber}', 
                '${name}'
                );
                `
            )
    } catch (e) {
        console.error(e);
    }
}


module.exports = { findAddress, generateAddress }