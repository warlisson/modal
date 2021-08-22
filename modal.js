<script>
/**
 * This class is responsible to
 * open modals.
 * 
 * @package Modal
 * @version 1.0.0
 * @author Warlisson Miranda
 */

class Modal {

	/**
	 * Construct class
	 */

	constructor(config = {}) {
		this.modal = '.modal';
		this.openClass = '.open-modal';
		this.closeClass = '.close-modal';
		Object.assign(this, config);
	}

	/**
	 * Init events to open or close modal
	 */

	init() {

		// Constants
		const obj = this;
		const openBtns = document.querySelectorAll(this.openClass);
		const closeBtns = document.querySelectorAll(this.closeClass);

		// Open modal
		openBtns.forEach(openBtn => {
			openBtn.addEventListener('click', function(event) {
				event.preventDefault();
				obj.open(this);
			});
		});

		// Close modal
		closeBtns.forEach(closeBtn => {
			closeBtn.addEventListener('click', function(event) {
				event.preventDefault();
				obj.close(this);
			});
		});

	}

	/**
	 * Open modal
	 */

	open(element) {
		let target = this.getModal(element);
		let modal = document.querySelector(target);
		if (modal) {
			modal.classList.add('open');
		}
	}

	/**
	 * Close modal opened
	 */

	close(element) {
		let modals = document.querySelectorAll(this.modal);
		if (modals) {
			modals.forEach(modal => {
				if (modal.classList.contains('open')) {
					modal.classList.remove('open');
				}
			});
		}
	}

	/**
	 * Get the modal to open
	 */

	getModal(element) {
		if (element.dataset.modal) {
			return element.dataset.modal;
		} else if (element.getAttribute('href')) {
			return element.getAttribute('href');
		} else {
			return this.modal;
		}
	}

}

(new Modal).init();
</script>
