import pool from '../database.js'
export const login = (req,res) => {
    try{
        const {emial,pwd} = req.body
        // return res.status(200).json({message : 'sucessfully logged in'})
        const user = 
        res.json({message : 'sucessfully logged in'})
    }
    catch(err){
        console.log(err)
    }
}



