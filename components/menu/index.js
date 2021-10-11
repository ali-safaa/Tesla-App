import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from "./style"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight, } from '@fortawesome/free-solid-svg-icons'
import items from "./items"
const Menu = () => {
    return (
        <View style={styles.menuItems}>
            {items.map(item => {
                const {id, title, subTitle, icon} = item;
                return (
                <TouchableOpacity key={id}>
            <View style={styles.menuRow}>
                <FontAwesomeIcon style={styles.icon} icon={icon} size={24}/>
            <View style={styles.menuTextBox}>
                <Text style={styles.menuText}>{title}</Text>
                {subTitle && (
                    <Text style={styles.subTitle}>{subTitle}</Text>
                )}
            </View>
            <FontAwesomeIcon style={styles.arrowIcon} icon={faChevronRight} size={24}/>
            </View>
            </TouchableOpacity>
                )
            })}
        </View>
    )
}

export default Menu
