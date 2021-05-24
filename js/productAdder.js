$(function() {
    $("#lineAdder").on("click", addLine);

    function addLine() {
        var elements = `<div><div><div class="form-floating"><h6><span class="badge badge-pill badge-danger">UPC</span></h6><select class="form-control"><option selected>UPC</option><option value="@upc@">@upc@</option></select></div><br><div class="form-floating"><h6><span class="badge badge-pill badge-danger">Amount</span></h6><input type="number" class="form-control" min="1"></div><hr></div></div>`
        $("#products").append(elements);
    }
})