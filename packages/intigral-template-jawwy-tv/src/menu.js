import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Api, Button } from 'renative';
import { isTopMenuBased } from './nav';
import {withFocusable} from '@noriginmedia/react-spatial-navigation';
import Theme from './theme';

let isTop;

const styles = StyleSheet.create({
    containerVertical: {
        paddingTop: 40,
        paddingLeft: 20,
        width: '100%',
        height: '100%',
        backgroundColor: Theme.color1,
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: '#AAAAAA',
        flexDirection: 'column'
    },
    containerHorizontal: {
        paddingLeft: 40,
        width: '100%',
        height: '100%',
        backgroundColor: Theme.color1,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#AAAAAA',
        flexDirection: 'row'
    },
    text: {
        fontFamily: 'TimeBurner',
        color: Theme.color4,
        fontSize: 20,
        marginTop: 10,
        textAlign: 'left',
    },
    button: {
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
        marginHorizontal: 20,
        maxWidth: 400,
        minWidth: 50,
        borderWidth: 0,
    },
    focusedBorder: {
        padding: 20,
        borderWidth: 6,
        borderColor: 'red',
        backgroundColor: 'white'
    },
});

class Menu extends React.Component {
    constructor(props) {
        super(props);
        isTop = isTopMenuBased();

        this.onMenuItemPress = this.onMenuItemPress.bind(this);
    }

    componentDidMount() {
        this.props.setFocus();
    }

    onMenuItemPress(menu) {
        if (menu && menu.dataId) {
            switch (menu.dataId) {
                case 'HOME' :
                    Api.navigation.navigate('Home');
                    break;
                default:
                    Api.navigation.navigate('MyPage');
                    break;
            }
        } else {
            Api.navigation.navigate('MyPage');
        }

    }

    render() {
        return (
            <View style={[isTop ? styles.containerHorizontal : styles.containerVertical, this.props.style]}>
                <Text style={styles.text}>
                    Menu
                </Text>
                {/*<Button*/}
                    {/*title="Home"*/}
                    {/*iconFont="ionicons"*/}
                    {/*className="focusable"*/}
                    {/*iconName="md-home"*/}
                    {/*iconColor={Theme.color3}*/}
                    {/*style={styles.button}*/}
                    {/*onPress={() => {*/}
                        {/*Api.navigation.navigate('Home', {*/}
                            {/*onSuccess: () => {*/}

                            {/*}*/}
                        {/*});*/}
                    {/*}}*/}
                {/*/>*/}
                {/*<Button*/}
                    {/*title="My Page"*/}
                    {/*iconFont="ionicons"*/}
                    {/*iconName="md-book"*/}
                    {/*className="focusable"*/}
                    {/*iconColor={Theme.color3}*/}
                    {/*style={styles.button}*/}
                    {/*onPress={() => {*/}
                        {/*Api.navigation.navigate('MyPage');*/}
                    {/*}}*/}
                {/*/>*/}
                {/*<Button*/}
                    {/*title="My Modal"*/}
                    {/*iconFont="ionicons"*/}
                    {/*className="focusable"*/}
                    {/*iconName="ios-albums"*/}
                    {/*iconColor={Theme.color3}*/}
                    {/*style={styles.button}*/}
                    {/*onPress={() => {*/}
                        {/*Api.navigation.navigate('MyModal');*/}
                    {/*}}*/}
                {/*/>*/}
                <MenuItemFocusable dataId={'HOME'} focusKey={'MENU-1'} text={"HOME"} icon={"md-home"} onEnterPress={this.onMenuItemPress} />
                <MenuItemFocusable dataId={'LIVETV'} focusKey={'MENU-2'} text={"LIVE TV"} icon={"md-play"} onEnterPress={this.onMenuItemPress} onPress={this.onMenuItemPress}/>
                <MenuItemFocusable dataId={'TVGUIDE'} focusKey={'MENU-3'} text={"TV GUIDE"} icon={"md-stopwatch"} onEnterPress={this.onMenuItemPress} />
                <MenuItemFocusable dataId={'REWIND'} focusKey={'MENU-4'} text={"REWIND"} icon={"md-rewind"} onEnterPress={this.onMenuItemPress} />
                <MenuItemFocusable dataId={'ONDEMAND'} focusKey={'MENU-5'} text={"ON DEMAND"} icon={"md-videocam"} onEnterPress={this.onMenuItemPress} />
            </View>
        );
    }
}

const MenuFocusable = withFocusable({
    trackChildren: true
})(Menu);

class MenuItem extends React.PureComponent {
    constructor(props) {
        super(props);
    }


    render() {
        // console.log('Menu item rendered: ', this.props.realFocusKey);

        return (<Button
            title={this.props.text}
            iconFont="ionicons"
            iconName={this.props.icon}
            iconColor={Theme.color3}
            style={[styles.button, this.props.focused ? styles.focusedBorder : null]}
            onPress={this.props.onEnterPress}/>
        );
    }
}

const MenuItemFocusable = withFocusable()(MenuItem);

export default MenuFocusable;
