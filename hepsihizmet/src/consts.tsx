import { IAsyncData } from "./models"

export const APP_ROUTES = {
    HOMEPAGE: {
        PATH: "/"
    }
}

export const INITIAL_ASYNC_DATA: IAsyncData<any> = {
    data: null,
    error: undefined,
    loading: undefined
}