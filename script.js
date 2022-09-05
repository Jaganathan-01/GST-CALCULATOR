function calculator() {
  var name = document.getElementById("name");
  var address = document.getElementById("address");
  var ass = document.getElementById("ass");
  var no = document.getElementById("no_of_items");
  var price = document.getElementById("price");
  var proName = document.getElementById("pro_name");
  var gst;
  var GSTamount;
  switch (ass.value) {
    case "Mobile": {
      gst = 18;
      break;
    }
    case "Furniture": {
      gst = 12;
      break;
    }
    case "TV": {
      gst = 18;
      break;
    }
    case "Vehicle": {
      gst = 28;
      break;
    }
  }
  GSTamount = ((price.value * gst) / 100) * no.value;
  var total = parseInt(GSTamount) + parseInt(price.value);
  var total1=total*no.value;
  document.getElementById("show").innerHTML =
    "<h1 class='text-center mb-5'>KEC APPLIANCE</h1><h5>Customer Name: <span class='text-muted'>" +
    name.value +
    "</span><br><br>Customer Address: <span class='text-muted'>" +
    address.value +
    "</span><br><br></h5><br><p class='text-center my-3 fs-4 fw-bold'>CASH RECEIPT</p><br><table class='table mt-4'><tr><th>Product Name</th><th>Product Category</th><th>Price</th><th>QTY</th><th>GST%</th><th>GST amount</th><th>Total Price</th></tr><tr><td>" +
    proName.value +
    "</td><td>" +
    ass.value +
    "</td><td>" +
    price.value +
    "</td><td>" +
    no.value +
    "</td><td>" +
    gst +
    "</td><td>" +
    GSTamount +
    "</td><td>" +
    total1 +
    "</td></tr></table><br><br><p class='text-center fs-5 mt-3'>Thanks for Shopping!</p>";
}
