/**
 * Created by yannbuydens on 17/09/14.
 */
Template.AddMessage.events({
  'submit #addMessage' : function (event) {
    event.preventDefault();

    var title = $('#addTitle').val();
    var url = $('#addUrl').val();
    var timestamp = (new Date()).getTime();

    Messages.insert({url : url, title : title, timestamp : timestamp});
  }
});

