import React from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

// Ex1: User-defined component Movie with properties title and year
const Boat = ({name, description, icon_name, icon_color, picture }) => {
    return (
        <View>
            <Text></Text>
            <Text>
                Boat:
                <FontAwesome6 name={icon_name} size={40} color={icon_color} />
            </Text>
            <Text>{name}</Text>
            <Text>{description}</Text>
            <Image source={picture}
                   style={{width:400, height:500}} />
        </View>
    );
};

export default Boat;