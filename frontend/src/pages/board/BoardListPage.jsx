import { styled } from "styled-components";

import { TitleComp, SubTitleComp } from "../../components/common/TitleComp";
import WrapperComp from "../../components/common/WrapperComp";
import ButtonComp from "../../components/common/ButtonComp";

const ListContainer = styled.div`
  margin-top: 50px;

  .board-list {
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    border-bottom: 1px solid #999;
    padding: 20px 0;
    transition: 0.3s;
    cursor: pointer;
  }

  .board-list:hover {
    opacity: 0.8;
  }

  .title {
    margin-top: 30px;
    font-size: 24px;
    font-weight: 600;
  }

  .board-list-text {
    margin-left: 20px;
  }

  .des {
    margin-top: 10px;
  }

  .nick {
    margin-top: 10px;
    font-size: 12px;
  }

  .date {
    margin-top: 5px;
    font-size: 12px;
  }
`;

const WriteButton = styled(ButtonComp)`
  margin-top: 20px;
  text-align: center;
  position: relative;
  left: 50%;
  top: 30px;
  transform: translate(-50%, 0);
`;

const BoardListImg = styled.img`
  width: 300px;
`;

const boardData = [
  {
    id: 1,
    nick: "gclutram0",
    title: "Honorable",
    content:
      "odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis",
  },
  {
    id: 2,
    nick: "lgaspard1",
    title: "Rev",
    content:
      "lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae",
  },
  {
    id: 3,
    nick: "prosier2",
    title: "Mr",
    content:
      "parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in",
  },
  {
    id: 4,
    nick: "jcawley3",
    title: "Mr",
    content:
      "odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet",
  },
  {
    id: 5,
    nick: "bardley4",
    title: "Mr",
    content:
      "nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur",
  },
  {
    id: 6,
    nick: "mwelland5",
    title: "Mr",
    content:
      "sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia",
  },
  {
    id: 7,
    nick: "nwike6",
    title: "Mrs",
    content:
      "convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis",
  },
  {
    id: 8,
    nick: "gramelet7",
    title: "Dr",
    content:
      "sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus",
  },
  {
    id: 9,
    nick: "nsaddleton8",
    title: "Mrs",
    content:
      "pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit",
  },
  {
    id: 10,
    nick: "ptiler9",
    title: "Mrs",
    content:
      "parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent",
  },
];

const BoardListPage = () => {
  return (
    <>
      <WrapperComp>
        <TitleComp>여행 후기</TitleComp>
        <SubTitleComp>전국 여행후기를 남겨주세요!</SubTitleComp>
        <ListContainer>
          {boardData.map((m) => (
            <div className="board-list" key={m.id}>
              <BoardListImg src="/assets/mainslide.jpeg" />
              <div className="board-list-text">
                <div className="title">{m.title}</div>
                <p className="des">{m.content}</p>
                <p className="nick">{m.nick}</p>
                <p className="date">2023.06.02</p>
              </div>
            </div>
          ))}
        </ListContainer>

        {/* {props.boardData} */}
        <WriteButton to={"/board/write"}>글쓰기</WriteButton>
      </WrapperComp>
    </>
  );
};

export default BoardListPage;
