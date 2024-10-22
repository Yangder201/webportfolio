


$(document).ready(function () {
	// FancyBox 設定
	$('.fancybox').fancybox({
		autoSize: true,
		scrolling: 'auto',
		fitToView: false,
		width: 'auto',
		maxWidth: '100%',


		beforeShow: function () {
			var $img = $(this.element).find('img');
			var dataSrc = $img.attr('data-src');
			if (dataSrc) {
				$img.attr('src', dataSrc);
			}
		}
	});

	$('.fancybox-buttons').fancybox({
		openEffect: 'none',
		closeEffect: 'none',

		prevEffect: 'none',
		nextEffect: 'none',

		closeBtn: false,

		helpers: {
			title: {
				type: 'inside'
			},
			buttons: {}
		},

		afterLoad: function () {
			this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
		}
	});
});





$(document).ready(function () {
	// FancyBox 設定
	$('.fancybox').fancybox({
		autoSize: true,
		scrolling: 'auto',
		fitToView: false,
		width: 'auto',
		maxWidth: '100%',


		beforeShow: function () {
			var $img = $(this.element).find('img');
			var dataSrc = $img.attr('data-src');
			if (dataSrc) {
				$img.attr('src', dataSrc);
			}
		}
	});

	$('.fancybox-buttons').fancybox({
		openEffect: 'none',
		closeEffect: 'none',

		prevEffect: 'none',
		nextEffect: 'none',

		closeBtn: false,

		helpers: {
			title: {
				type: 'inside'
			},
			buttons: {}
		},

		afterLoad: function () {
			this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
		}
	});
});





$(document).ready(function () {
	// FancyBox 設定
	$('.fancybox').fancybox({
		autoSize: true,
		scrolling: 'auto',
		fitToView: false,
		width: 'auto',
		maxWidth: '100%',


		beforeShow: function () {
			var $img = $(this.element).find('img');
			var dataSrc = $img.attr('data-src');
			if (dataSrc) {
				$img.attr('src', dataSrc);
			}
		}
	});

	$('.fancybox-buttons').fancybox({
		openEffect: 'none',
		closeEffect: 'none',

		prevEffect: 'none',
		nextEffect: 'none',

		closeBtn: false,

		helpers: {
			title: {
				type: 'inside'
			},
			buttons: {}
		},

		afterLoad: function () {
			this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
		}
	});
});
