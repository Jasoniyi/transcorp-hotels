import React, { useState } from "react";
import { MDBRow, MDBCol } from "mdbreact";

import ClassicRoom from "../../components/Resources/rectangle-9-copy.png";
import GrandRoom from "../../components/Resources/rectangle-9-copy-2.png";
import UltraRoom from "../../components/Resources/rectangle-9-copy-3.png";

const roomCategories = [
  {
    img: ClassicRoom,
    roomType: "Classic Room",
    price: "40.00"
  },
  {
    img: GrandRoom,
    roomType: "Grand Deluxe Room Room",
    price: "40.00"
  },
  {
    img: UltraRoom,
    roomType: "Ultra Superior Room",
    price: "40.00"
  }
];

const Rooms = () => {
  const [rooms, setRooms] = useState(roomCategories);
  return (
    <div className="rooms-wrapper">
      <MDBRow className="rooms">
        <MDBCol md="5">
          <div className="rooms-left">
            <div className="title-tag mt-5">Discover our rooms</div>
            <div className="rooms-title mb-4">Luxury interior</div>
            <div>
              {rooms.map((room, i) => (
                <div className="room-types">
                  <div className="rooms-img p-2">
                    <img src={room.img} />
                  </div>
                  <div className="room-category">
                    <div className="room-category-name mt-2 text-bold">
                      {room.roomType}
                    </div>
                    <div className="room-category-price">
                      Starting from <strong>${room.price}</strong> / Night
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MDBCol>
        <MDBCol md="7" className="room-img"></MDBCol>
      </MDBRow>
    </div>
  );
};

export default Rooms;
