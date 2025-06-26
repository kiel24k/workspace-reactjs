import {
  FormControl,
  Input,
  InputLabel,
  TextField,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const Navbar = () => {
  return (
    <div className="grid sm:flex justify-center gap-5 md:justify-between items-center p-2  ">
      <div className="flex justify-center md:justify-start">
        <FormControl variant="standard">
          <OutlinedInput
            id="input-with-icon-adornment"
            size="small"
            placeholder="Search Title"
            endAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </div>

      <div className="grid">
        <ul className="flex gap-10">
          <li>
            <div className="flex rounded-md bg-gray-100 p-2">
              <span className="text-sm">Dev Update</span>
              <span className="bg-red-500 rounded-2xl grid justify-center items-center w-4 h-4 content-center text-white p-2 shadow-2xl">1</span>
            </div>
          </li>
          <li>
           <div className="flex p-2 gap-2 text-sm bg-gray-100 rounded-2xl text-gray-500 font-semibold">
             <span>
              Share
            </span>
            <ShareOutlinedIcon fontSize="small"/>

           </div>
          </li>
          <li>
            <MoreHorizIcon fontSize="medium" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
