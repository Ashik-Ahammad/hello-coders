import React from 'react';
import Particles from "react-tsparticles";
import './MoreDetails.css';
import { Grid, } from '@mui/material';

const MoreDetails = () => {

    const particlesInit = (main) => {
        console.log(main);
    
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };

    return (
        <div className='margin'>
        
        
        <Grid container sx={{ py: 5 }} spacing={2}>    
                <Grid item xs={12} md={6}>
                    <h2>Programming Language</h2>
                    <img className="img-fluid" style={{ marginTop: '' }} src="https://i.ibb.co/sbzXgYz/md2.png" alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <img className="img-fluid" style={{ marginTop: '' }} src="https://i.ibb.co/5kn6yHR/md1.png" alt="" />
                </Grid>
        </Grid>

        <Grid container sx={{ py: 5 }} spacing={2}>    
                <Grid item xs={12} md={6}>
                <h2>Web Design & Development</h2>
                    <img className="img-fluid" style={{ marginTop: '' }} src="https://i.ibb.co/M6yTqD4/md3.png" alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <img className="img-fluid" style={{ marginTop: '' }} src="https://i.ibb.co/H4cJLX0/md4.png" alt="" />
                </Grid>
        </Grid>

        <Grid container sx={{ py: 5,  }} spacing={2}>    
                <Grid item xs={12} md={6}>
                <h2>Software Solution</h2>
                    <img className="img-fluid" style={{ marginTop: '' }} src="https://i.ibb.co/tPhrgRL/md5.png" alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <img className="img-fluid" style={{ marginTop: '' }} src="https://i.ibb.co/WsRthj5/md6.png" alt="" />
                </Grid>
        </Grid>
      
        

            <Particles 
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
       
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 20,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#00A1C4",
          },
          
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "polygon",
          },
          size: {
            random: true,
            value: 3,
          },
        },
        detectRetina: true,
      }}
    />

     

      </div>
    );
};

export default MoreDetails;