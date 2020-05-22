define([
	'core/js/adapt',
	'./DragndropView',
	'core/js/models/itemsQuestionModel'
  ], function(Adapt, DragndropView, ItemsQuestionModel) {
  
	return Adapt.register("dragndrop", {
	  view: DragndropView,
	  // Extend ItemsQuestionModel to distinguish DragndropModel in
	  // the inheritance chain and allow targeted model extensions.
	  model: ItemsQuestionModel.extend({})
	});
  
  });
  