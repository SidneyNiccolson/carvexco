import React from 'react';
import { Marker, Map, GoogleApiWrapper } from 'google-maps-react';

const Contact = () => (
  <div>
    <section className="section has-text-centered" >
  <div className="container" >
    <h1 className="title" style={{backgroundColor:'white', color: '#1991B3'}} >Contact us</h1>

  </div>

  <div style={{height: '400px', width: '400px'}}>
    <Map
            google={window.google}
            style={{width: '100%', height: '100%', position: 'relative'}}
            height={"100vh"}
            zoom={14}
            initialCenter={{
             lat: -1.2884,
             lng: 36.8233
           }}>
            <Marker
  title={'The marker`s title will appear as a tooltip.'}
  name={'SOMA'}
  position={{lat: -1.2884, lng: 36.8233}} />
</Map>

</div>
</section>
  </div>
)

export default Contact;
