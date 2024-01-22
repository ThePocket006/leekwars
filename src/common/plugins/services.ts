import type {App} from "vue";
import {leekServices} from "@/common/services/leekwars";
import {LocalStorageUtil} from "@/common/utils";

export interface IPluginServices {
    leekServices: LeekServices,
    storage: LocalStorageUtil
}
export default {
    install: (app: App<Element>, options?: any) => {
        const data = {
            leekServices
            , storage: new LocalStorageUtil()
        }

        // inject a globally available $services() method
        app.config.globalProperties.$services = data
        app.provide('services', data)
    }
}
