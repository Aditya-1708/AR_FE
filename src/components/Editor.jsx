import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import axiosInstance from "../axios";

const Editor = ({ value, onChange }) => {
  return (
    <SunEditor
      setContents={value}
      onChange={onChange}
      height="350px"
      setOptions={{
        buttonList: [
          ["undo", "redo"],
          ["bold", "italic", "underline"],
          ["list", "align"],
          ["link", "image"],
        ],

        // Custom image upload handler
        imageUploadHandler: async (files, info, uploadHandler) => {
          try {
            const formData = new FormData();
            formData.append("file", files[0]);

            const res = await axiosInstance.post(
              "/blogs/editor-image",
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );

            uploadHandler(res.data);
          } catch (err) {
            console.error("Image upload failed", err);
            alert("Image upload failed");
          }
        },
      }}
    />
  );
};

export default Editor;
