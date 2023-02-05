import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import { IconButton, ListItemIcon, Menu, MenuItem } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import { CardHeader } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Typography } from "@mui/material";
type FileType = "IMAGE" | "FILE" | "VIDEO" | "MUSIC";

interface Props {
  name: string;
  size: string;
  url: string;
  type: FileType;
}
const FileCard = ({ name, size, url }: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card variant="outlined" sx={{ width: 200 }}>
      <CardHeader
        action={
          <>
            <IconButton onClick={handleClick} aria-label="settings">
              <MoreVertIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <DeleteIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Delete</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <FileDownloadIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Download</ListItemText>
              </MenuItem>
            </Menu>
          </>
        }
      ></CardHeader>
      <CardMedia
        sx={{ objectFit: "none" }}
        component="img"
        height="70"
        width="70"
        image="https://drive-thirdparty.googleusercontent.com/128/type/text/csv"
        alt="green iguana"
      />
      <CardContent
        sx={{ display: "flex", alignItems: "baseline", gap: "10px" }}
      >
        <img
          height={16}
          width={16}
          src="https://drive-thirdparty.googleusercontent.com/32/type/application/vnd.google-apps.document"
        ></img>
        <Typography> {name}</Typography>
      </CardContent>
    </Card>
  );
};
export default FileCard;
