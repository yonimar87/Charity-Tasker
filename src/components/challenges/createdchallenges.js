import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getCreatedChallenges } from "../../utils/challengesAPI";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/searchBar"
import Button from '@material-ui/core/Button';
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


function MyChallengeList (props) {

  const classes = useStyles();

  const [createdChallenges, setCreatedChallenges] = useState([]);
  const [keyword, setKeyword] = useState('');
  
  const filterChallenge = (challenge) => {
    return challenge.name.toLowerCase().includes(keyword.toLowerCase())
  }
  useEffect( () => {
    getCreatedChallenges(props.auth).then((res) => 
    setCreatedChallenges(res.data)
    )}, [props.auth]);

  return (
    <React.Fragment>
    <CssBaseline />
    <div style={{textAlign:"center"}}>
    <SearchBar 
    keyword={keyword}
    setKeyword={setKeyword}/>
    </div>
    <Container className={classes.cardGrid} maxWidth="md">
          <h1>Below are your created Challenges</h1>
          <Grid container spacing={4}>
            {createdChallenges.filter(filterChallenge).map((challenge) => (
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
                  <Button size="small" color="primary">
                  <Link color="inherit" 
                        to={{
                        pathname: `/challenge`,
                        state: {
                            _id: challenge._id,
                        },
                        }}> {challenge.status}
                    </Link>
                  </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
  </React.Fragment>
  );
}

MyChallengeList.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(MyChallengeList);
