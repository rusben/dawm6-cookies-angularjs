/* 
* @productObj:
* @author:
* @date:
* @description:
* @Attributes:
* 	cookieFiled1:
* 	cookieFiled1;
*   cookieFiled2;
*   dateToValidate;
*   radioType;
*   selectForm;
*   checkboxType1;
*   checkboxType2;
* 
* @methods:
* 		construct
* 		setters and getters for each attribute
*
*/
function productObj ()
{
  //Attributes declaration
  this.cookieFiled1;
  this.cookieFiled2;
  this.dateToValidate;
  this.radioType;
  this.selectForm;
  this.checkboxType1;
  this.checkboxType2;


  //Methods declaration
  this.construct = function (cookieFiled1,cookieFiled2,dateToValidate,radioType,selectForm,checkboxType1,checkboxType2)
  {
    this.setCookieFiled1(cookieFiled1);
    this.setCookieFiled2(cookieFiled2);
    this.setDateToValidate(dateToValidate);
    this.setRadioType(radioType);
    this.setSelectForm(selectForm);
    this.setCheckboxType1(checkboxType1);
    this.setCheckboxType2(checkboxType2);
  }

  this.setCookieFiled1 = function (cookieFiled1){this.cookieFiled1=cookieFiled1;}
  this.setCookieFiled2 = function (cookieFiled2){this.cookieFiled2=cookieFiled2;}
  this.setDateToValidate = function (dateToValidate){this.dateToValidate=dateToValidate;}
  this.setRadioType = function (radioType){this.radioType=radioType;}
  this.setSelectForm = function (selectForm){this.selectForm=selectForm;}
  this.setCheckboxType1 = function (checkboxType1){this.checkboxType1=checkboxType1;}
  this.setCheckboxType2 = function (checkboxType2){this.checkboxType2=checkboxType2;}

  this.getCookieFiled1 = function () {return this.cookieFiled1;}
  this.getCookieFiled2 = function (){return this.cookieFiled2;}
  this.getDateToValidate = function () {return this.dateToValidate;}
  this.getRadioType = function () {return this.radioType;}
  this.getSelectForm = function () {return this.selectForm;}
  this.getCheckboxType1 = function () {return this.checkboxType1;}
  this.getCheckboxType2 = function () {return this.checkboxType2;}

  this.arrayToString = function (arrayCookieObj)
  {
    return  JSON.stringify(arrayCookieObj);;

    // Alternatively use toString on each cookie
    /* var str ="";
    for (var i = 0; i <= arrayCookieObj.legth; i++) {
      str = arrayCookieObj[i].toString();
    }
    return str; */

  }

  this.toCookie = function ()
  {
    var cookieString ="cookieFiled1="+this.getCookieFiled1()+":cookieFiled2="+this.getCookieFiled2()+":dateToValidate="+this.getDateToValidate()+":radioType="+this.getRadioType();
    cookieString +=":selectForm="+this.getSelectForm()+":checkboxType1="+this.getCheckboxType1()+":checkboxType2="+this.getCheckboxType2();
    return cookieString;
  }

  this.toString = function () {
    return JSON.stringify(this);
  }

  this.cookieToObj = function (productObj)
  {
    if(productObj.hasOwnProperty("cookieFiled1")) 
      this.setCookieFiled1(productObj.cookieFiled1);
    
    if(productObj.hasOwnProperty("cookieFiled2")) 
      this.setCookieFiled2(productObj.cookieFiled2);

    if(productObj.hasOwnProperty("dateToValidate")) 
      this.setDateToValidate(productObj.dateToValidate);

    if(productObj.hasOwnProperty("radioType"))
      this.setRadioType(productObj.radioType);

    if(productObj.hasOwnProperty("selectForm"))
      this.setSelectForm(productObj.selectForm);

    if(productObj.hasOwnProperty("checkboxType1"))
      this.setCheckboxType1(productObj.checkboxType1);

    if(productObj.hasOwnProperty("checkboxType2"))
      this.setCheckboxType2(productObj.checkboxType2);

  }
}