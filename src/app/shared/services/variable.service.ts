import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class VariableService {
    constructor() {}
    public environment = environment;
}