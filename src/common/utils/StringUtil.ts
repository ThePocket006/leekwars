import {CaseToCase} from 'case-to-case'
import isHtml from 'is-html-ts';
import * as _ from 'lodash';
import {forEach, isArray} from 'lodash';

import {ObjectUtil} from './ObjectUtil';
import {ArrayUtil} from './ArrayUtil';

import * as stringformat from 'stringformat';

const strCase = new CaseToCase()

export class StringUtil extends String {

  /**
   Verifies that a value is `null` or an empty string.

   StringUtil.isEmpty(null);            // true
   StringUtil.isEmpty(undefined);       // true
   StringUtil.isEmpty('');              // true
   StringUtil.isEmpty('Adam Hawkins');  // false
   StringUtil.isEmpty('\n\t');          // false
   StringUtil.isEmpty('  ');            // false
   */
  public static isEmpty(value: string): boolean {
    return ObjectUtil.isEmpty(value);
  }

  /**
   Verifies that a value is not `null` or an empty string.

   StringUtil.isNotEmpty(null);            // false
   StringUtil.isNotEmpty(undefined);       // false
   StringUtil.isNotEmpty('');              // false
   StringUtil.isNotEmpty('Adam Hawkins');  // true
   StringUtil.isNotEmpty('\n\t');          // true
   StringUtil.isNotEmpty('  ');            // true
   */
  public static isNotEmpty(value: string): boolean {
    return ObjectUtil.isNotEmpty(value);
  }

  /**
   A value is blank if it is empty or a whitespace string.

   StringUtil.isBlank(null);            // true
   StringUtil.isBlank(undefined);       // true
   StringUtil.isBlank('');              // true
   StringUtil.isBlank('\n\t');          // true
   StringUtil.isBlank('  ');            // true
   StringUtil.isBlank('\n\t Hello');    // false
   StringUtil.isBlank('Hello world');   // false
   */
  public static isBlank(value: string): boolean {
    return (StringUtil.isEmpty(value) || value.match(/\S/) === null);
  }

  /**
   Returns true if the value is not blank

   StringUtil.isNotBlank(null);            // false
   StringUtil.isNotBlank(undefined);       // false
   StringUtil.isNotBlank('');              // false
   StringUtil.isNotBlank('\n\t');          // false
   StringUtil.isNotBlank('  ');            // false
   StringUtil.isNotBlank('\n\t Hello');    // true
   StringUtil.isNotBlank('Hello world');   // true
   */
  public static isNotBlank(value: string): boolean {
    return !StringUtil.isBlank(value);
  }

  /**
   * calculate bytes of text
   *
   * StringUtil.getByteLength('checkText');
   */
  public static getByteLength(s: string, b?: number, i?: number, c?: number) {
    // tslint:disable-next-line:no-bitwise curly
    for (b = i = 0; c = s.charCodeAt(i++); b += c >> 11 ? 3 : c >> 7 ? 2 : 1) ;
    return b;
  }

  /**
   * JSON parsing check
   *
   * StringUtil.isJSON('[{}, {}]')
   */
  public static isJSON(str: string): boolean {
    try {
      return (JSON.parse(str) && !!str);
    } catch (e) {
      return false;
    }
  }

  /**
   * Message string format
   *
   * StringUtil.messageFormat('{0}is required.', 'item')
   */
  public static messageFormat(msg: string, param?: any) {
    if (ArrayUtil.isEmpty(param)) {
      param = [];
    }
    param.unshift(msg);
    return stringformat.apply(this, param);
  }

  /**
   * 콤마로 분리된 문자열에서 비교문자열을 포함하는 값이 존재하면 true를 리턴하는 메서드
   *
   * splitEqual('A, B, C', 'B') => true
   * splitEqual('A, B, C', 'D') => false
   */
  public static splitEqual(source: string, compStr: string): boolean {
    let returnVal = false;
    if (this.isBlank(compStr)) {
      returnVal = false;
    } else {
      const splitSource: Array<string> = source.split(',');
      const splitLength: number = splitSource.length;
      for (let i = 0; i < splitLength; i++) {
        if (compStr === splitSource[i].trim()) {
          returnVal = true;
          break;
        }
      }
    }
    return returnVal;
  }

