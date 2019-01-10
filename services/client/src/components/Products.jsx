import React from 'react';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({

  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

const cards = [1,
2,
3,
4,
5,
6,
7,
8,
9,
10,
11,
12,
13,
14,
15,
16,
17,
18,
19,
20,
21,
22,
23,
24,
25,
26,
27,
28,
29,
30,
31,
32,
33,
34,
35,
36,
37,
38,
39,
40,
41,
42,
43,
44,
45,
46,
47];
const test = ["Aloe-vera", "Aubergines", "Avocado",
"Bacove",
"Bilimbi",
"Birambi",
"Breadfruit",
"Cane",
"Cassava",
"Chinese-aubergine",
"Cocoa",
"Dried-Coconut",
"Eddoes",
"Gardenegg",
"Gele-sterappel",
"Ginger",
"Gourd",
"Green-chili",
"Green-mango",
"Green-papaya",
"Indian-eggplant",
"Kareili",
"Kathar",
"Lauki(dik)",
"Lauki(lang)",
"Lemongrass",
"Madame-Jeanette",
"Mais(vaccuum)",
"Markoesa",
"Ninwa",
"Okra",
"Peanuts",
"Plantain",
"Pumpkin(flespomp)",
"Red-chips",
"Red-Habanero",
"Red-Pepper",
"Ripe-mango",
"Snakegourd",
"Surinam-aubergine",
"Sweet-potato",
"Teroy-Ridge-Guard-Ninwa",
"Thai-aubergine",
"White-Chips",
"Yellow-Habanero",
"Young-coconut",
"zuurzak(Annona muricata)"];
const Products = () => (
  <div>
    <main>
      <div>
        <Grid container spacing={40}>
          {cards.map(card => (
            <Grid item key={card} xs={9} sm={6} md={4} lg={3}>
              <Card >
                <CardMedia
                  style = {{ height: 0, paddingTop: '56%'}}
                  title={test[card -1]}
                  image={require("../images/" + test[card -1] + ".jpg")}

                />
                <CardContent >
                  <Typography gutterBottom variant="h5" component="h2">

                  </Typography>
                  <Typography>
                    {test[card -1]}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <br/>
      </div>
</main>
  </div>
)

export default Products;
