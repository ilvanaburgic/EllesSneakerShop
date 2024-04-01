function redirectToShop() {
  window.location.href = "shop.html";
}

const buyButton = document.getElementById("buyButton");
const successMessage = document.getElementById("successMessage");

function validateForm() {
  const inputs = document.querySelectorAll('#profile-section input');
  for (let input of inputs) {
    if (!input.value.trim()) {
      alert('Please fill out all fields.');
      return false;
    }
  }
  return true;
}


var app = $.spapp({
  defaultView: "#shop",
  templateDir: "../../views/",
  pageNotFound: "error_404"
});

app.route({
  view: "sproduct",
  load: "sproduct.html",
  onCreate: function () {  },
  onReady: function () {
    var productId = localStorage.getItem("productId");
    $.ajax({
      url: 'assets/js/products.json',
      type: 'GET',
      dataType: 'json',
      success: function (products) {
        var product = products.find(p => p.id.toString() === productId);
        if (product) {
          document.getElementById("MainImg").src = product.image;
          document.querySelector('.single-pro-details h4').textContent = product.name;
          document.querySelector('.single-pro-details h3').textContent = `$${product.price}`;
          document.querySelector('.single-pro-details span').textContent = product.description;

        } else {
          console.error('The product is not found');
        }
      },
      error: function (error) {
        console.error('An error occurred while retrieving data', error);
      }
    });
  }
});

app.route({
  view: "home",
  load: "home.html",
  onReady: function () {
    $.ajax({
      url: 'assets/js/products.json',
      type: 'GET',
      dataType: 'json',
      success: function (products) {
        var proContainer = $('#pro-container');
        proContainer.empty(); 

        products.forEach(function (product) {
          var productHTML =
            '<div class="pro" data-id="' + product.id + '">' +
            '<img src="' + product.image + '" alt="">' +
            '<div class="description">' +
            '<span>' + product.brand + '</span>' +
            '<h5>' + product.name + '</h5><br>' +
            '<h4>$' + product.price + '</h4>' +
            '</div>' +
            '</div>';

          proContainer.append(productHTML);
        });

        $('.pro').click(function () {
          var productId = $(this).data('id');
          localStorage.setItem("productId", productId);
          window.location.href = '#sproduct';
        });
      },
      error: function (error) {
        console.error('An error occurred while retrieving data', error);
      }
    });
  }
});

app.route({
  view: "shop",
  load: "shop.html",
  onReady: function () {
    $.ajax({
      url: 'assets/js/products.json',
      type: 'GET',
      dataType: 'json',
      success: function (products) {
        var proContainer = $('#pro-container');
        proContainer.empty();

        products.forEach(function (product) {
          var productHTML =
            '<div class="pro" data-id="' + product.id + '">' +
            '<img src="' + product.image + '" alt="">' +
            '<div class="description">' +
            '<span>' + product.brand + '</span>' +
            '<h5>' + product.name + '</h5><br>' +
            '<h4>$' + product.price + '</h4>' +
            '</div>' +
            '</div>';

          proContainer.append(productHTML);
        });

        $('.pro').click(function () {
          var productId = $(this).data('id');
          localStorage.setItem("productId", productId);
          window.location.href = '#sproduct';
        });
      },
      error: function (error) {
        console.error('An error occurred while retrieving data', error);
      }
    });
  }
});

app.route({
  view: "cart",
  load: "cart.html",
  onReady: function () {
    $.ajax({
      url: 'assets/js/cart.json',
      type: 'GET',
      dataType: 'json',
      success: function (products) {
        var proContainer = $('#cart-container');
        var totalPrice = 0; 
        proContainer.empty(); 

        products.forEach(function (product) {
          var productHTML=
          ` 
            <tr>
            <td><img src="${product.image}" alt="" ></td>
            <td> ${product.name}</td>
            <td>$ ${product.price}</td>
            <td><input type="number" value="1" style="width: 80px;" max="4"></td>             
            <td>$ ${product.price}</td>
          </tr>
          `
          proContainer.append(productHTML);
          totalPrice += product.price; 
        });

        document.querySelector('#subtotal table tr:nth-child(3) td:nth-child(2)').textContent = `$ ${totalPrice.toFixed(2)}`;
        document.querySelector('#subtotal table tr:nth-child(1) td:nth-child(2)').textContent = `$ ${totalPrice.toFixed(2)}`;

        $('#cart-container').on('change', 'input[type="number"]', function () {
          var input = $(this);
          var quantity = parseInt(input.val(), 10);
          var price = parseFloat(input.closest('tr').find('td:nth-child(3)').text().replace('$ ', ''));
          if (quantity < 0) {
            input.val('0');
            quantity = 0;
          } else if (quantity > 4) {
            input.val('4');
            quantity = 4;
          }
          var subtotal = quantity * price;
          input.closest('tr').find('td:nth-child(5)').text(`$ ${subtotal.toFixed(2)}`);
        
          // azurira ukupnu cijenu
          var total = 0;
          $('#cart-container tr').each(function () {
            var row = $(this);
            var rowSubtotal = parseFloat(row.find('td:nth-child(5)').text().replace('$ ', ''));
            total += rowSubtotal;
          });
        
          $('#subtotal table tr:nth-child(1) td:nth-child(2)').text(`$ ${total.toFixed(2)}`);
          $('#subtotal table tr:nth-child(3) td:nth-child(2)').text(`$ ${total.toFixed(2)}`);
        });
      },
      error: function (error) {
        console.error('An error occurred while retrieving data', error);
      }
    });
  }
});


app.run();