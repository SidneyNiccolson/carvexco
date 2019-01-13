import React from "react";
import { Marker, Map } from "google-maps-react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";

const Contact = () => (
  <div>
    <Card>
      <CardMedia
        style={{ height: 0, paddingTop: "10%" }}
        title="Carvexco"
        image={require("../images/caribbean-trading-and-shipping-contact-1024x123.jpg")}
      />
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Contact
        </Typography>
        <Typography variant="h5" component="h2">
          Location
        </Typography>
        <Typography component="p">
          Carvexco is located in the very heart of the CIBAO area, which is
          known for its finest quality of crop production.
          <Typography variant="h5" component="h2">
            <br />
            Contact details
          </Typography>
          <List>
            <ListItem>
              <ListItemText secondary="Los robles 27" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="Rio Verde Abajo" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="Dominican Republic" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="+18298684269" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="info@carvexco.com" />
            </ListItem>
          </List>
        </Typography>
      </CardContent>
    </Card>
    <br />
    <div style={{ height: "50%", width: "50%" }}>
      <Map
        google={window.google}
        style={{ width: "100%", height: "50%" }}
        height={"100vh"}
        zoom={10}
        initialCenter={{
          lat: 19.312451,
          lng: -70.521704
        }}
      >
        <Marker
          title={"Carvexco."}
          name={"Carvexco"}
          position={{ lat: 19.312451, lng: -70.521704 }}
        />
      </Map>
    </div>
  </div>
);

export default Contact;
