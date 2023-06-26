import {action, computed, observable} from "mobx";

export class AppStore {
    @observable.ref protected _coinName: string = "";
    @observable.ref protected _coinAmount: number = 0;

    constructor() {
    }

    @computed
    get coinName() {
        return this._coinName
    }

    @computed
    get coinAmount() {
        return this._coinAmount
    }

    @action private setCoinName = (coinName: string) => this._coinName = coinName
    @action private setCoinAmount = (amount: string) => this._coinAmount = amount
}