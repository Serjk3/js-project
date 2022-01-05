export class TransformService {
  static fbObjectToArray(fbData) {
    return Object.keys(fbData).map((keys) => {
      const ITEM = fbData[keys];
      ITEM.id = keys;
      console.log(ITEM);
      return ITEM;
    });
  }
}
