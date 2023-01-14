var products = []

function addToProducts(){
    let productsObj = {
        item: $('#item').val(),
        price: $('#price').val(),
        qty: $('#qty').val(),
        discount: $('#discount').val()
    }
    $('#productBody').html("")

    products.push(productsObj)
    console.log(productsObj)
    loadData()
}

function deleteProduct(index) {
    console.log("DELETE",index)
    delete products[index]  // delete the element from array
    $('#productBody').html("")
    loadData()
}

function clearTable(){
    $('#productBody').html("")
}



function loadData() {
    let allRows = ""
    let t = 0
    let td = 0
    let awd = 0
    let twd = 0

    for (let p in products) {
        let cellQty = `<td><img class='icon' src='Delete.png' onclick='deleteProduct("${p}")' style='width:20px;height:20px;'> ` + products[p].qty + "</td>"
        let cellItem = '<td class="text-right">' + products[p].item + "</td>"
        let cellPrice = '<td class="text-right">' + products[p].price + "</td>"
        let cellDiscount = '<td class="text-right">' + products[p].discount + "</td>"

        let total = products[p].price * products[p].qty
        let totaldis = products[p].discount * products[p].qty
        let disamount = total - totaldis

        td += totaldis
        t += total 
        awd = disamount
        twd += disamount


        let cellAmount = '<td class="text-right">' + total + "</td>"
        let cellAmountWithDiscount = '<td class="text-right">' + awd + "</td>"
        let row = `<tr>${cellQty}${cellItem}${cellPrice}${cellDiscount}${cellAmount}${cellAmountWithDiscount}</tr>`
        allRows += row
    }
    $('#productBody').html(allRows)
    $('#totalDiscount').html(td)
    $('#amount').html(t)
    $('#totalWithDiscount').html(twd)

    console.log(products)
}

$(document).ready(function () {
    console.log("ready!");
    // load data
    $.ajax({
        url: "data.json"
    }).done(function (data) {
        //$(this).addClass("done");
        console.log("DONE",data)
        dataStr=""
        for(let d in data){
            products.push(data[d])
            let amount = data[d].price * data[d].qty
            let da = data[d].discount * data[d].qty
            let dismount = amount - da 
            dataStr += `<tr>
                <td><img class='icon' src='Delete.png' onclick='deleteProduct("${d}")' style='width:20px;height:20px;'> ${data[d].qty}</td>
                <td>${data[d].item}</td>
                <td>${data[d].price}</td>
                <td>${data[d].discount}</td>
                <td>${amount}</td>
                <td>${dismount}<td>
            </tr>`
        }
        $('#productBody').html(dataStr)
        console.log(products)
    });
});






 