  /**
   *  replace all instances of the specified string
   *
   * replaceAll('DGD05-2019-VTW-000003-I', '-', '') => DGD052019VTW000003I
   */
  public static replaceAll(source: string, searchStr: string | RegExp, replaceStr: string) {
    const regStr = (typeof searchStr === 'string') ? new RegExp(searchStr, 'gi') : searchStr;
    return source.replace(regStr, replaceStr);
  }

  /**
   * string on the left side if it's shorter than length
   *
   * lPad('123', 5, '0') => '00123'
   */
  public static lPad(value: string, length: number, prefix: string) {
    return _.padStart(value, length, prefix);
  }

  /**
   * string on the right side if it's shorter than length.
   *
   * rPad('abc', 5, '-') => 'abc--'
   */
  public static rPad(value: string, length: number, sufix: string) {
    return _.padEnd(value, length, sufix);
  }

  /**
   * change seperated string to Camelcase
   * firstUpper : first charator to uppercase
   * seperator : default '-'
   */
  public static toCamelCase(value: string, firstUpper?: boolean, seperator?: string): string {
    value = (value||'').trim()
    if (!value) {
      return '';
    }

    if (!firstUpper) {
      firstUpper = false;
    }
    if (seperator == undefined || this.isBlank(seperator)) {
      seperator = '-';
    }
    const strArr = value.toLowerCase().split(seperator);
    for (let i = 0; i < strArr.length; i++) {
      strArr[i] = PipeUtil.titlecase(strArr[i]);
    }
    if (!firstUpper) {
      strArr[0] = strArr[0].toLowerCase();
    }
    return strArr.join('');
  }

  /**
   * get screenId from Component Name
   */
  public static getScrnId(componentNm: string) {
    const strArr = [];
    let char = '';
    componentNm = componentNm.replace('Component', ''); // remove 'Component'
    for (let i = 0; i < componentNm.length; i++) {
      char = componentNm.charAt(i);
      if (i > 0 && this.isUpperCase(char)) { // check uppercase
        char = '-' + char;
      }
      if (i > 0 && this.isNumber(char) && !this.isNumber(componentNm.charAt(i - 1))) { // check first number
        char = '-' + char;
      }
      strArr.push(char.toLowerCase());
    }
    return strArr.join('');
  }

