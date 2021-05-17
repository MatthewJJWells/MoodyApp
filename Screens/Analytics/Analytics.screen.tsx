import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { LineChartComponent } from '../../D3/LineChart';

const Analytics: React.FC = () => {
  return (
    <View>
      <LineChartComponent />;
      {/* <Text>
        'Cat not kitten around have secret plans yet friends are not food yet
        miaow then turn around and show you my bum yet make meme, make cute
        face. Pet me pet me don't pet me groom forever, stretch tongue and leave
        it slightly out, blep, sugar, my siamese, stalks me (in a good way), day
        and night.'
      </Text> */}
    </View>
  );
};

export default Analytics;
