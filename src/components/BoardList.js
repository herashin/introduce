import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "./BoardList.module.css"; // CSS 모듈을 임포트

function BoardList() {
  const [posts, setPosts] = useState([]); // 게시글 목록 상태

  // 서버에서 게시글 목록을 가져오는 함수
  const fetchPosts = async () => {
    try {
      const response = await axios.get("/api/board/list");
      setPosts(response.data); // 가져온 데이터를 상태에 저장
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // 컴포넌트가 처음 렌더링될 때 게시글 목록을 가져옴
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className={styled.board_list_wrap}>
      <h1>게시글 목록</h1>
      <ul className={styled.post_list}>
        {posts.map((post) => (
          <li key={post.sequenceNumber} className={styled.post_item}>
            <Link to={`/board/${post.sequenceNumber}`}>
              {/* 이미지가 있을 경우 첫 번째 이미지를 섬네일로 보여주고, 없을 경우 기본 이미지 표시 */}
              <div className={styled.thumbnail}>
                {post.images && post.images.length > 0 ? (
                  <img
                    // src={post.images[0].imageUrl}
                    src={`http://localhost:8080/api/board/images/${post.images[0].fileName}`} // Spring 서버 주소로 맞춤
                    alt="게시글 섬네일"
                    className={styled.thumbnail_image}
                  />
                ) : (
                  <img
                    src="/default-thumbnail.jpg" // 기본 이미지 경로
                    alt="기본 섬네일"
                    className={styled.thumbnail_image}
                  />
                )}
              </div>
              <div className={styled.post_info}>
                <h2>{post.title}</h2>
                <p>{post.createdDate}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BoardList;
