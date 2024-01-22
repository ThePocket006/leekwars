import { StringUtil } from './StringUtil';
import * as moment from 'moment';

export class DateUtil {

  /**
   * 현재날짜를 format형식(DD/MM/YYYY)으로 가져옴
   *
   * DateUtil.getToday() -> DD/MM/YYYY
   */
  public static getToday(): string {
    return this.formatDate(new Date());
  }

  /**
   * 현재시간을 string으로 가져옴. cmm-timeinput에 바인딩
   * 12s, 12h, 24s, 24h(defulat)
   */
  public static getTime(timeTp?: string): string {
    let rtnTime = '';
    if(timeTp === '12s'){
      rtnTime = this.formatDate(new Date(), 'hh:mm:ss a').toUpperCase();
    }else if(timeTp === '12h'){
      rtnTime = this.formatDate(new Date(), 'hh:mm a').toUpperCase();
    }else if(timeTp === '24s'){
      rtnTime = this.formatDate(new Date(), 'HH:mm:ss');
    }else{ // 24h
      rtnTime = this.formatDate(new Date(), 'HH:mm');
    }
    return rtnTime;
  }

  /**
   * 현재일시를 string으로 가져옴. cmm-datetime에 바인딩
   * 12s, 12h, 24s, 24h(defulat)
   */
  public static getDateTime(timeTp?: string): string {
    let rtnDateTime = '';
    if(timeTp === '12s'){
      rtnDateTime = this.formatDate(new Date(), 'DD/MM/YYYY hh:mm:ss a').toUpperCase();
    }else if(timeTp === '12h'){
      rtnDateTime = this.formatDate(new Date(), 'DD/MM/YYYY hh:mm a').toUpperCase();
    }else if(timeTp === '24s'){
      rtnDateTime = this.formatDate(new Date(), 'DD/MM/YYYY HH:mm:ss');
    }else{ // 24h
      rtnDateTime = this.formatDate(new Date(), 'DD/MM/YYYY HH:mm');
    }
    return rtnDateTime;
  }

  public static stringToDate(inDate: string, timeTp?: string): Date {
    let momentValue;
    if(timeTp === undefined || StringUtil.isBlank(timeTp)){
      momentValue = moment(inDate, 'DD/MM/YYYY');
    }else if(timeTp === '24s'){
      momentValue = moment(inDate, 'DD/MM/YYYY HH:mm:ss');
    }else{ // 24h
      momentValue = moment(inDate, 'DD/MM/YYYY HH:mm');
    }
    return momentValue.toDate();
  }

  /**
   * Date add days
   *
   * DateUtil.addDays(new Date(), 1)
   */
  public static addDays(inDate: Date, addDays: number): Date {
    const momentValue = moment(inDate);
    return momentValue.add(addDays, 'days').toDate();
  }

  /**
   * Date add Year
   *
   * DateUtil.addYear(new Date(), 1)
   */
  public static addYear(inDate: Date, addYear: number): Date {
    const momentValue = moment(inDate);
    return momentValue.add(addYear, 'years').toDate();
  }

  /**
   * Date add Months
   *
   * DateUtil.addMonths(new Date(), 1)
   */
  public static addMonths(inDate: Date, addMonths: number): Date {
    const momentValue = moment(inDate);
    return momentValue.add(addMonths, 'months').toDate();
  }

  /**
   * Date add Seconds
   *
   * DateUtil.addSeconds(new Date(), 1)
   */
  public static addSeconds(inDate: Date, addSeconds: number): Date {
    const momentValue = moment(inDate);
    return momentValue.add(addSeconds, 'seconds').toDate();
  }

  /**
   * 날짜를 format형식(DD/MM/YYYY)으로 변환
   *
   * DateUtil.formatDate(new Date()) -> DD/MM/YYYY
   */
  public static formatDate(inDate: Date, format?: string): string {
    const momentValue = moment(inDate);
    if(format == undefined || StringUtil.isBlank(format)){
      format = 'DD/MM/YYYY';
    }
    return momentValue.format(format);
  }

