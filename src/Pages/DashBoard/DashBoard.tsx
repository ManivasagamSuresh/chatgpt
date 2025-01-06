import React from "react";

function DashBoard() {
  return (
    <div className="Dashboard_Right">
      <div className="Dashboard_RightText">
        <div className="Dashboard_RightText-Logo">
          <img src="/media/logo.png" alt="" />
          <h1>MB AI</h1>
        </div>

        <div className="Dashboard_RightText-Options">
          <div className="Dashboard_RightText-Option">
            <img src="/media/chat.png" alt="" />
            <span>Create a New Chat</span>
          </div>
          <div className="Dashboard_RightText-Option">
            <img src="/media/image.png" alt="" />
            <span>Analyze Images</span>
          </div>
          <div className="Dashboard_RightText-Option">
            <img src="/media/code.png" alt="" />
            <span>Help me with my Code</span>
          </div>
        </div>
      </div>

      <div className="Dashboard_Right-Form">
        <form action="">
          <input type="text" placeholder="Ask me anything..." />
          <button>
            <img src="/media/arrow.png" alt="" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default DashBoard;
