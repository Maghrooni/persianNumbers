persianNumbers
========

jQuery Plugin for converting English numbers to Persian and Arabic Numbers 

$.persianNumbers is a free jQuery plugin that allows you to convert numbers in your String to Persian or Arabic Numbers ! 

##Features
- Converts Numbers in given Strin to Persian or Arabic Numbers 
- Cross browser


##Dependencies
- jQuery >= 1.0

###Usage Example
after including plugin in your Code you can use it as follows : 
```javascript
//simple number conversion
alert($.persianNumbers(9))

//string containing numbers
alert($.persianNumbers("T9080 is a 2014 Model !"))

//passing html content and replace numbers in it ! 
var div = $('#persianDiv');
div.html($.persianNumbers(div.html()));
```

[Visit My Website]
[Visit My Website]: http://www.maghrooni.ir


