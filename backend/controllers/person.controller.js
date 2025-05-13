import { fetchFromTMDB } from '../services/tmdb.service.js';

export const getPersonDetails = async (req, res) => {
   const {id} = req.params;
    
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/person/${id}?language=en-US`);

        res.json({success: true, content: data})
    } catch (error) {

        if(error.message.includes("404")){
            return res.status(404).send(null)
        }
        
        res.status(500).json({success: false, message: "Internal Server Error" });
    }
}