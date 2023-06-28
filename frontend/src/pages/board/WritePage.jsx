import EditorContainer from "../../containers/board/write/EditorContainer";
import WrapperComp from "../../components/common/WrapperComp";
import WriteActionbuttonsComp from "../../components/board/write/WriteActionButtonsComp";
import TagBoxContainer from "../../containers/board/write/TagBoxContainer";

const WritePage = () => {
  return (
    <WrapperComp>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionbuttonsComp />
    </WrapperComp>
  );
};

export default WritePage;
