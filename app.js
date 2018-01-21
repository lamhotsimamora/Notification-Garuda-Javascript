/**
 * Permission to enabled notification on browser
 */
_allowNotif($=>{
	_a("Callback when the notification is not allowed");
});

// ==================================================

$btn1.when("click",$=>{
	  /**
	   * Example 1
	   * With default ICON
	   * @type {Array}
	   */
	  _createNotif({
	    title:"My Notification Title",
	    body:"Lorem Ipsum Dot Asem"
	  },$=>{
	  	// Callback when notification is click
	  	_a("You click this notif 1 !");
	  });
});

$btn2.when("click",$=>{
	  /**
	   * Example 2
	   * With Custom ICON
	   * @type {Array}
	   */
	  _createNotif({
	    title:"Notification Garuda Javascript 2",
	    body:"A Modern Query Of Javascript",
	    icon:"https://raw.githubusercontent.com/lamhotsimamora/Garuda-Framework-Professional-Edition/master/Garuda-Framework-Pro-Edition-Logo-Official.png"
	  },$=>{
	  	// Callback when notification is click
	  	_a("You click this notif 2 !");
	  });
});


$btn3.when("click",$=>{
	  let custom_title = $txt_title.getValue;
	  _writeLog(custom_title);
	  if (custom_title==='' || custom_title === undefined)
	  {
	  	  $txt_title.focus();
	  	  return;
	  }
	  /**
	   * Example 3
	   * @type {Array}
	   */
	  _createNotif({
	    title:custom_title,
	    body:"A Modern Query Of Javascript",
	    icon:"https://raw.githubusercontent.com/lamhotsimamora/Garuda-Framework-Professional-Edition/master/Garuda-Framework-Pro-Edition-Logo-Official.png"
	  },$=>{
	  	// Callback when notification is click
	  	_a("You click this notif 3 !");
	  });
});


