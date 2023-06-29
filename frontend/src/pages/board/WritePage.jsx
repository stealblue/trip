import EditorContainer from "../../containers/board/write/EditorContainer";
import WrapperComp from "../../components/common/WrapperComp";
// import TagBoxContainer from "../../containers/board/write/TagBoxContainer";
import WriteActionButtonsContainer from "../../containers/board/write/WriteActionButtonsContainer";

const WritePage = () => {
  return (
    <WrapperComp>
      <EditorContainer />
      {/* <TagBoxContainer /> */}
      <WriteActionButtonsContainer />
    </WrapperComp>
  );
};

export default WritePage;
