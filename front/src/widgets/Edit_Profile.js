import React from "react";

function Edit_Profile() {
  return (
    <div className="w-full h-full overflow-scroll overflow-x-hidden  px-4 pb-7">
      <span className="mt-5 block font-bold ">Edit Profile</span>

      {/* profile pic to edit */}

      <div className="">
        <img
          className="inline object-cover w-20 h-20 mb-4 rounded-full"
          src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Profile image"
        />
      </div>

      {/* form */}

      <form className="grid grid-cols-2 gap-12 items-center">
        <div class="text-black col-span-1">
          <label class="block mb-1" for="forms-labelOverInputCode">
            Full name
          </label>
          <input
            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="text"
            placeholder="Robert Lewandowski"
            id="forms-labelOverInputCode"
          />
        </div>

        <div class="text-black col-span-1">
          <label class="block mb-1" for="forms-labelOverInputCode">
            Birthday
          </label>
          <input
            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="date"
            value="2020-01-01"
            id="forms-labelOverInputCode"
          />
        </div>

        <div class="text-black col-span-1">
          <label class="block mb-1" for="forms-labelOverInputCode">
            Email
          </label>
          <input
            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="email"
            placeholder="liwagoal@yahoo.com"
            id="forms-labelOverInputCode"
          />
        </div>

        <div class="text-black col-span-1">
          <label class="block mb-1" for="forms-labelOverInputCode">
            Bio
          </label>
          <input
            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="text"
            placeholder="UI designer"
            id="forms-labelOverInputCode"
          />
        </div>

        <div class="text-black col-span-1">
          <label class="block mb-1" for="forms-labelOverInputCode">
            Phone Number
          </label>
          <input
            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="number"
            placeholder="+21652648462"
            id="forms-labelOverInputCode"
          />
        </div>

        <div class="text-black col-span-1">
          <label class="block mb-1" for="forms-labelOverInputCode">
            Website
          </label>
          <input
            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="text"
            placeholder="liwa.com"
            id="forms-labelOverInputCode"
          />
        </div>

        <div class="text-black col-span-1">
          <label class="block mb-1" for="forms-labelOverInputCode">
            Gender
          </label>
          <div class="w-full flex justify-start items-center h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline">
            <label class="text-gray-700 w-1/2">
              <input type="radio" value="m" name="gender" />
              <span class="ml-1">Male</span>
            </label>

            <label class="text-gray-700">
              <input type="radio" value="f" name="gender" />
              <span class="ml-1">Female</span>
            </label>
          </div>
        </div>

        <div class="text-black col-span-1">
          <label class="block mb-1" for="forms-labelOverInputCode">
            Location
          </label>
          <input
            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="text"
            placeholder="El Fahs"
            id="forms-labelOverInputCode"
          />
        </div>
      </form>
    </div>
  );
}

export default Edit_Profile;
