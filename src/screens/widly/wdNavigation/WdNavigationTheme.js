import { DefaultTheme } from "@react-navigation/native";
import WdColor from "../config/WdColor";

export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: WdColor.primary,
        background: WdColor.white
    }
};