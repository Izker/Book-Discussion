$( document ).ready(function() {

});

function comment(e){
        if(e.keyCode === 13){
            e.preventDefault();
            var areaId = e.target.id;
            var valueArea = $("#" + areaId).val();
            if( valueArea != ""){
              $("#" + areaId).val("");
              var cmt_store = $("#comment-store").clone();
              var timeStamp = 'comment-' +Number(new Date());
              cmt_store.attr('id',  timeStamp);
              cmt_store.find('div.dropdown-menu a').attr('class', timeStamp);
              cmt_store.css("display", "");
              cmt_store.find("span.content").text(valueArea);
              cmt_store.find("span.nameOfUser").text($("#username").text());
              $("#comments-" + areaId).append(cmt_store);
            }
        }
    }
  function moreComments(e){
    e.preventDefault();
    var id = e.target.id;
    var countMoreComments = parseInt( $("#" + id).attr("class"));
    if(countMoreComments> 5){

    }else{
      $("#" + id).css("display", "none");
      $("#comments-" + id.split("-")[1]).children().css("display", "");
    }
  }
  function deleteCmt(e){
    e.preventDefault();
    var self = e.target;
    var id = self.className;
    $("#" + id).remove();
  }

  function editCmt(e){
    e.preventDefault();
    var id = e.target.className;
    var contentText = $("#" + id).find("span.content").text();
    var idParent = $("#" + id).parent().attr("id");
    var idArea = idParent.split("-")[1];
    $('textarea#' + idArea).val(contentText);
    $("#" + id).remove();
    $('textarea#' + idArea).focus();
  }
  function hideCmt(e) {
    e.preventDefault();
    var parentID = $(e.target).parent().parent().parent().parent().parent().parent().parent();//.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    parentID.hide();
    var moreCmt = 'moreComments-' + parentID.parent().attr("id").split("-")[1];
    var numbercmt = parseInt($("#" + moreCmt).attr("class")) + 1;
    $("#" + moreCmt).attr("class", numbercmt);
    $("#" + moreCmt).text('Hide comments (' + numbercmt + ')');
  }
