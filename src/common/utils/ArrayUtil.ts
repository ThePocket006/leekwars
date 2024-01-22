import { ObjectUtil } from './ObjectUtil';
// import { ComDetailCodeVo } from '../../com/code/model/com-detail-code-vo';
// import { ItemInf } from '../models';
import * as _ from 'lodash';
import { StringUtil } from './StringUtil';

import * as nested_property from 'nested-property';

/**
 * ArrayUtil
 *
 * Seo Yongki
 */
export class ArrayUtil {

  /**
   * Verifies that an array is empty
   *
   * ArrayUtil.isEmpty(null);           // true
   * ArrayUtil.isEmpty(undefined);      // true
   * ArrayUtil.isEmpty([]);             // true
   * ArrayUtil.isEmpty([0,1,2]);        // false
   */
  public static isEmpty(array: Array<any>): boolean {
    return ObjectUtil.hasNoValue(array) || array.length === 0;
  }

  /**
   * Verifies that an array isn't empty
   *
   * ArrayUtil.isNotEmpty(null);        // false
   * ArrayUtil.isNotEmpty(undefined);   // false
   * ArrayUtil.isNotEmpty([]);          // false
   * ArrayUtil.isNotEmpty([0,1,2]);     // true
   */
  public static isNotEmpty(array: Array<any>): boolean {
    return ObjectUtil.hasValue(array) && array.length > 0;
  }

  /**
   * Returns an array with just the items for which the
   * given property matches the given value
   *
   * e.g. ArrayUtil.filterBy([
   *           {resourcetype: 0},
   *           {resourcetype: 2},
   *           {resourcetype: 0}
   *      ], 'resourcetype', 0)
   * will return a new array containing only the first and third
   * elements of the original array.
   *
   * @param array
   *      the array to filter
   * @param property
   *      the property to filter by
   * @param value
   *      the value that property must have in order for an
   *      element to be included in the result
   * @returns {T[]}
   *      a new array containing only the elements that have property matching value
   */
  // public static filterBy<T>(array: Array<T>, property: string, value: any): Array<T> {
  //   return array.filter((element: T) => {
  //     return (_.get(element, property) === value);
  //   });
  // }

  /**
   * Returns an array with just the items for which the
   * given property includes the given value
   */
  public static filterLike<T>(array: Array<T>, property: string, value: any): Array<T> {
    return array.filter((element: T) => {
      const elem: string = _.get(element, property);
      if(StringUtil.isBlank(elem)){
        return false;
      }else{
        return elem.indexOf(value) !== -1;
      }
    });
  }

  /**
   * Returns the first items in the given array for which the
   * given property matches the given value
   *
   * e.g. ArrayUtil.findBy([
   *           {resourcetype: 0},
   *           {resourcetype: 2},
   *           {resourcetype: 0}
   *      ], 'resourcetype', 0)
   * will return the first element of the original array.
   *
   * @param array
   *      the array to search through
   * @param property
   *      the property to check
   * @param value
   *      the value that property must have in order for an
   *      element to match
   * @returns {T}
   *      the first element in the array that has property matching value
   */
  public static findBy<T>(array: Array<T>, property: string, value: any): T|null {
    if(this.isEmpty(array)){
      return null;
    }
    return <T>array.find((element: T) => {
      return _.get(element, property) === value;
    });
  }

  /**
   * C'est la même chose que findBy, mais vous voulez rechercher le ObservableArray de Wijmo.
   * !==findBy와 동일하나 Wijmo의 ObservableArray를 검색하고자 하는 경우 사용==!
   */
  public static findArray<T>(array: any, property: string, value: any): T|null {
    for(let i = 0; i<array.length; i++){
      if(array[i][property] === value){
        return array[i];
      }
    }
    return null;
  }

  /**
   * Trier le tableau par attribut spécifique
   * !==array를 특정 속성을 기준으로 정렬함==!
   * ArrayUtil.orderBy(array, ['item', 'itemNm'], ['asc', 'desc']); // !==item속성으로 정방향 정렬, itemNm속성으로 역방향 정렬==!
   */
  public static orderBy(array: any, propArr: any, ordArr: any): Array<any> {
    return _.orderBy(array, propArr, ordArr);
  }

