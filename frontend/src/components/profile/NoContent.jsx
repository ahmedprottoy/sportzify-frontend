import React from 'react'
import Noblog from '../../assets/noContent.svg'
import ButtonUI from '../common/ButtonUI';
import { useNavigate } from 'react-router-dom';
import CreateIcon from'../../assets/create.png'

function NoContent() {
    const navigate=useNavigate();
  return (
    <div className="flex flex-col items-center">
      <img
        src={Noblog}
        alt="no content"
        className="w-2/3 object-cover rounded-md"
        loading="lazy"
      />

      <p className='text-3xl font-semibold'>Nothing to show here...</p>

      <ButtonUI
        text="Create Blogs here!"
        onClick={() => navigate("/create")}
        className="mt-10"
        Icon={CreateIcon}
      />
    </div>
  );
}

export default NoContent