import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "./BoardDetail.module.css";

function BoardDetail() {
  const { sequenceNumber } = useParams();
  const [board, setBoard] = useState(null);
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionType, setActionType] = useState("");
  const navigate = useNavigate();

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/board/BoardDetail/${sequenceNumber}`
        );
        if (response.status === 200) {
          setBoard(response.data);
        }
      } catch (error) {
        console.error("에러 발생", error);
      }
    };
    fetchBoard();
  }, [sequenceNumber]);

  const openModal = (type) => {
    setActionType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setPassword("");
    setIsModalOpen(false);
  };

  const handlePasswordSubmit = async () => {
    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/board/check-password`,
        {
          password,
        }
      );

      if (response.data === true) {
        if (actionType === "edit") {
          // 게시글 수정 요청일 경우 ㄱㄱ
          navigate(`/BoardEdit/${sequenceNumber}`);
        } else if (actionType === "delete") {
          // 게시글 삭제일경우
          try {
            const deleteResponse = await axios.put(
              `${API_BASE_URL}/api/board/delete/${sequenceNumber}`,
              { password },
              { headers: { "Content-Type": "application/json" } }
            );

            if (deleteResponse.status === 200) {
              alert("게시글 삭제완료");
              navigate("/BoardList");
            } else {
              alert("삭제에 실패했습니다.");
            }
          } catch (error) {
            console.error("게시글 삭제 오류:", error);
            alert("삭제에 실패했습니다.");
          }
        }
        closeModal();
      } else {
        alert("비밀번호가 틀렸습니다.");
      }
    } catch (error) {
      console.error("비밀번호 검증 오류:", error);
      alert("비밀번호 확인 중 오류가 발생했습니다.");
    }
  };

  if (!board) {
    return <div>로딩중...</div>;
  }

  const formattedDate = new Date(board.createdDate).toLocaleDateString();

  return (
    <div id={styled.BoardDetail_wrap}>
      <h2>{board.title}</h2>
      <div className={styled.info}>
        <span>작성일: {formattedDate}</span>
      </div>
      <div
        className={styled.content}
        dangerouslySetInnerHTML={{ __html: board.content }}
      ></div>
      <button onClick={() => openModal("edit")} className={styled.edit_button}>
        수정하기
      </button>
      <button
        onClick={() => openModal("delete")}
        className={styled.delete_button}
      >
        삭제하기
      </button>

      {isModalOpen && (
        <div className={styled.modalOverlay}>
          <div className={styled.modalContent}>
            <h3>비밀번호 입력</h3>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styled.password_input}
            />
            <button
              onClick={handlePasswordSubmit}
              className={styled.submit_button}
            >
              확인
            </button>
            <button onClick={closeModal} className={styled.close_button}>
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BoardDetail;