  /**
   * Trier le tableau par keyArr
   * !==array를 keyArr 순서로 정렬함==!
   * ArrayUtil.reOrder(this.cag0007, 'item', ['1', '3', '2', '4', '5', '6', '7', '8', '9']);
   */
  public static reOrder(array: Array<any>, property: string, keyArr: Array<any>): Array<any> {
    const rtnArray:Array<any> = [];
    keyArr.forEach((key: any, idx: number) => {
      const item = this.findBy(array, property, key);
      if(ObjectUtil.hasValue(item)){
        rtnArray.push(item);
      }
    });
    return rtnArray;
  }

  /**
   * Returns a new array containing the value of the given property
   * for all elements of the given array.
   *
   * @param array
   *      the array to map
   * @param property
   *      the property to map by
   * @returns {[]}
   *      a new array containing the values the elements in the original
   *      array had for the given property.
   */
  public static mapBy(array: Array<any>, property: string): Array<any> {
    return array.map((element: any) => {
      return _.get(element, property);
    });
  }

  /**
   * Exclure certains éléments du tableau
   * !==배열에서 특정 항목을 제외함==!
   * ["a", "b", "c"] => ArrayUtil.remove(array, 'b') => ["a", c"]
   */
  public static remove(array: Array<any>, value: any): Array<any> {
    const i = array.indexOf(value);
    if(i !== -1) {
      array.splice(i, 1);
    }
    return array;
  }

  /**
   * !==배열에서 특정 값을 갖는 항목을 모두 제외함==!
   * ArrayUtil.removeBy(itemList, 'checkSel', 'Y')
   */
  public static removeBy(array: Array<any>, property: string, value: any){
    for(let i=array.length-1; i>=0; i--){
      if(array[i][property] === value){
        array.splice(i, 1);
      }
    }
    return array;
  }

  /**
   * Élément ajouté à une position spécifique dans le tableau.
   * !==배열의 특정 위치에 item을 추가함==!
   * ["a", "b", "c"] => ArrayUtil.insert(array, 1, 'd') => ["a", "d", "b", c"]
   */
  public static insert(array: Array<any>, index:number, item: any): Array<any> {
    // const i = array.indexOf(value);
    if(index !== -1) {
      array.splice(index, 0, item);
    }
    return array;
  }

  /**
   * Remplit une valeur de propriété spécifique dans un tableau avec valeur
   * !==배열의 특정 속성값을 value로 채움==!
   * ArrayUtil.fill(array, 'chkSel', false);
   */
  public static fill(array: Array<any>, property:string, value: any): Array<any> {
    for(let i = 0; i<array.length; i++){
      array[i][property] = value;
    }
    return array;
  }

  /**
   * Modifier la valeur d'une propriété spécifique du tableau pour la carte
   * !==배열의 특정 속성값을 map으로 변경함==!
   * const map: Map<string, any> = new Map<string, any>();
   * map.set('Y', true);
   * map.set('N', false);
   * ArrayUtil.fillBy(array, 'chkSel', map);
   */
  public static fillBy(array: Array<any>, property:string, cMap: Map<string, any>): Array<any> {
    let bfValue = '';
    for(let i = 0; i<array.length; i++){
      bfValue = array[i][property];
      array[i][property] = cMap.get(bfValue);
    }
    return array;
  }

  /**
   * Ajouter un nouveau tableau au tableau existant
   * !==기존 배열에 새로운 배열을 추가함==!
   * ArrayUtil.pushAll(array, addArray);
   */
  public static pushAll(array: Array<any>, items: Array<any>): Array<any> {
    items.forEach((item: any, idx: number) => {
      array.push(item);
    });
    return array;
  }

  /**
   * Copier un tableau existant pour créer un nouveau tableau
   * !==기존 배열을 복사하여 새로운 배열을 생성함==!
   * ArrayUtil.copy(array);
   */
  public static copy(array: Array<any>): Array<any> {
    const rtnArray:Array<any> = [];
    array.forEach((item: any, idx: number) => {
      rtnArray.push(Object.assign({}, item));
    });
    return rtnArray;
  }

  /**
   * Changez la liste affichée dans le code en Type d'élément.
   * !==코드로 조회된 목록을 Item형태로 변경한다.==!
   * !==본 프로젝트에서는 코드성 목록을 Item<item, itemNm>형식으로 처리함==!
   */
  // public static codeListToitemList(codeList: Array<ComDetailCodeVo>) {
  //   const itemList: Array<ItemInf> = [];
  //   for (let i = 0; i < codeList.length; i++) {
  //     itemList.push({ item: codeList[i].cdVdval, itemNm: codeList[i].cdVdvalNm });
  //   }
  //   return itemList;
  // }

