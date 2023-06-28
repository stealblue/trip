// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import PostList from "../../components/posts/PostList";
// import { listPosts } from "../../modules/posts";
// import { useParams, useSearchParams } from "react-router-dom";

// const PostListContainer = () => {
//   const { username } = useParams();
//   const [searchParams] = useSearchParams();
//   const dispatch = useDispatch();
//   const { posts, error, loading, user } = useSelector(
//     ({ posts, loading, user }) => ({
//       posts: posts.posts,
//       error: posts.error,
//       loading: loading["posts/LIST_POSTS"],
//       user: user.user,
//     })
//   );
//   useEffect(() => {
//     const tag = searchParams.get("tag");
//     // page가 없으면 1을 기본값으로 사용
//     const page = parseInt(searchParams.get("page"), 10) || 1;
//     dispatch(listPosts({ tag, username, page }));
//   }, [dispatch, searchParams, username]);

//   return (
//     <PostList
//       loading={loading}
//       error={error}
//       posts={posts}
//       showWriteButton={user}
//     />
//   );
// };
//
// export default PostListContainer;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import CreateRoomComp from "../../components/chat/CreateRoomComp";

// const RoomList = () => {
//     const onChange = (e) => {
//         console.log("1111");
//         const {value, name} = e.target;
//         console.log(value, name, e);
//     };
//     const onSubmit = (e) => {
//         e.preventDefault();
//         console.log("22222");
//     };

//     return (
//         <>
//             <RegisterFormComp onChange={onChange} onSubmit={onSubmit} />
//         </>
//     );
// }

// export default RegisterCntr;

import React from "react";

// const RoomListCntr = () => {
//   return (
//     <div>
//       <h1>채팅방목록</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>방 제목</th>
//             <th>허용인원</th>
//             <th>방장</th>
//           </tr>
//         </thead>
//       </table>
//     </div>
//   );
// };

// export default RoomListCntr;
