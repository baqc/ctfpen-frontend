import { NIcon } from "naive-ui";
import { h } from "vue";

function renderIcon(icon) {
    return () => h(NIcon, null, { default: () => h(icon) });
}

export default renderIcon;