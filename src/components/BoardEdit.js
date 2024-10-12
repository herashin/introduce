import React, { useState, useMemo, useRef, useEffect } from "react";
import styled from "./BoardEdit.module.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

function BoardEdit() {
  const { sequenceNumber } = useParams(); // URL에서 게시글 sequenceNumber 가져옴
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState(""); // 비밀번호 상태 추가
  const [imageFiles, setImageFiles] = useState([]); // 이미지 파일을 배열로 관리
  const [existingImages, setExistingImages] = useState([]); // 기존 이미지
  const navigate = useNavigate();
  const quillRef = useRef(null);

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    // 수정하려는 게시글 정보를 불러옴
    const fetchBoardData = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/board/BoardDetail/${sequenceNumber}`
        );
        if (response.status === 200) {
          const { title, content, images } = response.data;
          setTitle(title);
          setText(content);
          setExistingImages(images || []);
        }
      } catch (error) {
        console.error("게시글 데이터를 불러오는 중 에러 발생:", error);
      }
    };

    fetchBoardData();
  }, [sequenceNumber]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }; // 제목 변수 저장

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }; // 비밀번호 변수 저장

  const handleChange = (value) => {
    setText(value);
  }; // 글 내용 변수 저장

  // 이미지 업로드 핸들러
  const imageHandler = async () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.addEventListener("change", async () => {
      const file = input.files?.[0];

      if (file) {
        setImageFiles((prevFiles) => [...prevFiles, file]); // 이미지 파일 배열에 추가
        const reader = new FileReader();
        reader.onload = () => {
          const editor = quillRef.current.getEditor();
          const range = editor.getSelection();
          editor.insertEmbed(range.index, "image", reader.result); // 이미지를 에디터에 미리보기
        };
        reader.readAsDataURL(file);
      } else {
        console.error("파일이 선택되지 않았습니다.");
      }
    });
  };

  // 리액트 퀼로 만든 에디터 설정 공간
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ["image"],
          [{ header: [1, 2, 3, 4, 5, false] }],
          ["bold", "underline"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    };
  }, []);

  // 저장버튼 함수 시작
  const handleUpdate = async () => {
    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    // 게시글의 내용에서 <p> 태그 제거
    const ptageBlock = text.replace(/<\/?p>/g, "");

    console.log("Updating data:", {
      title,
      content: ptageBlock,
      images: imageFiles,
      password,
    }); // 서버로 보내기 전에 데이터 출력

    // FormData를 사용하여 데이터와 이미지를 함께 전송
    const formData = new FormData();

    // 게시글 데이터를 JSON으로 변환하여 FormData에 추가
    const postData = {
      title: title,
      content: ptageBlock,
    };
    formData.append(
      "data",
      new Blob([JSON.stringify(postData)], { type: "application/json" })
    );

    // 비밀번호를 FormData에 추가
    formData.append("password", password);

    // Quill 에디터에서 사용한 모든 이미지 파일을 FormData에 추가
    imageFiles.forEach((file) => {
      formData.append("images", file); // 각 이미지를 images 필드로 추가
    });

    try {
      const response = await axios.put(
        `${API_BASE_URL}/api/board/update/${sequenceNumber}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response.data);
      alert("게시글이 수정되었습니다.");
      navigate("/BoardList");
    } catch (error) {
      console.error("Error updating content:", error);
      alert("수정 중 오류가 발생했습니다.");
    }
  };
  // 저장버튼 함수 끝

  return (
    <div id={styled.BoardEdit_wrap}>
      <form
        className={styled.in_editor_form}
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate();
        }}
      >
        <div className={styled.title_info_titles}>
          <span>제목</span>&nbsp;&nbsp;
          <input
            type="text"
            className={styled.in_editor_titleInput}
            value={title}
            onChange={handleTitleChange}
          />
        </div>

        <div>
          <ReactQuill
            ref={quillRef}
            className={styled.in_editor}
            value={text}
            onChange={handleChange}
            modules={modules}
          />
        </div>

        <div className={styled.password_input_wrapper}>
          <span>비밀번호</span>&nbsp;&nbsp;
          <input
            type="password"
            className={styled.password_input}
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <button type="submit" className={styled.saveButton}>
          수정 저장
        </button>
      </form>
    </div>
  );
}

export default BoardEdit;
