import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../../Hooks/useAuth';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import DashHome from './DashHome/DashHome';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AddCourse from './AddCourse/AddCourse';
import AddService from './AddService/AddService';


const drawerWidth = 200;

function Dashboard(props) {

  let {path,url} = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { user } = useAuth();

  const drawer = (
      
    <div>
      <Toolbar className='bg-info'>
      <a href="home" style={{ margin:'0 auto' }}>
      <img style={{ width: '90px',margin:'0 auto' }} src="https://i.ibb.co/Dpyx723/Kam-Logo-PNG.png" alt="" />
      </a>
      </Toolbar>
      <Divider />

      <List className='mt-3'>
        <span className='border border-3 p-2 my-3 text-primary' ><i class="fas fa-user text-success mb-5"></i> &nbsp; {user.displayName}
        </span>
      </List>

      <Link to={`${url}`}><Button color="inherit">Dashboard</Button></Link>

      <Divider />

      {/*Nested admin routes */}
      <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
      <Link to={`${url}/addCourse`}><Button color="inherit">Add Course</Button></Link>
      <Link to={`${url}/addService`}><Button color="inherit">Add Service</Button></Link>

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex',marginTop:'100px' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className='bg-info '>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard <i class="fas fa-columns"></i>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
       
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />

        <Switch>
          <Route exact path={path}>
            <DashHome></DashHome>
          </Route>

          <Route path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>

          <Route path={`${path}/addCourse`}>
            <AddCourse></AddCourse>
          </Route>

          <Route path={`${path}/addService`}>
            <AddService></AddService>
          </Route>
        </Switch>
         

      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  
  window: PropTypes.func,
};

export default Dashboard;
