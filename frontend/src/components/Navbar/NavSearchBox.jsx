import React, { useState } from 'react'
import {getUserDataReq} from '../../services/userService.js'
import { useQuery } from 'react-query';
import SearchedUser from './SearchedUser.jsx';
import Modal from '../common/Modal.jsx';

function NavSearchBox() {

const [searchUser, setSearchUser] = useState('')
const [isModalOpen, setIsModalOpen] = useState(false);
 const [modalContent, setModalContent] = useState(null);


const {data, error, isLoading,refetch} = useQuery(['searchUser', searchUser], () => getUserDataReq(searchUser),{
 enabled: false,
 onSuccess: (data) => {
    setIsModalOpen(true);
    setModalContent(<SearchedUser data={data} closeModal={closeModal} />);
  }
});
const closeModal = () =>
{
  setIsModalOpen(false);
}



  return (
    <div class="relative">
      <label class="sr-only" for="search">
        {" "}
        Search{" "}
      </label>

      <input
        class="h-10 w-full rounded-full border-2 border-gray-400 bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
        id="search"
        type="search"
        placeholder="Search..."
        autoComplete="off"
        value={searchUser}
        onChange={(e) => setSearchUser(e.target.value)}
      />

      <button
        type="button"
        class="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
        onClick={refetch}
      >
        <span class="sr-only">Search</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>

      {
        isModalOpen && <Modal content={modalContent} closeModal={closeModal} />
      }
    </div>
  );
}

export default NavSearchBox