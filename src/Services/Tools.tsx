export class Tools {
    static newGuid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
          v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

    static assignArray<T>(length: number, callback: () => T): T[] {
      let array: Array<T> = new Array<T>(length > 0 ? length : 0);
      for (let i = 0; i < array.length; i++) {
        let item: T = callback();
        //item.id = this.newGuid();
        array[i] = item;
      }
      return array;
    }
}