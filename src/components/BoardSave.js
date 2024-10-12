import React, { useState, useMemo, useRef } from "react";
import styled from "./BoardSave.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

function BoardSave() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  const [password, setPassword] = useState(""); // 비밀번호 상태
  const navigate = useNavigate();
  const quillRef = useRef(null);

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleChange = (value) => setText(value);

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  // 이미지 핸들러: 이미지를 서버에 업로드하고 URL을 반환 받아 에디터에 삽입
  const imageHandler = async () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.addEventListener("change", async () => {
      const file = input.files?.[0];
      if (file) {
        try {
          // FormData를 사용해 파일을 서버에 업로드
          const formData = new FormData();
          formData.append("image", file);

          // 이미지 업로드 API 호출
          const response = await axios.post(
            `${API_BASE_URL}/api/image/upload`,
            formData,
            {
              headers: { "Content-Type": "multipart/form-data" },
            }
          );

          // 서버에서 반환된 이미지 URL을 에디터에 삽입
          const imageUrl = response.data.url;
          const editor = quillRef.current.getEditor();
          const range = editor.getSelection();
          editor.insertEmbed(range.index, "image", imageUrl);

          // imageFiles 배열에 이미지 URL을 추가하여 서버로 보낼 준비
          setImageFiles((prevFiles) => [...prevFiles, imageUrl]);
        } catch (error) {
          console.error("Image upload failed:", error);
          alert("이미지 업로드에 실패했습니다.");
        }
      }
    });
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["image"],
          [{ header: [1, 2, 3, 4, 5, false] }],
          ["bold", "underline"],
        ],
        handlers: { image: imageHandler },
      },
    }),
    []
  );

  // 비밀번호 확인 후 저장하는 함수
  const handleSave = async () => {
    if (!password.trim()) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    try {
      const passwordResponse = await axios.post(
        `${API_BASE_URL}/api/board/check-password`,
        {
          password,
          action: "write",
        }
      );

      if (passwordResponse.data.success) {
        // JSON 데이터와 이미지 파일 추가
        const ptageBlock = text.replace(/<\/?p>/g, "");
        const formData = new FormData();

        // 'data' 파트에 JSON 데이터 추가
        const postData = {
          title: title,
          content: ptageBlock,
        };
        formData.append(
          "data",
          new Blob([JSON.stringify(postData)], { type: "application/json" })
        );
        formData.append("password", password);

        // 'images' 파트에 이미지 URL 추가
        imageFiles.forEach((file) => formData.append("images", file));

        console.table(formData);
        // 요청 전송
        const response = await axios.post(
          `${API_BASE_URL}/api/board/save`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        if (response.status === 200) {
          alert("게시글이 작성되었습니다.");
          navigate("/BoardList");
        } else {
          alert("저장에 문제가 발생했습니다.");
        }
      } else {
        alert("비밀번호가 일치하지 않습니다.");
      }
    } catch (error) {
      console.error("Error saving content:", error);
      alert("저장 중 오류가 발생했습니다.");
    }
  };

  return (
    <div id={styled.wrap}>
      <form
        className={styled.in_editor_form}
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
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
        <div className={styled.password_info}>
          <span>비밀번호</span>&nbsp;&nbsp;
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <ReactQuill
          ref={quillRef}
          className={styled.in_editor}
          value={text}
          onChange={handleChange}
          modules={modules}
        />
        <button type="submit" className={styled.saveButton}>
          게시물 저장
        </button>
      </form>
    </div>
  );
}

export default BoardSave;
