FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('main');
	}
});

FlowRouter.route('/my-buttons/', {
	name: 'My Buttons',
	action() {
		BlazeLayout.render('myButtons');
	}
});