$(function(){
  var currencies = [
    { value: 'Những kẻ săn máu', data: 'Những kẻ săn máu' },
    { value: 'Hôm nay tôi thất tình', data: 'ALL' },
    { value: 'Đắc nhân tâm', data: 'DZD' },
    { value: 'European euro', data: 'EUR' },
    { value: 'Angolan kwanza', data: 'AOA' },
  ];

  // setup autocomplete function pulling from currencies[] array
  $('#autocomplete').autocomplete({
    lookup: currencies,
    onSelect: function (suggestion) {
      // $(location).attr('href', '../pages/single_page.html')
      if($("#autocomplete").val() === "Những kẻ săn máu")
      {
          $(location).attr('href', '../pages/single_page.html')
      }
    }
  });

  $("#search_btn").click(function(){
    if($("#autocomplete").val().search("Những kẻ săn máu") && $("#autocomplete").val() != "Những kẻ săn máu")
    {
      $(location).attr('href', '../pages/search.html')
    }
    else
    {
      if($("#autocomplete").val() === "Những kẻ săn máu")
      {
          $(location).attr('href', '../pages/single_page.html')
      }
    }
  });

});
