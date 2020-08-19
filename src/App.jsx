import React from 'react';
import './App.css';
import {AppBar, Button, Paper, Box, Toolbar, Container, IconButton, Typography, Grid} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    },
    mainFeaturesPost: {
        position: "relative",
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    },
    overlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundOverlay: "rgba (0,0,0,.3)"
    },
    mainFeaturesPostContent: {
        position: "relative",
        padding: theme.spacing(9),
        fontShadow: "1px 1px 1px black",
        fontWeight: "bold",
    },
}))

function App() {
    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed">
                <Container fixed>
                    <Toolbar>
                        <IconButton edge="start" color="inherit"
                                    aria-label="menu" className={classes.menuButton}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}> My awesome material-UI example </Typography>
                        <Box mr={3}>
                            <Button color={"inherit"} variant={"outlined"}> Log in </Button>
                        </Box>
                        <Button color={"secondary"} variant={"contained"}> Sign Up </Button>
                    </Toolbar>
                </Container>
            </AppBar>

            <main>
                <Paper className={classes.mainFeaturesPost}
                       style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
                    <Container fixed>
                        <div className={classes.overlay}/>
                        <Grid container>
                            <Grid item md={7}>
                                <div className={classes.mainFeaturesPostContent}>
                                    <Typography variant={"h3"} color={"inherit"} gutterBottom> My awesome Material-UI
                                        SPA </Typography>
                                    <Typography variant={"h5"} color={"inherit"} paragraph>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae feugiat odio.
                                        Fusce libero augue, ultrices id mollis sed, dignissim at eros. Maecenas lacinia
                                        lacus.
                                    </Typography>
                                    <Button variant={"contained"} color={"secondary"}>
                                        Learn more
                                    </Button>
                                </div>
                            </Grid>

                        </Grid>

                    </Container>

                </Paper>
            </main>
        </>
    );
}

export default App;
