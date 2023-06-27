import EditorComp from "../../components/write/EditorComp";
import TagBoxComp from "../../components/write/TagBoxComp";
import WrapperComp from "../../components/common/WrapperComp";
import { TitleComp } from "../../components/common/TitleComp";
import WriteActionbuttonComp from "../../components/write/WriteActionButtonComp";

const WritePage = () => {
  return (
    <>
      <WrapperComp>
        <TitleComp>여행후기 글쓰기</TitleComp>
        <EditorComp />
        <TagBoxComp />
        <WriteActionbuttonComp />
      </WrapperComp>
    </>
  );
};

export default WritePage;
