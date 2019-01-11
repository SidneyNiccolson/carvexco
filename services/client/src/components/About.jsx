import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';



const About = () => (
  <div>
    <Card >
      <CardMedia
        style = {{ height: 0, paddingTop: '10%'}}
        title="Carvexco"
        image={require("../images/caribbean-trading-and-shipping-over-ons-1024x123.jpg")}

      />
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
            Carvexco
        </Typography>
        <Typography variant="h5" component="h2">
        About us
        </Typography>
        <Typography component="p" align="justify">
          CARVEXCO has its own agricultural land on which crops are cultivated and then transported to European countries according the European standards and regulations.

   The entire cultivation and production process is carried out by technicians from the department of agricultura. Thus making sure that the MRL values of pesticides is limited.

  Because CARVEXCO manages the whole process from production to a well refrigerated transportation, we are able to offer our customers our products and services at very competetive prices.

  In addition,  Our GlobalG.A.P certification ensures our commitment to advancing Good Agricultural Practice to our retailers and buyers.This is highly regarded by our customers in Europe.

        </Typography>

      </CardContent>
    </Card>
    <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
  </div>
)

export default About;
