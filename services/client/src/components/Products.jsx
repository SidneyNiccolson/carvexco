import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const cards = [
  1,
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
  30
];
const test = [
    "Aloe vera",
    "Avocado",
    "Bilimbi",
    "Breadfruit",
    "Cacao",
    "Chinese Bittermelon",
    "Chinese Eggplant",
    "Chinese Longsquash",
    "Chinese Okra",
    "Green Chili",
    "Green Mango",
    "Green Papaya",
    "Guava",
    "Indian Bittermelon",
    "Indian Longsquash",
    "Jackfruit",
    "Lemongrass",
    "Longbeans",
    "Passionfruit",
    "Red Habanero",
    "Red small chili",
    "Ripe Mango",
    "Snakegourd",
    "Soursop",
    "Star Apple",
    "Sugarcane",
    "Surinam Eggplant",
    "Thai Eggplant",
    "Thai Okra",
    "Yellow Habanero"
];
const Products = () => (
  <div>
    <main>
      <div>
        <Grid container spacing={40}>
          {cards.map(card => (
            <Grid item key={card} xs={9} sm={6} md={4} lg={3}>
              <Card>
                <CardMedia
                  style={{ height: 0, paddingTop: "56%" }}
                  title={test[card - 1]}
                  image={require("../images/" + test[card - 1] + ".jpg")}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" />
                  <Typography>{test[card - 1]}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <br />
      </div>
    </main>
  </div>
);

export default Products;
