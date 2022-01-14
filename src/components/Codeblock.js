import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Codeblock = ({ string, lang }) => {
  return (
    <div contentEditable="true">
      <SyntaxHighlighter language={lang} style={a11yDark}>
        {string}
      </SyntaxHighlighter>
    </div>
  );
};

export default Codeblock;
