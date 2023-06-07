import React from 'react'
import {useNavigate} from 'react-router-dom'
import Button from '../common/Button'
import { useQueryClient } from 'react-query';

function SearchedUser({data, closeModal}) {
const {username,fullname,imageUrl} = data;
    const navigate=useNavigate();
    const queryClient = useQueryClient();

  return (
    <div>
        <p className='text-2xl font-semibold mb-5'>Result: </p>
        <div className='flex flex-row rounded-lg shadow-lg border-1 border-solid p-2 '>
            <img src={imageUrl} alt="profile" className="h-28 w-28 rounded-full object-cover" />
            <div className='mx-20 flex flex-col gap-3'>
                <p className='text-3xl'>{fullname}</p>
                <p className='text-xl text-gray-500'>{username}</p>
                <Button text='View Profile' onClick={()=>{
                    queryClient.invalidateQueries("userData");
                    closeModal();
                    navigate(`/profile/${username}`);
                }} />
            </div>
        </div>
          


    </div>
  )
}

export default SearchedUser