import * as React from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view'
import { YourListsTab } from '../../pages/home/your-lists';
import { SupermarketsTab } from '../../pages/home/supermarkets';
import Colors from '../../constants/Colors';

const renderScene = SceneMap({
  yourLists: YourListsTab,
  supermarkets: SupermarketsTab,
});

export default function HomeTabView() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'yourLists', title: 'Suas listas' },
    { key: 'supermarkets', title: 'Supermercados' }
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={((props) => {
        return (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: Colors.general.yellow }}
            style={{ backgroundColor: Colors.general.lightRed }}
          />
        )
      })}
    />
  );
}