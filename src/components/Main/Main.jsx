import { UserIcon } from "lucide-react";
import "./Main.css";
import { CompassIcon } from "lucide-react";
import { Lightbulb } from "lucide-react";
import { Code } from "lucide-react";
import { MessageCircleCode } from "lucide-react";
import { GalleryVerticalIcon } from "lucide-react";
import { Mic } from "lucide-react";
import { Send } from "lucide-react";
import { GalleryHorizontal } from "lucide-react";
import { GalleryThumbnailsIcon } from "lucide-react";
import { Image } from "lucide-react";
import { useContext } from "react";
import { context } from "../../context/context";
import geminiLogo from "../../assets/geminiLogo1.png";
const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <div className="profile">
          <UserIcon size={24} />
        </div>
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, John.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <div className="img">
                  <CompassIcon size={24} />
                </div>
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <div className="img">
                  <Lightbulb size={24} />
                </div>
              </div>
              <div className="card">
                <p>Improve the readibilty of the following code</p>
                <div className="img">
                  <Code size={24} />
                </div>
              </div>
              <div className="card">
                <p>
                  Brainstorm team onboarding activities for our work retreat
                </p>
                <div className="img">
                  <MessageCircleCode size={24} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <UserIcon size={24} />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={geminiLogo} alt="logo" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSent(input);
                  setInput("");
                }
              }}
              placeholder="Enter a prompt here"
            />
            <div className="input-icon-container">
              <div className="img">
                <Image size={24} />
              </div>
              <div className="img">
                <Mic size={24} />
              </div>
              {input ? (
                <div
                  className="img"
                  onClick={() => {
                    onSent(input);
                    setInput("");
                  }}
                >
                  <Send size={24} />
                </div>
              ) : null}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // margin: "12px",
            }}
          >
            <p className="bottom-info">
              Gemini may display inaccurate info, including about people, so
              double-check its responses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
