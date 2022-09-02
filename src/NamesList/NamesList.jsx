import React from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));
// , btnDeleteClick

const NamesList = ({ listValue, onNameClick }) => {
  console.log(listValue);
  return (
    <>
      <Grid item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Certeficate
        </Typography>
        <Demo>
          <List>
            {listValue
              .filter((item) => item)
              .map((item) => (
                <ListItem
                  key={item.idName}
                  data-name={item.idName}
                  onClick={onNameClick}
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText>{item.commonName}</ListItemText>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    // onClick={() => btnDeleteClick(item.idName)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
          </List>
        </Demo>
      </Grid>
    </>
  );
};

export default NamesList;
