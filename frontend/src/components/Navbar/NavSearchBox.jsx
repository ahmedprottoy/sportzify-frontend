import React from 'react'

function NavSearchBox() {
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
      />

      <button
        type="button"
        class="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
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
    </div>
  );
}

export default NavSearchBox