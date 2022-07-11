// homepage overlay
$("#btn").on("click", function () {
	$(".overlay").fadeOut();
	$(".mainScreen").fadeIn();
});

// shop currency

let currency = "£";

// currency exchange
// const eurToGBP = 0.86;
// const dollarToGBP = 0.82;
const GBPToDollar = 1.21;
const GBPToEuro = 1.16;
let currentCurrencyType = $("#currency").val();

$("#currency").on("change", function () {
	currency = $("#currency").val();
	$(".currencyType").html(currency);
	let prices = document.querySelectorAll(".currentAmount");
	// reset total amount
	$("#total").html(0);
	// currecny exchange
	if (currency == "£") {
		$(prices).each(function () {
			const basePrice = $(this).attr("data-price");
			console.log(basePrice);
			return $(this).html(basePrice);
		});
		console.log("change pound");
	} else if (currency == "€") {
		$(prices).each(function () {
			const basePrice = $(this).attr("data-price");
			console.log(basePrice * GBPToEuro);
			let newValue = $(this).html(basePrice * GBPToEuro);
			console.log(newValue);
			$(this).attr("currentCost", newValue);
			return newValue;
		});
		console.log("change euro");
	} else {
		$(prices).each(function () {
			const basePrice = $(this).attr("data-price");
			console.log(basePrice * GBPToDollar);
			return $(this).html(basePrice * GBPToDollar);
		});
		console.log("change dollar");
	}
});

// remove amount from shopping cart
// $(".removeItem").on("click", function () {
// 	// $(".shoppingCart-amount").html("&#8356; <span id='total'>0</span>");
// 	let total = parseInt($("#total").html());
// 	let price = parseInt($(this).attr("data-price"));
// 	if (total > 0) {
// 		total = total - price;
// 		$("#total").html(total);
// 	}
// 	let cardTitle = ".cardTitle2";
// 	$(cardTitle).remove();
// });

// add amount from shopping cart
$(".addItem").on("click", function () {
	let cardTitle = $(this).parent().find(".card-title").text();
	let price = parseInt($(this).parent().find(".currentAmount").text());
	let total = parseInt($("#total").html());
	total = total + price;
	$("#total").html(total);

	$(".cartItems").append(
		`<div class="cartItem" >
			<div class="cartItem-left">
				<img
					src="/assets/img/product1.jpg"
					class="img-fluid rounded-top"
					alt=""
				/>
			</div>
			<div class="cartItem-right">
				<h3 class="cartItem-right-itemName">${cardTitle}</h3>
				<p class="cartItem-right-itemPrice">${price}</p>

				<h4>Qty</h4>
				<div class="qty mt-5">
					<span class="minus bg-dark">-</span>
					<input
						type="number"
						class="count"
						name="qty"
						value="1"
						disabled
					/>
					<span class="plus bg-dark">+</span>
				</div>
				<button
					type="button"
					class="cartItem-right-button btn btn-outline-primary"
				>
					Remove
				</button>
			</div>
		</div>`
	);

	// remove item from cart
	$(".cartItem-right-button").on("click", function () {
		let tree = $(this).parent().parent().remove();
		total = total - $(this).parent().find(".cartItem-right-itemPrice").text();
		$("#total").html(total);
	});

	// let price = parseInt($(this).attr("data-price"));
	// let cardPrice = 20;
	// let cardAmount = 5;
	// let cardId = $(this).parent().find(".card-title").text();
	// let cardId = "cardTitle2";

	// let tableRow = document.createElement("tr");
	// tableRow.classList.add(cardId);

	// let itemName = document.createElement("th");
	// itemName.innerHTML = cardTitle;
	// tableRow.appendChild(itemName);

	// let itemPrice = document.createElement("th");
	// itemPrice.innerHTML = cardPrice;
	// tableRow.appendChild(itemPrice);

	// let itemAmount = document.createElement("th");
	// itemAmount.innerHTML = cardAmount;
	// tableRow.appendChild(itemAmount);

	// $(".cartItems").append(
	// 	`<div class="bookingItem"><span>${cardTitle}</span> £<span class="thisItem">${cardPrice}</span> <input type="number" data-original-value="1" value="1"></div>`
	// );
});

// shop select quanutity shopping cart
$(function () {
	var $select = $(".quantity");
	for (i = 1; i <= 50; i++) {
		$select.append($("<option></option>").val(i).html(i));
	}

	// use the select attribute to update quanity in shopping cart if a user click on the item in the shop again
	$(".quantity").val("16").attr("selected");
});

// style
$(function () {
	$().timelinr({
		orientation: "vertical",
		issuesSpeed: 300,
		datesSpeed: 100,
		arrowKeys: "true",
		startAt: 1,
	});
});

// scroll effect - homepage

var $animation_elements = $(".animation-element");
var $window = $(window);

function check_if_in_view() {
	var window_height = $window.height();
	var window_top_position = $window.scrollTop();
	var window_bottom_position = window_top_position + window_height;

	$.each($animation_elements, function () {
		var $element = $(this);
		var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top;
		var element_bottom_position = element_top_position + element_height;

		//check to see if this current container is within viewport
		if (
			element_bottom_position >= window_top_position &&
			element_top_position <= window_bottom_position
		) {
			$element.addClass("in-view");
		} else {
			$element.removeClass("in-view");
		}
	});
}

$window.on("scroll resize", check_if_in_view);
$window.trigger("scroll");

/*shopping cart qty*/
$(document).ready(function () {
	$(document).on("click", ".plus", function () {
		$(".count").val(parseInt($(".count").val()) + 1);
	});
	$(document).on("click", ".minus", function () {
		$(".count").val(parseInt($(".count").val()) - 1);
		if ($(".count").val() == 0) {
			$(".count").val(1);
		}
	});
});
