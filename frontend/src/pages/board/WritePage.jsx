import EditorContainer from "../../containers/write/EditorContainer";
import TagBox from "../../components/write/TagBox";
import Wrapper from "../../components/common/Wrapper";
import { Title, subTitle } from "../../components/common/Title";
import WriteActionbutton from "../../components/write/WriteActionButton";
import TagBoxContainer from "../../containers/write/TagBoxContainer";

const WritePage = () => {
  return (
    <>
      <Wrapper>
        <Title>여행후기 글쓰기</Title>
        <EditorContainer />
        <TagBoxContainer />
        <WriteActionbutton />
      </Wrapper>
    </>
  );
};

export default WritePage;
