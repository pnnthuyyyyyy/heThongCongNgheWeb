$(function () {

    var goToCartIcon = function($addTocartBtn){
      var $cartIcon = $(".my-cart-icon");
      var $image = $('<img width="30px" height="30px" src="' + $addTocartBtn.data("image") + '"/>').css({"position": "fixed", "z-index": "999"});
      $addTocartBtn.prepend($image);
      var position = $cartIcon.position();
      $image.animate({
        top: position.top,
        left: position.left
      }, 500 , "linear", function() {
        $image.remove();
      });
    }

    $('.my-cart-btn').myCart({
      currencySymbol: '$',
      classCartIcon: 'my-cart-icon',
      classCartBadge: 'my-cart-badge',
      classProductQuantity: 'my-product-quantity',
      classProductRemove: 'my-product-remove',
      classCheckoutCart: 'my-cart-checkout',
      affixCartIcon: true,
      showCheckoutModal: true,
      numberOfDecimals: 2,
      cartItems: [
        {id: 41, name: 'Leica Q', summary: 'summary 41', price: 1000, quantity: 1, image: '../img/leica/may-anh-leica-q-titanium-gray1.webp'}
      ],
      clickOnAddToCart: function($addTocart){
        goToCartIcon($addTocart);
      },
      afterAddOnCart: function(products, totalPrice, totalQuantity) {
        console.log("afterAddOnCart", products, totalPrice, totalQuantity);
      },
      clickOnCartIcon: function($cartIcon, products, totalPrice, totalQuantity) {
        console.log("cart icon clicked", $cartIcon, products, totalPrice, totalQuantity);
      },
      checkoutCart: function(products, totalPrice, totalQuantity) {
        var checkoutString = "Total Price: " + totalPrice + "\nTotal Quantity: " + totalQuantity;
        checkoutString += "\n\n id \t name \t summary \t price \t quantity \t image path";
        $.each(products, function(){
          checkoutString += ("\n " + this.id + " \t " + this.name + " \t " + this.summary + " \t " + this.price + " \t " + this.quantity + " \t " + this.image);
        });
        alert("You ordered succeed !!!");
        console.log("checking out", products, totalPrice, totalQuantity);
      },
      getDiscountPrice: function(products, totalPrice, totalQuantity) {
        console.log("calculating discount", products, totalPrice, totalQuantity);
        return totalPrice * 0.5;
      }
    });

    $("#addNewProduct").click(function(event) {
      var currentElementNo = $(".row").children().length + 1;
      $(".row").append('<div class="col-md-5 text-left"><img src="img/fujifilm/𝐅𝐮𝐣𝐢𝐟𝐢𝐥𝐦-𝐆𝐅𝐗𝟓𝟎𝐒-𝐈𝐈.jpg" width="150px" height="150px"><br>product ' 
      + currentElementNo + ' - <strong>$' 
      + currentElementNo + '</strong><br><button class="btn btn-danger my-cart-btn" data-id="' 
      + currentElementNo + '" data-name="product ' 
      + currentElementNo + '" data-summary="summary ' 
      + currentElementNo + '" data-price="' 
      + currentElementNo + '" data-quantity="1" data-image="img/fujifilm/𝐅𝐮𝐣𝐢𝐟𝐢𝐥𝐦-𝐆𝐅𝐗𝟓𝟎𝐒-𝐈𝐈.jpg">Add to Cart</button><a href="#" class="btn btn-info">Details</a></div>')
    });
  });
  