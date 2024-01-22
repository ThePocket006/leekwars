// import * as jQuery from 'jquery';

// import {$} from "../global";

/**
 * Window UI Utility
 *
 * Jeong SeungJin
 */
export class UIUtil{
  private static oldDate: number;
  /**
   * Window scroll to topposition
   *
   * @example
   * const topPosition:any = $('#btnNewMdfy').offset().top - 10; // top position
   * UIUtil.scrollTop('html, body', topPosition, 2000);
   *
   * @param selector A string containing a selector expression
   * @param topPosition
   * @param duration_easing A string or number determining how long the animation will run.
   *                        A string indicating which easing function to use for the transition.
   */
  public static scrollTop(selector: JQuery.Selector, topPosition:any, duration_easing?: JQuery.Duration | string){
    if(duration_easing){
      $( selector ).stop().animate({'scrollTop': topPosition}, duration_easing);
    }else{
      $( selector ).stop().animate({'scrollTop': topPosition}, 'fast');
    }
  }

  public static checkDoubleExcute(mSec: number): boolean{
    if(!this.oldDate){
      this.oldDate = +new Date();
      return true;
    }else{
      const calDate:number = +new Date() -this.oldDate;
      this.oldDate = +new Date();

      if(calDate > mSec){
        return true;
      }else{
        return false;
      }
    }
  }

}
