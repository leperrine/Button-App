Template.newButton.events({
 	'keyup #btnText': function(e) {
	   var text = $(e.target).val();
	   Session.set("btnText", text) || "Hello World";
	}, 

	'keyup #btnUrl': function (e) {
	  var text = $(e.target).val();
	  Session.set("btnUrl", text);
	},

	'change #btnStyle': function (e) {
	  var currentTarget = e.currentTarget;
	  var newValue = currentTarget.options[currentTarget.selectedIndex].value;
	  if(!Session.equals("btnType", newValue)){
	  Session.set("btnType", newValue);
   }
  },

	'change #btnColor': function (e) {
	  var currentTarget = e.currentTarget;
	  var newValue = currentTarget.options[currentTarget.selectedIndex].value;
	  if(!Session.equals("btnColor", newValue)){
	  Session.set("btnColor", newValue);
   }
  }, 

	'change #btnSize': function (e) {
	  var currentTarget = e.currentTarget;
	  var newValue = currentTarget.options[currentTarget.selectedIndex].value;
	  if(!Session.equals("btnSize", newValue)){
	  Session.set("btnSize", newValue);
    } 
   },

   	'click #new-btn' : function (e) {
   	  e.preventDefault();
      var myBtn = $('#btnprev').html();
      Buttons.insert({myBtn});
   }

});

Template.buttonPreview.helpers({
	btnText: function() {
		var btnText = Session.get("btnText");
		return btnText;
	},

	btnType: function() {
		var btnStyle = Session.get("btnType");
		return btnStyle;
	}, 

	btnColor: function() {
		var btnColor = Session.get("btnColor");
		return btnColor;
	},

	btnSize: function() {
		var btnSize = Session.get("btnSize");
		return btnSize;
	},

	btnUrl: function() {
		var btnUrl = Session.get("btnUrl");
		return btnUrl;
	}
});

Template.myButtons.helpers({
	buttons: function() {
    return Buttons.find();
  }
});

Template.myButtons.events({
	'click #delete-btn': function(e) {
		e.preventDefault();
		Buttons.remove(this._id);
	}
});