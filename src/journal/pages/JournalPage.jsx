
import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"


import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"


export const JournalPage = () => {
  return (
    <JournalLayout>
    
      {/*<Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quod ipsum culpa fugiat recusandae ut quia? Hic doloremque labore aperiam, architecto, repudiandae aut temporibus, maxime et voluptas deleniti consequuntur ad!</Typography>*/}

      {/*<NothingSelectedView />*/} 
      <NoteView />

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }}/>

      </IconButton>
    
    </JournalLayout>
  )
}
