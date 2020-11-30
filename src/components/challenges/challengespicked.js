import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getPickedChallenges } from "../../utils/challengesAPI";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/searchBar"
import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: '#94a8b3',
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function PickedChallengeList (props) {
    const [challenges, setChallenge] = useState([]);
  
    useEffect( () => {
      getPickedChallenges(props.auth).then((res) =>
      setChallenge(res.data)
      )}, [props.auth]);
  
    return (
    <React.Fragment>
        <CssBaseline />
        <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
            <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Challenges to complete
            </Typography>
            </Container>
        </div>
        <div style={{textAlign:"center"}}>
          <SearchBar 
          keyword={keyword}
          setKeyword={setKeyword}/>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
            {challenges.map((challenge) => (
                <Grid item key={challenge} xs={12} sm={6} md={4}>
                <Card className={classes.challenge}>
                    <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {challenge.name}
                    </Typography>
                    <Typography>
                        {challenge.category}
                    </Typography>
                    <Typography>
                        {challenge.goal}
                    </Typography>
                    <Typography>
                        {challenge.shortDescription}
                    </Typography>
                    <Typography>
                        {challenge.description}
                    </Typography>
                    <Typography>
                        {challenge.likes}
                    </Typography>
                    <Typography>
                        {" "}
                        {challenge.status 
                        // ? "Challenge already completed!"
                        // : "Still needs completing...."
                        }   
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary">
                        <Link color="inherit" 
                            to={{
                            pathname: `/challenge`,
                            state: {
                                _id: challenge._id,
                            },
                            }}> View
                        </Link>
                    </Button>
                    </CardActions>
                </Card>
                </Grid>
            ))}
            </Grid>
        </Container>
        </main>
    </React.Fragment>
    );
}
