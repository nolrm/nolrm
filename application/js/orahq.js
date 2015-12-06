
// render the items in the info using jQuery
$(document).ready(function() {
  // Initialise Data
  var jsonUrl = '/json/competitor-report-data.json';


  $.getJSON( jsonUrl, function(data){
    var customerHtml = '',
        customer     = data.customerdetails,
        report       = data.reportdata;


    // <div class="customer">
    //   <h3>The Customer</h3>
    //   <div>
    //     <i class="ion-iphone">&nbsp</i>12 456 7899
    //   </div>
    //   <div>
    //     <i class="ion-ios-location-outline">&nbsp</i>12, The Road, City
    //   </div>
    //   <div>
    //     <i class="ion-ios-information-outline">&nbsp</i>A small amount of interesting information about the customer
    //   </div>
    // </div>
    // Draw Customer Detail
    customerHtml += '<div class="customer"><h1>'
                 + customer.name + '</h1><div class="customer--mobile"><i class="ion-iphone">&nbsp</i>'
                 + customer.phone + ' | <i class="ion-ios-location-outline">&nbsp</i>'
                 + customer.adress + '</div><div><i class="ion-ios-information-outline">&nbsp</i>'
                 + customer.tag + '</div></div>';


    // <div class="col-sm-3">
    //   <div class="report">
    //     <div class="report--title">Competitor X</div>
    //     <div class="report--content">
    //       <ul class="list-unstyled">
    //         <li>...</li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    // Draw Customer and competitor detail
    $.each(report, function(element, index) {
      var active = (element === 'customer') ? 'active' : '';

      customerHtml += '<div class="col-sm-2 no-pad"><div class="report '
                   + active
                   + '"><div class="report--title">'
                   + index.name + '</div><div class="report--content"><ul class="list-unstyled"><li>'
                   + index.shopfronts + ' <small>Shopfronts</small></li><li>'
                   + index['website speed'] + ' <small>Website Speed</small></li><li>'
                   + index['mobile friendly'] + ' <small>Mobile Friendly</small></li><li>'
                   + index.findability + ' <small>Findability</small></li><li>'
                   + index['social engagement'] + ' <small>Social Engagement</small></li></ul></div></div></div>';
    });


    $('.js-content').html(customerHtml)
  });

}); // End $(document).ready

