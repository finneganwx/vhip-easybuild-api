import { hiPrintPlugin } from 'vue-plugin-hiprint';

import { VhipBuilder } from './modules/build/index.js';
import { VhipPrinter } from './modules/print/index.js';
import { VhipAsst } from "./modules/assist/index.js";
import { VhipUtil } from './modules/util/index.js';

export const EasyVhip = {
    install: function (Vue, {
        modules = ['build', 'print', 'assist', 'util'],
        autoConnect = true
    } = {}) {
        if (modules.includes('build')) {
            VhipBuilder.install(Vue);
        }
        if (modules.includes('print')) {
            VhipPrinter.install(Vue);
        }
        if (modules.includes('assist')) {
            VhipAsst.install(Vue);
        }
        if (modules.includes('util')) {
            VhipUtil.install(Vue);
        }
        if (!autoConnect) {
            hiPrintPlugin.disAutoConnect();
        }
    }
}

export {
    VhipBuilder,
    VhipPrinter,
    VhipAsst,
    VhipUtil
}