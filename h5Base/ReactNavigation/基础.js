/*
    创建路由导航
        安装 
            yarn add react-navigation
            yarn add react-native-gesture-handler
        Link 所有的原生依赖
            react-native link react-native-gesture-handler
        创建路由    
            createStackNavigator 
						可接受两个对象，第一个对象配置两个参数

						createStackNavigator创建好的路由 要放到容器中才能用
						import { createAppContainer } from 'react-navigation';
						const AppNavigator = createStackNavigator(...);
						const AppContainer = createAppContainer(AppNavigator);
						export default AppContainer;
						
					//Home 是路由名字 后面对应显示的页面
					//initialRouteName 指定初始路由 默认显示配置对象的第一个
					配置路由1: 
					const AppNavigator = createStackNavigator(
															{
																	Home: HomeScreen
															},
															{
																initialRouteName:'Home'
															});
					配置路由2:
					const AppNavigator = createStackNavigator(
															{
																	Home: {screen:HomeScreen}
															});
				路由跳转
					每次调用 ` push ` 时, 我们会向导航堆栈中添加新路由。 
					当你调用 ` navigate ` 时, 它首先尝试查找具有该名称的现有路由, 并且只有在堆栈上没有一个新路由时才会推送该路由。
					this.props.navigation.push('路由')/this.props.navigation.navigate('路由')
				生命周期
					一个包含 页面A和B 的stackNavigator 
					当跳转到A时，componentDidMount 被触发
					当跳转到B时，componentDidMount 被触发,但A依然在堆栈中保持被加载状态，他的componentWillUnMount也不会被调用

					当从B跳到A，B的componentWillUnMount方法被调用，但是A的componentDidMount 方法不会被调用，此时A依然时被加载状态
				路由传参
					this.props.navigation.navigate('RouteName', {  params go here  })
					this.props.navigation.getParam
					this.props.navigation.state.params		

				设置标题栏显示
					每个页面组件可以有一个名为navigationOptions静态属性(defaultNavigationOptions是应用于所有页面)
						class HomeScreen extends React.Component {
							static navigationOptions = {
								title: 'Home',
							};			
					在标题中使用参数
					class DetailsScreen extends React.Component {
						static navigationOptions = ({ navigation }) => {
							return {
								title: navigation.getParam('otherParam', 'A Nested Details Screen'),
							};
						};
					}
					传递给navigationOptions 函数的参数具有以下属性
						navigation 页面的导航属性，页面的路径为navigation.state
						screenProps 从导航器组件上层传递的 props
					使用setParams更新navigationOptions
						<Button
							title="Update the title"
							onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
						/>

				调整标题样式
					headerStyle : 应用于header的最外层view样式 如果设置backgroundColor,他就是header的颜色
					headerTintColor : 返回按钮和标题 都使用这个属性 作为它们的颜色
					headerTtileStyle : 用来指定fontFamily fontWeight 和其他Text样式属性
						class HomeScreen extends React.Component {
							static navigationOptions = {
								title: 'Home',
								headerStyle: {
									backgroundColor: '#f4511e',
								},
								headerTintColor: '#fff',
								headerTitleStyle: {
									fontWeight: 'bold',
								},
							};
						}	

				跨页面共享通用的navigationOptions(页面会覆盖 这里设置的内容)
					createStackNavigator 第二个参数配置
					const RootStack = createStackNavigator(
								{
								Home: HomeScreen,
								Details: DetailsScreen,
								},
								{
								initialRouteName: 'Home',
								defaultNavigationOptions: {
										headerStyle: {
											backgroundColor: '#f4511e',
											},
										headerTintColor: '#fff',
										headerTitleStyle: {
											fontWeight: 'bold',
											},
									},
								navigationOptions: {
										tabBarLabel: 'Home!',
									},
								});

				向标题栏中添加一个按钮
					class HomeScreen extends React.Component {
						static navigationOptions = {
							headerTitle: <LogoTitle />,
							headerRight: (
								<Button
									onPress={() => alert('This is a button!')}
									title="Info"
									color="#fff"
								/>
							),
						};
					}
				
				
				1
				1












*/