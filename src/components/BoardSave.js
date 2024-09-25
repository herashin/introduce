import React, { useState, useMemo, useRef } from "react";

import styled from "./BoardSave.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";

function BoardSave() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [imageFile, setImageFile] = useState(null); // 이미지 파일 상태 추가
  const navigate = useNavigate();
  const quillRef = useRef(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }; // 제목 변수 저장

  const handleChange = (value) => {
    setText(value);
  }; // 글 내용 변수 저장

  // 이미지를 따로 이미지 테이블에 저장하려고 만들었음
  // 이미지 업로드 핸들러
  const imageHandler = async () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.addEventListener("change", async () => {
      const file = input.files?.[0];

      if (file) {
        setImageFile(file); // 이미지 파일을 상태에 저장
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
  //

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
  }, []); // 리액트 퀼로 만든 에디터 설정 공간

  // 저장버튼 함수 시작
  const handleSave = async () => {
    // 게시글의 내용에서 <p> 태그 제거
    const ptageBlock = text.replace(/<\/?p>/g, "");

    console.log("Sending data:", { title, content: ptageBlock }); // 서버로 보내기 전에 데이터 출력

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

    // Quill 에디터에서 사용한 이미지 파일이 있을 경우 FormData에 추가
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const response = await axios.post("/api/board/SaveWithImage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Response:", response.data);
      alert("게시글이 작성되었습니다.");
      navigate("/BoardList");
    } catch (error) {
      console.error("Error saving content:", error);
    }
  };
  // 저장버튼 함수 끝

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

        <div>
          <ReactQuill
            ref={quillRef}
            className={styled.in_editor}
            value={text}
            onChange={handleChange}
            modules={modules}
          />
        </div>
        <button type="submit" className={styled.saveButton}>
          게시물 저장
        </button>
      </form>
    </div>
  );
}

export default BoardSave;
