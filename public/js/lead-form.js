(function () {
  const forms = document.querySelectorAll('.js-lead-form');
  if (!forms.length) return;
  const postcodeRegex = /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i;
  const phoneRegex = /^(?:(?:\+44\s?|0)(?:1\d{3,4}|2\d{3,4}|3\d{3,4}|7\d{3}|8\d{3})\s?\d{3,4}\s?\d{0,4})$/;

  forms.forEach((form) => {
    const formElement = form;
    if (!(formElement instanceof HTMLFormElement) || formElement.dataset.bound === 'true') return;
    formElement.dataset.bound = 'true';

    const formId = formElement.id;
    const summary = document.getElementById(`${formId}-error-summary`);
    const errorList = document.getElementById(`${formId}-error-list`);
    const success = document.getElementById(`${formId}-success`);
    const addressLookupWrap = document.getElementById(`${formId}-address-lookup-wrap`);
    const addressManualWrap = document.getElementById(`${formId}-address-manual-wrap`);
    const addressSelect = formElement.querySelector('select[name="addressLookup"]');
    const addressInput = formElement.querySelector('input[name="address"]');

    const setFieldError = (name, message) => {
      const field = formElement.querySelector(`[name="${name}"]`);
      const error = document.getElementById(`${formId}-${name}-error`);
      if (field instanceof HTMLElement) {
        if (message) {
          field.setAttribute('aria-invalid', 'true');
        } else {
          field.removeAttribute('aria-invalid');
        }
      }
      if (error) error.textContent = message || '';
    };

    const validate = () => {
      const data = new FormData(formElement);
      const errors = [];
      ['name', 'phone', 'postcode', 'service'].forEach((name) => {
        const value = String(data.get(name) || '').trim();
        if (!value) errors.push({ field: name, message: `${name.charAt(0).toUpperCase()}${name.slice(1)} is required.` });
      });

      const postcode = String(data.get('postcode') || '').trim();
      if (postcode && !postcodeRegex.test(postcode)) errors.push({ field: 'postcode', message: 'Enter a valid UK postcode.' });

      const phone = String(data.get('phone') || '').trim().replace(/[\s\-()]/g, '');
      if (phone && !phoneRegex.test(phone)) errors.push({ field: 'phone', message: 'Enter a valid UK phone number (e.g. 07700 900000).' });

      ['name', 'phone', 'postcode', 'service', 'address', 'notes'].forEach((name) => setFieldError(name, ''));
      errors.forEach(({ field, message }) => setFieldError(field, message));

      if (summary && errorList) {
        if (errors.length) {
          summary.classList.remove('hidden');
          errorList.textContent = '';
          errors.forEach(function (e) {
            var li = document.createElement('li');
            li.textContent = e.message;
            errorList.appendChild(li);
          });
          summary.focus();
        } else {
          summary.classList.add('hidden');
          errorList.textContent = '';
        }
      }

      return errors.length === 0;
    };

    // Postcode lookup
    formElement.addEventListener('click', async (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const button = target.closest('button[data-action="lookup"]');
      if (!button || !(button instanceof HTMLButtonElement)) return;

      const postcodeInput = formElement.querySelector('input[name="postcode"]');
      if (!(postcodeInput instanceof HTMLInputElement)) return;
      const postcode = postcodeInput.value.trim();

      if (!postcodeRegex.test(postcode)) {
        setFieldError('postcode', 'Enter a valid UK postcode.');
        return;
      }

      setFieldError('postcode', '');
      const originalText = button.textContent;
      button.textContent = 'Finding\u2026';
      button.disabled = true;

      try {
        var cleanPC = postcode.replace(/\s/g, '');
        var res = await fetch('/api/postcode-lookup?postcode=' + encodeURIComponent(cleanPC));

        var ct = (res.headers.get('content-type') || '');
        if (!ct.includes('application/json')) {
          setFieldError('postcode', 'Address lookup not available right now. Please type your address manually.');
          return;
        }

        var data = await res.json();

        if (!res.ok) {
          setFieldError('postcode', data.error || 'Postcode not found.');
          if (addressManualWrap) addressManualWrap.classList.remove('hidden');
          return;
        }

        if (data.postcode && postcodeInput) {
          postcodeInput.value = data.postcode;
        }

        if (data.addresses && data.addresses.length > 0 && addressSelect instanceof HTMLSelectElement) {
          addressSelect.innerHTML = '<option value="">Select your address (' + data.addresses.length + ' found)</option>';
          data.addresses.forEach(function(addr) {
            var opt = document.createElement('option');
            opt.value = addr;
            opt.textContent = addr;
            addressSelect.appendChild(opt);
          });
          var manualOpt = document.createElement('option');
          manualOpt.value = '__manual__';
          manualOpt.textContent = '— My address is not listed —';
          addressSelect.appendChild(manualOpt);
          if (addressLookupWrap) addressLookupWrap.classList.remove('hidden');
          if (addressManualWrap) addressManualWrap.classList.add('hidden');
          addressSelect.focus();
        } else {
          if (addressManualWrap) addressManualWrap.classList.remove('hidden');
          if (addressLookupWrap) addressLookupWrap.classList.add('hidden');
          if (addressInput instanceof HTMLInputElement) addressInput.focus();
        }

        setFieldError('postcode', '');
        button.textContent = originalText;
        return;
      } catch (err) {
        setFieldError('postcode', 'Could not look up addresses. Please type your address manually.');
        if (addressManualWrap) addressManualWrap.classList.remove('hidden');
      } finally {
        if (button.textContent === 'Searching…') button.textContent = originalText;
        button.disabled = false;
      }
    });

    if (addressSelect) {
      addressSelect.addEventListener('change', function(event) {
        var sel = event.target;
        if (!(sel instanceof HTMLSelectElement)) return;
        if (!sel.value) return;

        if (sel.value === '__manual__') {
          if (addressLookupWrap) addressLookupWrap.classList.add('hidden');
          if (addressManualWrap) addressManualWrap.classList.remove('hidden');
          if (addressInput instanceof HTMLInputElement) {
            addressInput.value = '';
            addressInput.focus();
          }
          return;
        }

        if (addressInput instanceof HTMLInputElement) {
          addressInput.value = sel.value;
        }
        if (addressLookupWrap) addressLookupWrap.classList.add('hidden');
        if (addressManualWrap) addressManualWrap.classList.remove('hidden');
      });
    }

    formElement.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (!validate()) return;

      const submit = formElement.querySelector('button[type="submit"]');
      if (submit instanceof HTMLButtonElement) {
        submit.disabled = true;
        submit.textContent = 'Sending\u2026';
      }

      const payload = Object.fromEntries(new FormData(formElement).entries());
      payload.source = formElement.dataset.source || 'website';

      try {
        const res = await fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(body?.error || 'Could not submit form');
        }
        formElement.classList.add('hidden');
        success?.classList.remove('hidden');
      } catch (error) {
        if (summary && errorList) {
          summary.classList.remove('hidden');
          errorList.textContent = '';
          var li = document.createElement('li');
          li.textContent = error instanceof Error ? error.message : 'Unable to submit. Please call us now.';
          errorList.appendChild(li);
          summary.focus();
        }
        if (submit instanceof HTMLButtonElement) {
          submit.disabled = false;
          submit.textContent = 'Request quote';
        }
      }
    });
  });
})();
