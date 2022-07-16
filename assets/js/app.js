// homepage overlay
$("#btn").on("click", function () {
	$(".overlay").fadeOut();
	$(".mainScreen").fadeIn();
});

// shop currency change

let currency = "£";

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
			let calculationEuro = Math.round(basePrice * GBPToEuro * 100) / 100;
			console.log(calculationEuro);
			return $(this).html(calculationEuro);
			// let newValue = $(this).html(calculationEuro);
			// $(this).attr("currentCost", newValue);
		});
		console.log("change euro");
	} else {
		$(prices).each(function () {
			const basePrice = $(this).attr("data-price");
			let calculationDollar = Math.round(basePrice * GBPToDollar * 100) / 100;
			console.log(calculationDollar);
			return $(this).html(calculationDollar);
		});
		console.log("change dollar");
	}
});

// add amount from shopping cart
$(".addItem").on("click", function () {
	let cardTitle = $(this).parent().find(".card-title").text();
	let price =
		Math.round($(this).parent().find(".currentAmount").text() * 100) / 100;
	console.log("price" + price);
	let total = parseFloat($("#total").html());
	total = total + price;
	$("#total").html(total);
	console.log(total);

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
	let counter = parseInt($(".count").val());
	console.log(counter);
	// remove item from cart
	$(".cartItem-right-button").on("click", function () {
		$(this).parent().parent().remove();
		total = total - $(this).parent().find(".cartItem-right-itemPrice").text();
		$("#total").html(Math.round(total * 100) / 100);
	});
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

// home page slide style
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
		$(".count").val(parseFloat($(".count").val()) + 1);
	});
	$(document).on("click", ".minus", function () {
		$(".count").val(parseFloat($(".count").val()) - 1);
		if ($(".count").val() == 0) {
			$(".count").val(1);
		}
	});
});
