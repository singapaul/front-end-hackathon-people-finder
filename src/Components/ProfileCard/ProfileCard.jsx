import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import lizard from "../../Assets/images/lizard.jpeg";
import { flexbox } from "@mui/system";
import Box, { BoxProps } from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

const ProfileCard = () => {
  return (
    <Card sx={{ maxWidth: 400, flexDirection: "row" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={lizard}
        sx={{}}
      />

      <CardContent sx={{ display: flexbox, flex: true }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
            justifyContent: "space-around",
          }}
        >
          {" "}
          <Typography gutterBottom variant="h5" component="div">
            Leon Edwards
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Developer
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Back end engineer passionate about Scala and microservices
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
            justifyContent: 'flex-start'
          }}
        >
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              display: "flex",
              flexDirection: "column",
              justifyContent: 'space-evenly'
            }}
          >
            <Typography gutterBottom variant="h7" component="div">
              Tech
            </Typography>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Python"
                secondary="Keras, Matplotlib, Pandas"
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="JavaScript"
                secondary="React, Angular, Vue"
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <BeachAccessIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Scala" secondary="Play, Cats" />
            </ListItem>
          </List>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              display: "flex",
              flexDirection: "column",
              justifyContent: 'flex-start'
            }}
          >
            <Typography gutterBottom variant="h7" component="div">
              Industries
            </Typography>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Healthcare" secondary="Play, Cats" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Nuclear" secondary="Jan 7, 2014" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <BeachAccessIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Finance" secondary="July 20, 2014" />
            </ListItem>
          </List>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ProfileCard;
