import React, { useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'

const DeleteBook = () => {
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = () => {
        setLoading(true);
        axios.delete(`http://localhost:5555/books/${id}`)
            .then((response) => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
                alert("Error happen while performing delete operation");
            })
    }

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Delete Book</h1>
            {loading ? <Spinner /> : (
                <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
                    <h3 className='text-2xl'> Are you sure to Delte this book ?</h3>
                    <button className='p-4 bg-red-500 text-white m-8 w-full' onClick={handleDelete}>Delete It</button>
                </div>
            )}

        </div>
    )
}

export default DeleteBook