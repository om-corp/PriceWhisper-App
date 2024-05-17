import { Feather } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
import { Color } from './Styles';

export function BackButton({ onPress }: { onPress: () => void }) {
    return (
        <View style={styles.backButton}>
            <Feather name="chevron-left" size={16} color={Color.BRAND} onPress={onPress} />
        </View>
    );
};

const styles = StyleSheet.create({
    backButton: {
        flexDirection: 'row',
        paddingLeft: 20,
    }
});