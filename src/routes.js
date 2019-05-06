// import { createAppContainer } from "react-navigation";

// import { createStackNavigator } from 'react-navigation';

// import Main from './pages/main';

// export default createStackNavigator({
//     Main,
// });

import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Listagem from './pages/listagem';
import Cadastro from './pages/cadastro';



export default createAppContainer(
	createStackNavigator(
		{
			Main: { screen: Main },
			Listagem: { screen: Listagem},
			Cadastro: { screen: Cadastro},

			navigationOptions: () => ({
				headerStyle: {
					backgroundColor: '#79D97C'
				},
				headerTintColor: '#79D97C'
			})
		}
	)
)