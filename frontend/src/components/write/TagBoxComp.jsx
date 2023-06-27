import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";

const TagBoxBlock = styled.div`
  margin-top: 60px;
`;
const TagForm = styled.form`
  margin-top: 10px;

  input {
    padding: 10px 20px;
    border-radius: 20px;
    margin-right: 10px;
  }

  button {
    padding: 5px 10px;
    color: #fff;
    background-color: #333;
  }
`;
const Tag = styled.div`
  margin: 0 auto;
`;
const TagListBlock = styled.div`
  display: flex;
  width: 100px;
  margin-top: 10px;
`;

// React.memo로 tag값이 바뀔때만 리렌더링 됨
const TagItem = React.memo(({ tag, onRemove }) => <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>);

const TagList = React.memo(({ tags, onRemove }) => (
  <TagListBlock>
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </TagListBlock>
));

const TagBoxComp = ({ tags, onChangeTags }) => {
  const [input, setInput] = useState("");
  const [localTags, setLocalTags] = useState([]);

  const insertTag = useCallback(
    (tag) => {
      if (!tag) return; // 공백이면 추가안함
      if (localTags.includes(tag)) return; // 이미 존재하면 추가안함
      const nextTags = [...localTags, tag];
      setLocalTags([...localTags, tag]);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags]
  );

  const onRemove = useCallback(
    (tag) => {
      const nextTags = localTags.filter((t) => t !== tag);
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags]
  );

  const onChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      insertTag(input.trim()); //앞뒤공백없애고 등록
      setInput(""); // input 초기화
    },
    [input, insertTag]
  );

  useEffect(() => {
    setLocalTags(tags);
  }, [tags]);

  return (
    <TagBoxBlock>
      <h4>태그</h4>
      <TagForm onSubmit={onSubmit}>
        <input placeholder="태그 입력" value={input} onChange={onChange} />
        <button type="submit">추가</button>
      </TagForm>
      <TagList tags={localTags} onRemove={onRemove} />
    </TagBoxBlock>
  );
};

export default TagBoxComp;
