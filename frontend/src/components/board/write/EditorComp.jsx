import { useRef, useEffect } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditorBlock = styled.div`
  margin-top: 30px;
`;
const TitleInput = styled.input`
  font-size: 24px;
  padding: 10px 20px;
  width: 80%;
  border: none;
  border-bottom: 2px solid #333;
  display: block;
  margin: 0 auto;
  outline: none;
`;
const QuillWrapper = styled.div`
  padding: 10px;
  min-height: 500px;
  height: 500px;
  margin-top: 20px;

  .ql-editor.ql-blank::before {
    left: 0px;
    padding: 20px;
  }
`;

const EditorComp = ({ title, content, onChangeField }) => {
  console.log("111111110>", title, content);
  const quillElement = useRef(null); //Quill적용할 divelement 설정
  const quillInstance = useRef(null); // Quill 인스턴스 설정
  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "snow",
      placeholder: "내용 입력",
      modules: {
        toolbar: [
          [{ header: "1" }, { header: "2" }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "oredered" }, { list: "bullet" }],
          ["blockquote", "code-block", "link", "image"],
        ],
      },
    });
    const quill = quillInstance.current;
    quill.on("text-change", (delta, oldDelta, source) => {
      if (source === "user") {
        onChangeField({ key: "content", value: quill.root.innerHTML });
      }
    });
  }, [onChangeField]);

  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    quillInstance.current.root.innerHTML = content;
  }, [content]);

  const onChangeTitle = (e) => {
    onChangeField({ key: "title", value: e.target.value });
  };

  return (
    <EditorBlock>
      <TitleInput placeholder="제목입력" onChange={onChangeTitle} value={title} />
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </EditorBlock>
  );
};

export default EditorComp;
