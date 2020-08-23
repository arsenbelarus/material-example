import React, {useState} from 'react';
import './App.css';
import {
    AppBar, BottomNavigation, BottomNavigationAction, CardMedia, Button, Paper, Box, Toolbar, Container,
    IconButton, Typography, Card, Grid, CardContent, CardActions, Dialog, DialogContentText, TextField,
    DialogTitle, DialogContent, DialogActions
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import LayerIcon from "@material-ui/icons/Layers";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import RestoreIcon from "@material-ui/icons/Restore";
import FolderIcon from "@material-ui/icons/Folder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
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
        padding: theme.spacing(6),
        fontShadow: "1px 1px 1px black",
        fontWeight: "bold",
        marginTop: theme.spacing(8),
    },
    cardMedia: {
        paddingTop: "56.25%",
    },
    cardContent: {
        flexGrow: 1,
    },
    cardGrid: {
        marginTop: theme.spacing(4),
    },
    footer: {
        marginTop: theme.spacing(4),
    },
}))

function App() {
    const classes = useStyles()
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [value, setValue] = useState("recents")
    const [open, setOpen] = useState(false)
    const handleChange = (event, newValue) => setValue(newValue)
    const handleLogIn = () => setOpen(true)
    const handleDialogClose = () => setOpen(false)


    return (
        <>
            <AppBar position="fixed">
                <Container fixed>
                    <Toolbar>
                        <IconButton edge="start" color="inherit"
                                    aria-label="menu" className={classes.menuButton}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}> My material-UI </Typography>
                        <Box mr={3}>
                            <Button color={"inherit"} variant={"outlined"} onClick={handleLogIn}> Log in </Button>

                            <Dialog open={open} onClose={handleDialogClose} aria-labelledby={"Log in form"}>
                                <DialogTitle id={"Log in form"}> Log in </DialogTitle>
                                <DialogContent>
                                    <DialogContentText> Please Log in to view more </DialogContentText>
                                    <TextField autofocus
                                               margin={"dense"}
                                               id={"name"}
                                               label={"E-mail address"}
                                               type={"email"}
                                               fullWidth
                                               required
                                    />
                                    <TextField margin={"dense"}
                                               id={"password"}
                                               label={"Password"}
                                               type={"password"}
                                               fullWidth
                                               required
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleDialogClose} color={"primary"} > Cancel </Button>
                                    <Button onClick={handleDialogClose} color={"primary"} > Log in </Button>
                                </DialogActions>
                            </Dialog>

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
                <div>
                    <Container maxWidth={"md"}>
                        <Typography variant={"h2"}
                                    align={"center"}
                                    color={"textPrimary"}
                                    gutterBottom>
                            Some text
                        </Typography>
                        <Typography variant={"h5"}
                                    align={"justify"}
                                    color={"textSecondary"}
                                    paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae feugiat odio.
                            Fusce libero augue, ultrices id mollis sed, dignissim at eros. Maecenas lacinia
                            lacus. Fusce libero augue, ultrices id mollis sed, dignissim at eros. Maecenas lacinia
                            lacus.
                        </Typography>
                        <div>
                            <Grid container spacing={2} justify={"center"}>
                                <Grid item>
                                    <Button variant={"contained"} color={"primary"}> Start now</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant={"outlined"} color={"primary"}> Learn more</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth={"md"}>
                    <Grid container spacing={4}>
                        {cards.map(card => {
                            return <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={"https://source.unsplash.com/random"}
                                        title={"Image title"}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant={"h5"} gutterBottom>
                                            Blog post
                                        </Typography>
                                        <Typography>
                                            Blog post. Blog post. Blog post. Blog post. Blog post.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size={"small"} color={"primary"}> View </Button>
                                        <Button size={"small"} color={"primary"}> Edit </Button>
                                        <LayerIcon/>
                                        <PlayCircleFilledIcon/>
                                    </CardActions>
                                </Card>
                            </Grid>
                        })}
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant={"h5"} align={"center"} gutterBottom> My Footer </Typography>
                <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
                    <BottomNavigationAction
                        label={"Recents"}
                        value={"recents"}
                        icon={<RestoreIcon/>}
                    />
                    <BottomNavigationAction
                        label={"Favorites"}
                        value={"favorites"}
                        icon={<FavoriteIcon/>}
                    />
                    <BottomNavigationAction
                        label={"Nearby"}
                        value={"nearby"}
                        icon={<LocationOnIcon/>}
                    />
                    <BottomNavigationAction
                        label={"Folder"}
                        value={"folder"}
                        icon={<FolderIcon/>}
                    />
                </BottomNavigation>
                <Typography align={"center"} variant={"subtitle1"}
                            component={"p"} color={"textSecondary"}>
                    Arsen Vaskanian, all rights reserved
                </Typography>
            </footer>
        </>
    );
}

export default App;