  /**
   * check Uppercase
   */
  public static isUpperCase(value: string): boolean {
    const pattern = /^[A-Z]*$/;
    if (pattern.test(value)) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * check number
   */
  public static isNumber(value: string) {
    const pattern = /^[0-9]*$/;
    if (pattern.test(value)) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * check string length
   */
  public static checkLength(value: string, len: number): boolean {
    if (value.length === len) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * get param array from url
   */
  public static getUrlParam(url: string): Array<any> {
    const rtnParam: Array<any> = [];
    const urlArr = url.split('?');
    if (urlArr.length === 2) {
      const urlParams = urlArr[1];
      const paramArr = urlParams.split('&');
      if (paramArr.length > 1) {
        let param;
        for (let i = 0; i < paramArr.length; i++) {
          param = paramArr[i].split('=');
          rtnParam.push({param: param[0], paramVal: param[1]});
        }
      } else {
        const param = urlParams.split('=');
        rtnParam.push({param: param[0], paramVal: param[1]});
      }
    } else {
      return [];
    }
    return rtnParam;
  }

  /**
   * get screenId from url
   */
  public static getScrnIdFromUrl(url: string): string {
    const urlArr = url.split('/');
    const lastUrl = urlArr[urlArr.length - 1];
    const tmpId = 'UI-' + lastUrl.split('?')[0].toUpperCase();
    const scrnId = tmpId.substr(0, 12) + '-' + tmpId.substr(12);
    return scrnId;
  }

  /**
   * Check if you have certain characters
   */
  public static checkHasString(source: string, charArr: Array<string>): boolean {
    let result = false;
    for (const key in charArr) {
      if ((source.indexOf(key) > -1)) {
        result = true;
        // return false;
        break;

      }
    }
    //   charArr.forEach((key) => {
    //     if(source.indexOf(key) > -1){
    //       result = true;
    //       return false; // break;
    //     }
    //   });
    return result;
  }

  isBlank() {
    return StringIsBlank(this.toString())
  }

  isNotBlank() {
    return !this.isBlank()
  }

  isEmpty() {
    return StringIsEmpty(this.toString())
  }

  isNotEmpty() {
    return !this.isEmpty()
  }

  camelCase() {
    return camelCase(this.toString())
  }

  lowerCase() {
    return lowerCase(this.toString())
  }

  lowerKebabCase() {
    return lowerKebabCase(this.toString())
  }

  pascalCase() {
    return pascalCase(this.toString())
  }

  upperCase() {
    return upperCase(this.toString())
  }

  upperKebabCase() {
    return upperKebabCase(this.toString())
  }

  upperSnakeCase() {
    return upperSnakeCase(this.toString())
  }

  StrReplace(str: string, searchValue: string | RegExp | string[] | RegExp[], replaceValue: string | string[]) {
    return StrReplace(str, searchValue, replaceValue);
  }

  static isHtml(str: string) {
    return isHtml(str)
  }

  static stringToObj(str: string, separator: string = ',') {
    return stringToObj(str, separator)
  }
}

export {
  StringIsBlank,
  StringIsEmpty,
  camelCase,
  lowerCase,
  lowerKebabCase,
  pascalCase,
  upperCase,
  upperKebabCase,
  upperSnakeCase,
  StrReplace,
  stringToObj,
}

function StringIsBlank(str: string) {
  return str.trim().length === 0;
}

function StringIsEmpty(str: string) {
  return str.length === 0;
}

function camelCase(str: string) {
  return strCase.toCamelCase(str);
}

function lowerCase(str: string) {
  return strCase.toLowerCase(str);
}

function lowerKebabCase(str: string) {
  return strCase.toLowerKebabCase(str);
}

function pascalCase(str: string) {
  return strCase.toPascalCase(str);
}

function upperCase(str: string) {
  return strCase.toUpperCase(str);
}

function upperKebabCase(str: string) {
  return strCase.toUpperKebabCase(str);
}

function upperSnakeCase(str: string) {
  return strCase.toUpperSnakeCase(str);
}

function StrReplace(str: string, searchValue: string | RegExp | string[] | RegExp[], replaceValue: string | string[]) {
  if (isArray(searchValue)) {
    if (isArray(replaceValue)) {
      if (searchValue.length !== replaceValue.length)
        throw new Error("searchValue length and replaceValue length must be equal");

      forEach(str, (val, key) => {
        str.replaceAll(val, replaceValue[key])
      });
    } else {
      forEach(str, val => {
        str.replaceAll(val, replaceValue)
      });
    }

    return str;
  } else {
    return str.replaceAll(<string>searchValue, <string>replaceValue);
  }
}

function stringToObj(str: string, separator: string = ','): { [key: string]: string } {
  const obj: { [key: string]: string } = {};
  const stringArray = str.split(separator);
  for (let i = 0; i < stringArray.length; i++) {
    const kvp = stringArray[i].split('=');
    if (kvp[1]) {
      const key = StringUtil.replaceAll(lowerKebabCase(kvp[0]), ' ', '-')
      obj[key] = StringUtil.replaceAll(kvp[1], /(^['"]+|(['"]+)$)/ig, '')
    }
  }

  return obj;
}
