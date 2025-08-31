import { PlusIcon } from "lucide-react";
import "./Sidebar.css";
import {
  History, // history icon
  Menu, // menu icon
  Plus, // plus icon
  HelpCircle, // question icon
  Settings, // settings icon
  Lightbulb, // bulb icon
  Compass, // compass icon
  Image, // gallery icon (or Gallery if available)
  Mic, // mic icon
  User, // user icon
  MessageSquare, // message icon
  Code, // code icon
  Send, // send icon
  Sparkles, // gemini icon (closest alternative)
} from "lucide-react";
import { FileQuestion } from "lucide-react";
import { HistoryIcon } from "lucide-react";
import { SettingsIcon } from "lucide-react";
import { MessageCircleQuestionMark } from "lucide-react";
import { useState } from "react";
import { useContext } from "react";
import { context } from "../../context/context";

const Sidebar = () => {
  const [isExtended, setIsExtended] = useState(false);
  const { onSent, previousPrompts, setRecentPrompt, newChat } =
    useContext(context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Menu
          size={25}
          className="menu img"
          onClick={() => setIsExtended(!isExtended)}
        />
        <div onClick={newChat} className="new-chat">
          <PlusIcon className="img" size={20} />
          {isExtended && <p>New Chat</p>}
        </div>
        {isExtended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {previousPrompts.map((item, index) => (
              <div
                onClick={() => loadPrompt(item)}
                key={index}
                className="recent-entry"
              >
                <MessageSquare className="img" size={20} />
                <p>{item.slice(0, 18)}...</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <MessageCircleQuestionMark className="img" size={20} />
          {isExtended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <HistoryIcon className="img" size={20} />
          {isExtended && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <SettingsIcon className="img" size={20} />
          {isExtended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
