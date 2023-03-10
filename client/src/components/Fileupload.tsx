import { Button } from "@mui/material";
import { ChangeEvent, useState } from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
function FileUpload() {
  const [fileList, setFileList] = useState<FileList | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFileList(e.target.files);
  };

  const handleUploadClick = () => {
    if (!fileList) {
      return;
    }

    // 👇 Create new FormData object and append files
    const data = new FormData();
    files.forEach((file, i) => {
      data.append(`file-${i}`, file, file.name);
    });

    // 👇 Uploading the files using the fetch API to the server
    fetch("https://httpbin.org/post", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  // 👇 files is not an array, but it's iterable, spread to get an array of files
  const files = fileList ? [...fileList] : [];

  return (
    <div>
      <Button
        component={"label"}
        onClick={handleUploadClick}
        fullWidth
        disableElevation
        variant="outlined"
        startIcon={<ControlPointIcon />}
      >
        <input type="file" hidden multiple onChange={handleFileChange} />
        Upload New
      </Button>
    </div>
  );
}

export default FileUpload;
