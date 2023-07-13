import ApexCharts from "react-apexcharts";

const AdminUserGraph = ({ totalUser }) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();
  const weekday = [
    `${new Date(year, month, day - 6).toLocaleDateString()}`,
    `${new Date(year, month, day - 5).toLocaleDateString()}`,
    `${new Date(year, month, day - 4).toLocaleDateString()}`,
    `${new Date(year, month, day - 3).toLocaleDateString()}`,
    `${new Date(year, month, day - 2).toLocaleDateString()}`,
    `${new Date(year, month, day - 1).toLocaleDateString()}`,
    `${new Date(year, month, day).toLocaleDateString()}`,
  ];
  const todayTotalMembers = [5, 26, 20, 9, 11, 14, 7]; //누적 가입자 수
  const yseterdayTotalMember = [19, 26, 20, 9, 11, 14, 7]; //전날 가입자 수
  const todayRegister = [1, 6, 4, 11, 31, 9, 0]; //일일 가입자 수
  const leaveMebers = [30, 26, 34, 10, 21, 7, 44]; //일일 탈퇴자 수
  const todayVisitors = [1, 2, 3, 4, 5, 6, 7]; //일일 방문자 수

  return (
    <ApexCharts
      type="line"
      series={[
        { name: "누적 가입자 수", data: todayTotalMembers },
        { name: "일일 가입자 수", data: todayRegister },
        { name: "일일 탈퇴자 수", data: leaveMebers },
        { name: "일일 방문자 수", data: todayVisitors },
      ]}
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
