import React, { useState, useEffect } from "react";
import { getChallenges } from "../../utils/challengesAPI";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/searchBar"
import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
// import Image from 'material-ui/core/Image';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import challengeImage from '../../assets/images/challenge.jpg'

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

export default function ChallengeList (props) {
    const classes = useStyles();

    const [challengesList, setChallengesList] = useState([]);
    const [keyword, setKeyword] = useState('');
  
    const filterChallenge = (challenge) => {
      return challenge.name.toLowerCase().includes(keyword.toLowerCase())
    }
  
    useEffect( () => {
      getChallenges(props.auth).then((res) => 
      setChallengesList(res.data)
      )}, [props.auth]);
  
    return (
    <React.Fragment>
        <CssBaseline />
        <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
            <Container maxWidth="sm">
            <Typography align="center" color="textPrimary" gutterBottom>
            <CardMedia
                    className={classes.cardMedia}
                    image={challengeImage}
                    title="Image title"
                    />
                    {/* <img src={challengeImage} alt="Smiley face" style={{maxWidth:"100%"}}/> */}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Welcome to our list of challenges. Lets make the world a better place by donating funds to charities and having fun while doing so!
            </Typography>
            <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                <Grid item>
                    <Button variant="contained" color="primary">
                      Available Challenges
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="primary">
                      Taken Challenges
                    </Button>
                </Grid>
                </Grid>
            </div>
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
            {challengesList.filter(filterChallenge).map((challenge) => (
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
                        {challenge.description}
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
