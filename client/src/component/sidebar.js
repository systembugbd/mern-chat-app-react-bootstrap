import React from "react";
import { Dropdown, Badge } from "react-bootstrap";
import botImage from "./../assets/images/bot.png";
import "./sidebar.css";

function Sidebar() {
  const rooms = ["First Room", "Second Room", "Third Room"];
  return (
    <div className="sidebar">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          All Rooms
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {rooms.map((room, index) => (
            <Dropdown.Item
              key={index}
              href={`#/action-${index}`}
              className="d-flex justify-content-between align-items-center"
            >
              {room}
              <Badge className="mx-5 me-auto" pill>
                14
              </Badge>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <h3 className=" my-5">Members</h3>
      <div className="d-flex justify-content-start flex-row align-items-center my-3">
        <div className=" position-relative">
          <img
            src={botImage}
            className="p5 border-1 rounded-circle"
            width={60}
            height={60}
          />
          <span
            className="userStatus position-absolute rounded-circle bg-info"
            bg="success"
            style={{
              width: "12px",
              height: "12px",
              bottom: "0px",
              right: "0px",
            }}
          ></span>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-start mx-3">
          <h4 className="mb-0" style={{ fontSize: "14px" }}>
            Shaheb Ali
          </h4>
          <p
            className="mb-0"
            style={{
              color: "gray",
              width: "200px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            I am a professional Web Developer
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-start flex-row align-items-center my-3">
        <div className=" position-relative">
          <img
            src={botImage}
            className="p5 border-1 rounded-circle"
            width={60}
            height={60}
          />
          <span
            className="userStatus position-absolute rounded-circle bg-info"
            bg="success"
            style={{
              width: "12px",
              height: "12px",
              bottom: "0px",
              right: "0px",
            }}
          ></span>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-start mx-3">
          <h4 className="mb-0" style={{ fontSize: "14px" }}>
            Shaheb Ali
          </h4>
          <p
            className="mb-0"
            style={{
              color: "gray",
              width: "200px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            I am a professional
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
