import Editor from "../../components/write/Editor";
import TagBox from "../../components/write/TagBox";
import Wrapper from "../../components/common/Wrapper";
import { Title } from "../../components/common/Title";
import WriteActionbutton from "../../components/write/WriteActionButton";

const WritePage = () => {
  return (
    <>
      <Wrapper>
        <Title>여행후기 글쓰기</Title>
        <Editor />
        <TagBox />
        <WriteActionbutton />
      </Wrapper>
    </>
  );
};

export default WritePage;
