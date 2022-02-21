import React from "react";

function Language() {
  return (
    <div className="px-4 w-full py-4">
      <p>You current language is English.</p>
      <div className="flex items-center justify-start gap-3 mt-5">
        <span> Change Language</span>
        <select
          class="form-select form-select-lg mb-3
          appearance-none
          block
          px-4
          py-2
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding bg-no-repeat
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label=".form-select-lg example"
        >
          <option selected value="en">
            English
          </option>
          <option value="ar">Arabic</option>
          <option value="fr">Frensh</option>
        </select>
      </div>

      <div className="w-1/2 flex justify-end items-center pt-7">
        <button class=" h-12 px-3 text-white transition-colors duration-150 bg-blue-700 rounded-lg focus:shadow-outline hover:bg-blue-800 ">
          Save
        </button>
      </div>
    </div>
  );
}

export default Language;
