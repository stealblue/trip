import { useRef, useEffect } from "react";

import styled from "styled-components";
import Quill from "quill";
import "quill/dist/quill.snow.css";

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

const Editor = ({ title, body, onChangeField }) => {
  const quillElment = useRef(null); //Quill을 적용할 DivElement설정
  const quillInstance = useRef(null); //Quill 인스턴스 설정

  var toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];

  useEffect(() => {
    quillInstance.current = new Quill(quillElment.current, {
      theme: "snow",
      placeholder: "내용을 작성해주세요",
      modules: {
        toolbar: toolbarOptions,
      },
    });
    const quill = quillInstance.current;
    quill.on("text-change", (delta, oldDelta, source) => {
      if (source === "user") {
        onChangeField({ key: "body", value: quill.root.innerHTML });
      }
    });
  }, [onChangeField]);

  const onChangeTitle = (e) => {
    onChangeField({ key: "title", value: e.target.value });
  };

  return (
    <EditorBlock>
      <TitleInput placeholder="제목을 입력해주세요" onChange={onChangeTitle} value={title} />
      <QuillWrapper>
        <div ref={quillElment} />
      </QuillWrapper>
    </EditorBlock>
  );
};

export default Editor;
