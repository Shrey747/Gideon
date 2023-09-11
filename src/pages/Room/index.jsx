import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function RoomPage() {
  const { roomId } = useParams();

  const myMeeting = async (element) => {
    const appID = 160919423;
    const serverSecret = "a9da6ed97d5b70f7b93756974b0ebade";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Kartik Vishwakarma"
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `localhost:3000/room/${roomId}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: true,
    });
  };

  return (
    <>
      <div ref={myMeeting} />
    </>
  );
}

export default RoomPage;
