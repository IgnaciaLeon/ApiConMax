import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MessageIcon from "@mui/icons-material/Message";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Collapse from "@mui/material/Collapse";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
export default function Post({ post }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log("desde componente post");
  console.log(post);
  return (
    <Card sx={{ maxWidth: 345, margin: "auto" }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.postContenido}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon /> {post.postMeGusta}
        </IconButton>
        <IconButton aria-label="add to favorites">
          <MessageIcon />
        </IconButton>
        {post.comentariosPost[0] && (
          <>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </>
        )}
      </CardActions>
      {post.comentariosPost[0] && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {post.comentariosPost.map((item, index) => (
            <CardContent key={index}>
              <Avatar alt="Max" src={`${item.comentarioAvatar}`} />
              <Typography paragraph>{item.comentarioEmail}</Typography>
              <Typography paragraph>{item.comentarioTexto}</Typography>
            </CardContent>
          ))}
        </Collapse>
      )}
    </Card>
  );
}
