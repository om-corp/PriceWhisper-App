import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootTabParamList } from "~/navigation";

type ProdutosScreenNavigationProps = StackNavigationProp<RootTabParamList, 'Produtos'>;

export function Produtos() {
    const navigation = useNavigation<ProdutosScreenNavigationProps>();

    return (
        <SafeAreaView>

        </SafeAreaView>
    )
}