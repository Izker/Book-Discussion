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
