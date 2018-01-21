### Example Notification Using Garuda Javascript 2

## Code
Permission
```
_allowNotif($=>{
	_a("Callback when the notification is not allowed");
});
```
Create One
```
 _createNotif({
	    title:"My Notification Title",
	    body:"Lorem Ipsum Dot Asem"
	  },$=>{
	  	// Callback when notification is click
	  	_a("You click this notif 1 !");
	  });
```