  /**
   * DB에서 조회된 String형식(YYYYMMDD)의 날짜를 DD/MM/YYYY 형식으로 변환
   *
   * DateUtil.formatStringDate('20171029') -> 29/10/2017
   */
  public static formatStringDate(inDate: string, format?: string): string {
    if(StringUtil.isBlank(inDate)){
      return '';
    }
    const momentValue = moment(inDate, 'YYYYMMDD');
    if(format == undefined || StringUtil.isBlank(format)){
      format = 'DD/MM/YYYY';
    }
    return momentValue.format(format);
  }

  /**
   * Dateinput컴포넌트에서 생성된 DD/MM/YYYY 형식의 날짜를 String형식(YYYYMMDD)의 날짜로 변환
   *
   * DateUtil.formatDateString('29/10/2017') -> 20171029
   */
  public static formatDateString(inDate: string, format?: string): string {
    if(StringUtil.isBlank(inDate)){
      return '';
    }
    const momentValue = moment(inDate, 'DD/MM/YYYY');
    if(format == undefined || StringUtil.isBlank(format)){
      format = 'YYYYMMDD';
    }
    return momentValue.format(format);
  }

  /**
   * 날짜시간형식의 문자열에서 시간단위 삭제
   *
   * DateUtil.dateCutTime('29/10/2017 00:00:00') -> 29/10/2017
   */
  public static dateCutTime(inDate: string): string {
    if(StringUtil.isBlank(inDate)){
      return '';
    }
    if(inDate.length < 11){
      return inDate;
    }else{
      return inDate.substring(0, 10);
    }
  }

  /**
   * 입력날짜(DD/MM/YYYY)가 유효한 날짜인지 체크
   *
   * DateUtil.isValid('30/02/2018') -> false
   */
  public static isValid(chkDate: string): boolean {
    const isValid = moment(chkDate, 'DD/MM/YYYY', true).isValid();
    return isValid;
  }

  /**
   * 시작일자가 종료일자보다 크면 false
   *
   * DateUtil.checkDateRange('30/03/2018', '30/02/2018') -> false
   */
  public static checkDateRange(startDate: string, endDate: string): boolean {
    if(StringUtil.isBlank(startDate) || StringUtil.isBlank(endDate)){
      return true;
    }
    const strtDt = this.formatDateString(startDate);
    const endDt = this.formatDateString(endDate);
    if(strtDt > endDt){
      return false;
    }else{
      return true;
    }
  }

  /**
   * Date관련 Component Option
   *
   * monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin', 'Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
   * dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
   * dayNames3: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
   */
  public static getDateLocale(locale: string): any{
    let rtnObj;
    if(locale === 'fr-CM'){
      rtnObj = {
        format : 'DD/MM/YYYY',
        applyLabel : 'Appliquer',
        cancelLabel : 'Effacer',
        fromLabel: 'de',
        toLabel: 'à',
        customRangeLabel: 'Intervalle Personnalisé',
        daysOfWeek: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
        monthNames: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'],
      };
    }else{
      rtnObj = {
        format : 'DD/MM/YYYY',
        cancelLabel: 'Clear'
      };
    }
    return rtnObj;
  }

  public static getDateRange(locale: string): any{
    let rtnObj;
    if(locale === 'fr-CM'){
      rtnObj = {
        'Aujourd\'hui'          : [moment(), moment()],
        'Hier'                  : [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Les 7 derniers jours'  : [moment().subtract(6, 'days'), moment()],
        'Les 30 derniers jours' : [moment().subtract(29, 'days'), moment()],
        'Ce mois-ci'            : [moment().startOf('month'), moment().endOf('month')],
        'Le mois dernier'       : [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      };
    }else{
      rtnObj = {
        'Today'       : [moment(), moment()],
        'Yesterday'   : [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days' : [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month'  : [moment().startOf('month'), moment().endOf('month')],
        'Last Month'  : [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      };
    }
    return rtnObj;
  }

  public static isDate(m: any){
    return moment.isDate(m)
  }

  public static isNotDate(m: any){
    return !DateUtil.isDate(m)
  }
}
