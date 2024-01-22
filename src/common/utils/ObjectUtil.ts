import * as _ from 'lodash';
import {StringUtil} from './StringUtil';

/**
 * ObjectUtil
 *
 * Seo Yongki
 */
export class ObjectUtil {

  /**
   Returns true if the passed value is null or undefined.

   ObjectUtil.hasNoValue();              // true
   ObjectUtil.hasNoValue(null);          // true
   ObjectUtil.hasNoValue(undefined);     // true
   ObjectUtil.hasNoValue('');            // false
   ObjectUtil.hasNoValue([]);            // false
   ObjectUtil.hasNoValue(function() {}); // false
   */
  public static hasNoValue(obj?: any): boolean {
    return obj === null || obj === undefined;
  }

  /**
   Returns true if the passed value is not null or undefined.

   ObjectUtil.hasValue();              // false
   ObjectUtil.hasValue(null);          // false
   ObjectUtil.hasValue(undefined);     // false
   ObjectUtil.hasValue('');            // true
   ObjectUtil.hasValue([]);            // true
   ObjectUtil.hasValue(function() {}); // true
   */
  public static hasValue(obj?: any): boolean {
    return !ObjectUtil.hasNoValue(obj);
  }

  /**
   Verifies that a value is `null` or an empty string, empty array,
   or empty function.

   ObjectUtil.isEmpty();                // true
   ObjectUtil.isEmpty(null);            // true
   ObjectUtil.isEmpty(undefined);       // true
   ObjectUtil.isEmpty('');              // true
   ObjectUtil.isEmpty([]);              // true
   ObjectUtil.isEmpty({});              // false
   ObjectUtil.isEmpty('Adam Hawkins');  // false
   ObjectUtil.isEmpty([0,1,2]);         // false
   ObjectUtil.isEmpty('\n\t');          // false
   ObjectUtil.isEmpty('  ');            // false
   */
  public static isEmpty(obj?: any): boolean {
    const hasNoValue = ObjectUtil.hasNoValue(obj);
    if (hasNoValue) {
      return hasNoValue;
    }

    if (typeof obj.size === 'number') {
      return !obj.size;
    }

    const objectType = typeof obj;

    if (objectType === 'object') {
      const size = obj['size'];
      if (typeof size === 'number') {
        return !size;
      }
    }

    if (typeof obj.length === 'number' && objectType !== 'function') {
      return !obj.length;
    }

    if (objectType === 'object') {
      const length = obj['length'];
      if (typeof length === 'number') {
        return !length;
      }
    }

    return false;
  }


  /**
   Verifies that a value is not `null`, an empty string, empty array,
   or empty function.

   ObjectUtil.isNotEmpty();                // false
   ObjectUtil.isNotEmpty(null);            // false
   ObjectUtil.isNotEmpty(undefined);       // false
   ObjectUtil.isNotEmpty('');              // false
   ObjectUtil.isNotEmpty([]);              // false
   ObjectUtil.isNotEmpty({});              // true
   ObjectUtil.isNotEmpty('Adam Hawkins');  // true
   ObjectUtil.isNotEmpty([0,1,2]);         // true
   ObjectUtil.isNotEmpty('\n\t');          // true
   ObjectUtil.isNotEmpty('  ');            // true
   */
  public static isNotEmpty(obj?: any): boolean {
    return !ObjectUtil.isEmpty(obj);
  }

  /**
   * Object Equal check
   */
  public static isEqual(vo1: any, vo2: any) {
    return _.isEqual(vo1, vo2);
  }

  /**
   * Object copy
   */
  public static copy(obj: any) {
    return Object.assign({}, obj);
  }

  /**
   * Object to JSON (debug)
   */
  public static simpleStringify(object: any) {
    const simpleObject: any = {};
    for (const prop in object) {
      if (!object.hasOwnProperty(prop)) {
        continue;
      }
      if (typeof (object[prop]) === 'object') {
        continue;
      }
      if (typeof (object[prop]) === 'function') {
        continue;
      }
      simpleObject[prop] = object[prop];
    }
    return JSON.stringify(simpleObject); // returns cleaned up JSON
  }

  /**
   * Object to console Log (debug)
   */
  public static objectToLog(object: any, removeNull?: boolean) {
    let logStr = '';
    for (const prop in object) {
      if (!object.hasOwnProperty(prop)) {
        continue;
      }
      if (typeof (object[prop]) === 'object') {
        continue;
      }
      if (typeof (object[prop]) === 'function') {
        continue;
      }
      if (removeNull) {
        if (this.hasValue(object[prop])) {
          if (typeof object[prop] === 'string' && StringUtil.isNotBlank(object[prop])) {
            logStr += prop + ' : ' + object[prop] + '\n';
          } else if (typeof object[prop] === 'number' && object[prop] !== 0) {
            logStr += prop + ' : ' + object[prop] + '\n';
          }
        }
      } else {
        logStr += prop + ' : ' + object[prop] + '\n';
      }
    }
    return logStr;
  }

  public static filter<T extends object>(obj: T[], fn: any): T[] {
    return <T[]>(_.filter(obj, fn))
  }

  public static map<T>(obj: object, fn: any): T {
    return <T>(_.map(obj, fn));
  }

  static omit<T extends object>(sourceItem: T, omitKey: string[]): Partial<T> | T {
    if (omitKey.length === 0)
      return sourceItem
    else
      return _.omit(sourceItem, omitKey);
  }

  static hasKey<T extends object>(obj: T, key: string) {
    const keys = Object.keys(obj)

    if (!keys)
      return false

    return keys.includes(key);
  }

  static hasAnyKey<T extends object>(tmp: T, keys: string[]) {
    const _keys = Object.keys(tmp)

    if (!keys || !_keys)
      return false

    let test = false

    keys.forEach(v => {
      if ((test = test || _keys.includes(v))) {
        return;
      }
    })

    return test
  }

  static hasAllKey<T extends object>(tmp: T, keys: string[]) {
    const _keys = Object.keys(tmp)

    if (!keys || !_keys)
      return false

    let test = true

    keys.forEach(v => {
      test = test && _keys.includes(v)
    })

    return test
  }

  static hasOwnProperty(obj: object, prop: string) {
    return Object.prototype.hasOwnProperty.call(obj, prop)
  }

  static hasOwnMethod(obj: object, method: string) {
    // @ts-ignore
    return this.hasOwnProperty(obj, method) && typeof obj[method] === 'function'
  }

  static isNumber(v: any) {
    return typeof v === "number";
  }

  static isString(v: any) {
    return typeof v === "string";
  }

  static isBoolean(v: any) {
    return typeof v === "boolean";
  }

  static isBool(v: any) {
    return this.isBoolean(v);
  }

  static isPrimitive(v: any) {
    return this.isString(v) || this.isBoolean(v) || this.isNumber(v);
  }

  static each(obj: object, fn: Function) {
    // @ts-ignore
    return _.each(obj, fn)
  }
}
