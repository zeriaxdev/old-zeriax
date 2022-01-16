import { useState, useEffect } from "react";

const TypeWriter = ({ content = "", speed = 100, terminal = false }) => {
  const [displayedContent, setDisplayedContent] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const animKey = setInterval(() => {
      setIndex((index) => {
        if (index >= content.length - 1) {
          clearInterval(animKey);
          return index;
        }
        return index + 1;
      });
    }, speed);
  }, [content, speed]);

  useEffect(() => {
    setDisplayedContent(
      (displayedContent) => displayedContent + content[index]
    );
  }, [index, content]);

  return (
    <span className={terminal ? "typewriter-terminal" : "typewriter"}>
      {displayedContent}
    </span>
  );
};

export default TypeWriter;
