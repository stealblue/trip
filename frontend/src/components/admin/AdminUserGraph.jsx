import ApexCharts from "react-apexcharts";
import { useSelector } from "react-redux";

const AdminUserGraph = ({ loading, type }) => {
  const { userAction, boardAction } = useSelector(
    ({ AdminUserMod, AdminBoardMod }) => ({
      userAction: AdminUserMod.userAction,
      boardAction: AdminBoardMod.boardAction,
    })
  );
  console.log(loading, "======");
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
  // const leaveMebers = [30, 26, 34, 10, 21, 7, 44]; //일일 탈퇴자 수
  // const dailyVisitors = [1, 2, 3, 4, 5, 6, 7]; //일일 방문자 수
  const userSeries = [
    { name: "누적 가입자 수", data: TotalMembers },
    { name: "일일 가입자 수", data: dailyRegister },
    // { name: "일일 탈퇴자 수", data: leaveMebers },
    // { name: "일일 방문자 수", data: dailyVisitors },
  ];

  const Totalboards = boardAction?.allWriteCnt; //누적 게시물 수
  const dailyTotalboards = boardAction?.dailyWriteCnt; //일일 게시물 수
  const boardSeries = [
    { name: "누적 게시물 수", data: Totalboards },
    { name: "일일 게시물 수", data: dailyTotalboards },
  ];

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