  /**
   * Changez la liste affichée par le code individuel en Type d'élément.
   * !==개별코드로 조회된 목록을 Item형태로 변경한다.==!
   * !==예) 항구코드, 공항코드, 세관명 등==!
   * !==본 프로젝트에서는 코드성 목록을 Item<item, itemNm>형식으로 처리함==!
   */
  // public static objectListToitemList(objectList: Array<any>, codeId: string, codeNm: string) {
  //   const itemList: Array<ItemInf> = [];
  //   for (let i = 0; i < objectList.length; i++) {
  //     itemList.push({ item: objectList[i][codeId], itemNm: objectList[i][codeNm] });
  //   }
  //   return itemList;
  // }

  /**
   * Vérifiez si la valeur du tableau est la même.
   * !==Array값의 동일여부를 체크한다.==!
   */
  public static arraysEqual(a: any[], b: any[]) {
    return _.isEqual(a.sort(), b.sort());
  }

  /**
   * !==Array값의 동일여부를 순서와 함께 체크한다.==!
   */
  public static arraysEqualWithSort(a: any, b: any) {
    return _.isEqual(a, b);
  }

  /**
   * Conversion d'une ArrayList en un objet Tree
   * !==ArrayList를 Tree Object로 변환==!
   *
   * data : ArrayList : child ID, parent ID is required(default : cNode, pNode)
   * options : {parentProperty: 'pNode', customID: 'cNode'}
   */
  public static arrayToTree(data: any, options?: { rootID: string | number; customID: any; }){
    options = _.assign({
      parentProperty: 'pNode',
      customID: 'cNode',
      rootID: '0'
    }, options);

    if (!_.isArray(data)) {
      throw new TypeError('Expected an object but got an invalid argument');
    }

    const grouped = this.groupByParents(data, <{ customID: _.ValueIterateeCustom<unknown, _.PropertyName> | undefined; parentProperty: any; rootID: any; }>options);
    return this.createTree(grouped, grouped[options.rootID], options.customID);
  }

  /**
   * Regroupement d'éléments avec le même ID parent
   * !==동일 parent ID를 갖는 item끼리 그루핑작업을 진행==!
   */
  public static groupByParents(array: any[] | _.List<unknown> | null | undefined, options: { customID: _.ValueIterateeCustom<unknown, _.PropertyName> | undefined; parentProperty: any; rootID: any; }): any {
    const arrayByID = _.keyBy(array, options.customID);


    return _.reduce(array, function(prev: { [x: string]: any; hasOwnProperty: (arg0: any) => any; }, item: any) {
      let parentID = nested_property.get(item, options.parentProperty);
      if (!parentID || !arrayByID.hasOwnProperty(parentID)) {
        parentID = options.rootID;
      }

      if (parentID && prev.hasOwnProperty(parentID)) {
        prev[parentID].push(item);
        return prev;
      }

      prev[parentID] = [item];
      return prev;
    }, {});
  }

  /**
   * Crée un objet Tree.
   * !==Tree Object를 생성한다.==!
   */
  public static createTree(array: { [x: string]: any; }, rootNodes: { [x: string]: any; hasOwnProperty: (arg0: string) => any; }, customID: string | number) {
    const tree = [];

    for (const rootNode in rootNodes) {
      if (!rootNodes.hasOwnProperty(rootNode)) {
        continue ;
      }
      const node = rootNodes[rootNode];
      const childNode = array[node[customID]];

      if (!node && !rootNodes.hasOwnProperty(rootNode)) {
        continue ;
      }

      if (childNode) {
        node.children = this.createTree(array, childNode, customID);
      }

      tree.push(node);
    }

    return tree;
  }

  /**
   * Retourne l'objet Tree en tant que tableau.
   * !==Tree Object를 Array로 반환한다.==!
   * items: treeSource, key: child key(children)
   */
  public static flattenItems(items: any[], key: string | number): Array<any>{
    return items.reduce((flattenedItems: any[], item: { [x: string]: any; }) => {
      flattenedItems.push(item);
      if (Array.isArray(item[key])) {
        flattenedItems = flattenedItems.concat(this.flattenItems(item[key], key));
      }
      return flattenedItems;
    }, []);
  }

}
