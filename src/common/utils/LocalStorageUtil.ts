import {StringUtil} from "@/common/utils/StringUtil";

export class LocalStorageUtil{
    protected storage = localStorage

    get(key: string){
        const tmp = this.storage.getItem(key)

        if (tmp && StringUtil.isJSON(tmp)) {
            return JSON.parse(tmp)
        }else{
            return tmp
        }
    }

    set(key: string, data: any){
        this.storage.setItem(key, JSON.stringify(data))
    }
}
