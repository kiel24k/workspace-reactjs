import React from "react";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import { Link, NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div className="fixed min-w-70  bg-white h-full border-r-1 border-gray-300 ">
      
      <nav className="grid ml-5 mt-5">
        <ul className="grid gap-5">
           <li className="mb-5">
            <div className="flex gap-2">
              <Link to="/">
                <span className="font-bold text-2xl">Title</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="flex gap-2">
              <HistoryEduIcon />
              <span>Template</span>
            </div>
          </li>
          <li>
            <div className="flex gap-2">
              <ArrowDownwardIcon />
              <span>Import</span>
            </div>
          </li>
          <li>
            <div className="flex gap-2">
              <DeleteOutlineIcon />
              <span>Trash</span>
            </div>
          </li>
        </ul>

        <ul className="grid gap-5 mt-5">
          <li>
            <span className="font-bold text-gray-300 uppercase">workspace</span>
          </li>
          <li>
             <div className="flex gap-2">
              <TextSnippetOutlinedIcon />
              <span>Notes</span>
            </div>
          </li>
            <li>
             <div className="flex gap-2">
              <TaskOutlinedIcon />
              <span>Task</span>
            </div>
          </li>
          <li>
             <div className="flex gap-2">
              <CampaignOutlinedIcon />
              <span>Announcement</span>
            </div>
          </li>
           <li>
             <div className="flex gap-2">
              <LibraryMusicOutlinedIcon />
              <span>Music</span>
            </div>
          </li>
           <li>
             <div className="flex gap-2">
              <HelpOutlineOutlinedIcon />
              <span>Questions</span>
            </div>
          </li>
           <li>
             <div className="flex gap-2">
              <DashboardOutlinedIcon />
              <span>Dashboard</span>
            </div>
          </li>
           <li>
             <div className="flex gap-2">
              <CodeOutlinedIcon />
              <span>Development</span>
            </div>
          </li>
           <li>
             <div className="flex gap-2">
              <BoltOutlinedIcon />
              <span>Swift</span>
            </div>
          </li> 
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
