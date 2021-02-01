// @TODO remove this in prod
import store from "../redux/store";
import * as actions from "../redux/actions";

window.rwaStore = store;
window.rwaActions = actions;
