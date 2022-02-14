import AppStorage from "localforage";

const AppStore = AppStorage.createInstance({
  name: "SSAFF_LLC",
  storeName: "ssaf_llc_db",
  version: 1.0,
  size: 4980736,
  description: "SSAF LLC Local Database",
  driver: [
    AppStorage.INDEXEDDB,
    AppStorage.LOCALSTORAGE,
    AppStorage.WEBSQL
  ],
});

class Store {

  public getItem = AppStore.getItem;
  public setItem = AppStore.setItem;
  public clearStore = AppStore.clear;
  public removeItem = AppStore.removeItem;

  getFromStore(key: string) {
    this.getItem(key).then((payload) => {
      return payload;
    }).catch((err) => {
      console.error('Error getting item: ', err);
      return null;
    })
  }

  pushToStore(key: string, data: any) {
    this.setItem(key, data).then((payload) => {
      console.log('payload:', payload);
      return true;
    }).catch((err) => {
      console.error('Error pushing item: ', err);
      return false;
    })
  }

  deleteFromStore(key: string) {
    this.removeItem(key).then(() => {
      return true;
    }).catch((err) => {
      console.error('Error deleting item: ', err);
      return false;
    })
  }


  clearStorage() {
    this.clearStore().then(() => {
      return true;
    }).catch((err) => {
      console.error('Error clearing db: ', err);
      return false;
    })
  }
}


export default Store;