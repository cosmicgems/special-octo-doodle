import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import PermPhoneMsgRoundedIcon from '@mui/icons-material/PermPhoneMsgRounded';
import { blue, grey } from '@mui/material/colors';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';

const drawerWidth = "96%";

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
    })<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function NavbarTwo() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const router = useRouter()

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
};

    const handleNavigation = (text) => {
        switch (text) {
            case 'Home':
                router.push('/'); // Navigate to the appropriate route for Home
                handleDrawerClose();
                break;
            case 'Work':
                router.push('/work'); // Navigate to the appropriate route for Work
                handleDrawerClose();
                break;
            case 'About':
                router.push('/about'); // Navigate to the appropriate route for About
                handleDrawerClose();
                break;
            case 'Contact':
                router.push('/contact'); // Navigate to the appropriate route for Contact
                handleDrawerClose();
                break;
            default:
                break;
        }
    }

    return (
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
            <Toolbar>
            
            <Button onClick={()=>handleNavigation('Home')} sx={{ flexGrow: 1, fontFamily: 'kodchasan', color:grey[50], textAlign:'left' }}>
            <Typography variant="h6" noWrap sx={{ flexGrow: 1, fontFamily: 'kodchasan' }}  component="div">
                MD
            </Typography>                
            </Button>


            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
                <MenuIcon />
            </IconButton>
            </Toolbar>
        </AppBar>
        <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
            <IconButton sx={{color:blue[900]}} onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
            </DrawerHeader>
            <Divider />
            <div style={{width:'100%'}}>
                <Typography sx={{width:'100%', textAlign: 'center', fontFamily:'kodchasan'}} variant='h6' component='div'>
                    Maliek Davis
                </Typography>
            </div>
            <List className='' sx={{justifyContent: 'center',}}>
            {['Home', 'Work', 'About', 'Contact'].map((text, index) => (

                    <ListItem sx={{textAlign: 'center'}} onClick={() => handleNavigation(text)} key={text} disablePadding>
                    <ListItemButton sx={{justifyContent: 'center', alignItems: 'center'}}>
                        <ListItemIcon>
                        {index === 0 ? <HomeRoundedIcon /> : ""}
                        {index === 1 ? <WorkRoundedIcon /> : ""}
                        {index === 2 ? <InfoRoundedIcon /> : ""}
                        {index === 3 ? <PermPhoneMsgRoundedIcon /> : ""}
                        </ListItemIcon>
                        <Typography variant='h6' sx={{fontFamily: 'rajdhani'}} >{text}</Typography>
                        {/* <ListItemText sx={{fontSize: '16rem'}}  primary={text} /> */}
                    </ListItemButton>
                    </ListItem>


            ))}
            </List>
            <Divider />
      
        </Drawer>
        <Main open={open}>
            <DrawerHeader />
        </Main>
        </Box>
    );
}