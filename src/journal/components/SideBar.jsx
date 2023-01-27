import { TurnedInNot } from "@mui/icons-material"
import { Box ,Divider,Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"



export const SideBar = ({ drawerwidth = 280 }) => {
  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerwidth }, flexShrink: { sm: 0 } }}
    >
        <Drawer
            variant='permanent' //temporary
            open
            sx={{ 
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerwidth }
             }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    Juan Medina
                </Typography>
            </Toolbar>
            <Divider />

            <List>
                {
                    ['Enero','Febrero','Marzo','Abril'].map( text => (
                        <ListItem key={ text } disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={ text }/>
                                    <ListItemText secondary={ 'Laboris Lorem laboris mollit culpa aute id et excepteur fugiat magna.' }/>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>
    </Box>
  )
}
