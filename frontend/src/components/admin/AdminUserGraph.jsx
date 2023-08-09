import { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import { useSelector } from "react-redux";

const AdminUserGraph = ({ loading, type }) => {
  const { userAction, boardAction } = useSelector(
    ({ AdminUserMod, AdminBoardMod }) => ({
      userAction: AdminUserMod.userAction,
      boardAction: AdminBoardMod.boardAction,
    })
  );
  const [userSeries, setUserSeries] = useState([
    { name: "누적 가입자 수", data: [0, 0, 0, 0, 0, 0, 0] },
    { name: "일일 가입자 수", data: [0, 0, 0, 0, 0, 0, 0] },
  ]);
  const [boardSeries, setBoardSeries] = useState([
    { name: "누적 게시물 수", data: [0, 0, 0, 0, 0, 0, 0] },
    { name: "일일 게시물 수", data: [0, 0, 0, 0, 0, 0, 0] },
  ]);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();
  const weekday = [];

  for (let i = 6; i >= 0; i--) {
    weekday.push(`${new Date(year, month, day - i).toLocaleDateString()}`);
  }

  const TotalMembers = userAction?.allUserCnt; //누적 가입자 수
  const dailyRegister = userAction?.dailyJoinCnt; //일일 가입자 수

  const Totalboards = boardAction?.allWriteCnt; //누적 게시물 수
  const dailyTotalboards = boardAction?.dailyWriteCnt; //일일 게시물 수

  useEffect(() => {
    if (userAction) {
      setUserSeries([
        { name: "누적 가입자 수", data: TotalMembers },
        { name: "일일 가입자 수", data: dailyRegister },
      ]);
    }
  }, [userAction]);

  useEffect(() => {
    if (boardAction) {
      setBoardSeries([
        { name: "누적 게시물 수", data: Totalboards },
        { name: "일일 게시물 수", data: dailyTotalboards },
      ]);
    }
  }, [boardAction]);

  return (
    <ApexCharts
      type="line"
      series={type === "user" ? userSeries : boardSeries}
      options={{
        chart: { height: 300, width: 300 },
        xaxis: {
          categories: weekday,
        },
      }}
    ></ApexCharts>
  );
};

export default AdminUserGraph;
