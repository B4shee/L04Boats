import React from 'react';
import {Text, Image, ScrollView} from 'react-native';
import Boat from './Boat';

class App extends React.Component {
  render() {
    return (
        <ScrollView>
            <Text>GetABoat - For Sale</Text>
            {/* 1. Sea Ray 500 Sundancer */}
          <Boat
              name={"Sea Ray 500 Sundancer"}
              description={"Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."}
              icon_name={"ship"}
              icon_color={"grey"}
              picture={require("./img/sea_ray.jpg")}/>
            {/* 2. Four Winns Horizon 180 */}
          <Boat name={"Four Winns Horizon 180"}
                description={"A sporty look and refined details truly set the Horizon 180 above all others."}
                icon_name={"ship"}
                icon_color={"grey"}
                picture={require("./img/four_winns.jpg")}/>
            {/* 3. Flipper 640 ST */}
          <Boat name={"Flipper 640 ST"}
                description={"A modern take on the classic, traditional hardtop and perfect for a family picnic."}
                icon_name={"ship"}
                icon_color={"grey"}
                picture={require("./img/flipper.jpg")}/>
            {/* 4. Princess V48 */}
            <Boat name={"Princess V48"}
                  description={"There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."}
                  icon_name={"ship"}
                  icon_color={"grey"}
                  picture={require("./img/princess.jpg")}/>
            {/* 5. Bayliner VR6 Cuddy */}
            <Boat name={"Bayliner VR6 Cuddy"}
                  description={"Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."}
                  icon_name={"ship"}
                  icon_color={"grey"}
                  picture={require("./img/princess.jpg")}/>
            {/* 6. Fairline Targa 47 */}
            <Boat name={"Fairline Targa 47"}
                  description={"Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."}
                  icon_name={"ship"}
                  icon_color={"grey"}
                  picture={require("./img/fairline.jpg")}/>
            </ScrollView>
            );
        };
  }

export default App;
