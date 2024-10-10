import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "./BoardList.module.css"; // CSS 모듈을 임포트

function BoardList() {
  const [posts, setPosts] = useState([]); // 게시글 목록 상태
  const [password, setPassword] = useState(""); // 입력받은 비밀번호 상태
  const [showPasswordModal, setShowPasswordModal] = useState(false); // 비밀번호 모달 표시 여부
  const navigate = useNavigate();

  // 서버에서 게시글 목록을 가져오는 함수
  const fetchPosts = async () => {
    try {
      const response = await axios.get("/api/board/list");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // 컴포넌트가 처음 렌더링될 때 게시글 목록을 가져옴
  useEffect(() => {
    fetchPosts();
  }, []);

  // 날짜와 시간을 포맷팅하는 함수
  const formatDateTime = (dateString) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // 글쓰기 버튼 클릭 시 비밀번호 모달 열기
  const handleWriteClick = () => setShowPasswordModal(true);

  // 비밀번호 확인 함수
  const handlePasswordSubmit = async () => {
    try {
      const response = await axios.post("/api/board/check-password", {
        password,
        action: "write", // 작업 종류 추가
      });
      if (response.data.success) {
        setShowPasswordModal(false);
        navigate("/BoardSave"); // 비밀번호 일치 시 작성 페이지로 이동
      } else {
        alert("비밀번호가 일치하지 않습니다.");
      }
    } catch (error) {
      console.error("Error checking password:", error);
    }
  };

  return (
    <div className={styled.board_list_wrap}>
      <h1>게시글 목록</h1>
      <button onClick={handleWriteClick} className={styled.write_button}>
        글쓰기
      </button>

      <ul className={styled.post_list}>
        {posts.map((post) => (
          <li key={post.sequenceNumber} className={styled.post_item}>
            <Link to={`/BoardDetail/${post.sequenceNumber}`}>
              <div className={styled.thumbnail}>
                {post.images && post.images.length > 0 ? (
                  <img
                    src={`http://localhost:8080/api/board${post.images[0].imageUrl}`}
                    alt="게시글 섬네일"
                    className={styled.thumbnail_image}
                  />
                ) : (
                  <img
                    src="/default-thumbnail.jpg"
                    alt="기본 섬네일"
                    className={styled.thumbnail_image}
                  />
                )}
              </div>
              <div className={styled.post_info}>
                <h2>{post.title}</h2>
                <p>{formatDateTime(post.createdDate)}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* 비밀번호 모달 */}
      {showPasswordModal && (
        <div className={styled.password_modal}>
          <div className={styled.password_modal_content}>
            <h2>비밀번호 확인</h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호 입력"
              className={styled.password_input}
            />
            <button
              onClick={handlePasswordSubmit}
              className={styled.submit_button}
            >
              확인
            </button>
            <button
              onClick={() => setShowPasswordModal(false)}
              className={styled.cancel_button}
            >
              취소
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BoardList;
