import { Button } from "@mui/material";
import React from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const Home = () => {
  const sampleData = [
    {
      id: 1,
      date: "Feb 28",
      todos: 3,
      mention: 0,
      notes: "Start working on the next case study and publish by Kiel",
      time: "1min",
    },
    {
      id: 2,
      date: "Jan 28",
      todos: 5,
      mention: 9,
      notes: "Start working on the next case study and publish by Bomba na",
      time: "1h",
    },
    {
      id: 3,
      date: "June 28",
      todos: 1,
      mention: 0,
      notes: "Start working on the next case study and publish by Rhona",
      time: "3d",
    },
    {
      id: 4,
      date: "Feb 28",
      todos: 3,
      mention: 15,
      notes: "Start working on the next case study and publish by Aint",
      time: "5h",
    },
    {
      id: 5,
      date: "Feb 28",
      todos: 3,
      mention: 0,
      notes: "Start working on the next case study and publish by yaew",
      time: "1h",
    },
    {
      id: 6,
      date: "Feb 28",
      todos: 3,
      mention: 0,
      notes: "Start working on the next case study and publish by Ion",
      time: "1h",
    },
    {
      id: 7,
      date: "December 04",
      todos: 9,
      mention: 0,
      notes: "Start working on the next case study and publish by Soya",
      time: "10h",
    },
  ];

  return (
    <div className="grid gap-5 p-2">
      <div className="title">
        <span className="font-bold text-2xl">Home</span>
      </div>

      <section>
        <div className="flex flex-wrap gap-5 justify-center sm:justify-start">
          <figure className="bg-black/40 shadow-2xl">
            <img
              src="/src/assets/google-keep-notes-and-lists-icon-free-png.webp"
              alt="notes image"
              width={200}
              height={200}
            />
          </figure>
          <figcaption className="grid gap-2 justify-center items-center content-center">
            <span className="font-bold text-2xl">Daybreak Note</span>
            <span className="text-sm font-semibold text-gray-500">
              3 notes 4 people
            </span>
          </figcaption>
        </div>
      </section>

      <section>
        <div className="flex justify-center sm:justify-start items-center content-center gap-5">
          <span className="font-bold text-2xl">Notes</span>
          <Button
            variant="outlined"
            color="dark"
            size="small"
            startIcon={<AddOutlinedIcon />}
            c
          >
            New
          </Button>
        </div>
        <div className="flex flex-wrap gap-10 mt-4 justify-center sm:justify-start">
          {sampleData &&
            sampleData.map((data) => (
              <div className="h-70 w-70 overflow-hidden bg-white border border-gray-300 p-2 grid justify-start items-center content-start gap-5">
                <div className="grid">
                  <span className="font-bold">Meeting {data.date}</span>
                  <span className="text-black text-sm">
                    {data.todos} To Dos - {data.mention} mentions
                  </span>
                </div>

                <div className="grid">
                  <span className="text-sm text-black">{data.notes}</span>
                </div>

                <div className="grid">
                  <span className="text-black text-sm">
                    Start working on the next case study and publish by...
                  </span>
                </div>
                <div className="text-sm text-gray-500 flex justify-start items-center">
                  <AccessTimeOutlinedIcon fontSize="small" />
                  <span> {data.time} ago</span>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
