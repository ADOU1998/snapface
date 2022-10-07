import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthIntercepter } from "./auth.interceptor";

export const HttpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthIntercepter, multi: true }
]