import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../components/Navbar";
import { ORIGINAL_IMG_BASE_URL } from "../utils/constants";

const PersonDetailsPage = () => {

    const {id} = useParams();
    const [person, setPerson] = useState([]);

    useEffect(() => {
        const getPersonDetails = async () => {
            try {
                const res = await axios.get(`/api/v1/person/${id}`);
                setPerson(res.data.content);
            } catch (error) {
                console.log(error.message);
                setPerson([]);
            }
        }
        getPersonDetails();
    }, [id])

console.log("person: ", person)
  return (
        <div className='bg-black min-h-screen text-white'>
        <div className='mx-auto container px-4 py-8 h-full'>
            <Navbar/>


                    <div
                            className='flex flex-col md:flex-row items-center justify-between gap-20 
                        max-w-6xl mx-auto'
                        >
                            <div className='mt-20 mb-4 md:mb-0'>
                                <h2 className='text-5xl font-bold text-balance'>{person?.name}</h2>
                                <p className='mt-2 text-lg'>
                                    {person?.birthday} | {person.deathday ? person?.deathday : "Still Alive" } 
                                </p>
                                <p>
                                    {person?.place_of_birth}
                                    {person?.gender === 1 ? <p className='text-red-300'>Female</p> : <p className='text-blue-300'>Male</p> }
                                </p>
						<p className='mt-4 text-lg'>{person?.biography}</p>

                        </div>
                            <img
                                src={ORIGINAL_IMG_BASE_URL + person?.profile_path}
                                alt='Poster image'
                                className='max-h-[600px] rounded-md'
                            />
        </div>
    </div>
</div>
  )
}

export default PersonDetailsPage