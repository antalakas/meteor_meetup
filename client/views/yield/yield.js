/**
 * Created by yannbuydens on 17/09/14.
 */
Template.Yield.helpers({
  messages: function () {
    return Messages.find({},{sort: {timestamp: -1}});
  }
});