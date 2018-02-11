/*
 alert(new Date(2012,1,20,3,12));
 var date = new Date(2012, 0, 03);
 function getWeekDay(date) {
 var day = date.getDay();
 var dt;
 switch (day) {
 case 0:
 dt="вс";
 break;
 case 1:
 dt="пн";
 break;
 case 2:
 dt="вт";
 break;
 case 3:
 dt="ср";
 break;
 case 4:
 dt="чт";
 break;
 case 5:
 dt="пт";
 break;
 case 6:
 dt="сб";
 break;
 }
 return dt;
 }
 alert(getWeekDay(date));
 var date = new Date(2012, 0, 3);
 function getLocalDay(date) {
 var day = date.getDay();
 if(day===0){
 day=7;
 }
 return day;
 }
 alert(getLocalDay(date));   
 var date = new Date(2015, 0, 2);
 function getDateAgo(date,num){
 var tty=new Date(2015,0,date.getDate()-num);
 var options = {
 year: 'numeric',
 month: 'long',
 day: 'numeric'
 };
 tty=tty.toLocaleString("ru", options) ; // среда, 31 декабря 2014 г. н.э. 12:30:00
 return tty;
 }
 alert( getDateAgo(date, 1) ); // 1, (1 января 2015)
 alert( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
 alert( getDateAgo(date, 365) ); // 2, (2 января 2014)
 function getLastDayOfMonth(year, month){
 var date = new Date(year, month + 1, 0);
 return date.getDate();
 }
 alert(getLastDayOfMonth(2012, 1));
 function  getSecondsToday(){
 var date=new Date();
 var date1=new Date(date.getFullYear(),date.getMonth(),date.getDate());
 var result=date-date1; 
 return result/1000;
 }
 alert(getSecondsToday());
 function  getSecondsToTomorrow(){
 var date=new Date();
 var date1=new Date(date.getFullYear(),date.getMonth(),date.getDate()+1);
 var result=date1-date; 
 return result/1000;
 }
 alert(getSecondsToTomorrow());
 var d = new Date(2014, 0, 30);
 function formatDate(d){
 var date=d.getFullYear();
 var date1=d.getMonth();
 var date2=d.getDate();
 alert(date2+"."+date1+"."+date);
 }
 formatDate(d);
 function formatDate(date) {
 var d=date/1000;
 var da=date/1000/60;
 var dat=date/1000/60/60;
 var dateNow=new Date();
 if(dateNow/1000-d<1){
 return "только что";
 }
 if(dateNow/1000/60-da<1){
 return dateNow/1000/60-da+" min ago";
 }
 if(dateNow/1000/60/60-dat<1){
 return dateNow/1000/60/60-dat+" hour ago";
 }else{
 var result=date;
 return result;
 }
 
 }
 alert( formatDate(new Date(new Date - 1)) ); // "только что"
 
 alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
 
 alert( formatDate(new Date(new Date - 30 * 60 * 1000)) ); // "5 мин. назад"
 
 alert( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"
 * * *****/

