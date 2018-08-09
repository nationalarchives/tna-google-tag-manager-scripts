import { serializeData } from '../src/modules/serializeData';
import { getElemIDOnBlur } from '../src/modules/getElemIDOnBlur';
import { getElemErrorID } from '../src/modules/getElemErrorID';

// Define the DOM
document.body.innerHTML = '<form action="" id="naturalisation" class="form-abandonment" method="POST" novalidate="novalidate"> <input type="hidden" name="tna-form" value="naturalisation"> <input type="hidden" name="token" value="91fc47fd978aa6f86b04300cdc48145b"> <input type="hidden" name="timestamp" value="1528182427"> <fieldset class="form-step-1"> <legend>Certificate holder\'s details</legend> <div class="form-row"> <p>Enter the details of the certificate holder at the time the certificate was issued.</p></div><div class="form-row"> <label for="certificate_name">Full name</label> <input type="text" id="certificate_name" name="certificate-name" value="Mihai Diaconita"  aria-required="true" required="" class="form-warning" aria-describedby="certificate_name-error"><span id="certificate_name-error" class="form-error form-hint">Please enter the certificate holder’s name(s)</span> </div><div class="form-row"> <label for="certificate_name_alt">Alternative name(s) <span class="optional">(optional)</span></label> <p id="name-alt" class="form-hint">For example, married or maiden names</p><input type="text" aria-describedby="name-alt" id="certificate_name_alt" name="certificate-name-alt"> </div><div class="form-row"> <label for="certificate_birth_country">Country of birth <span class="optional">(optional)</span></label> <input type="text" id="certificate_birth_country" name="certificate-birth-country"> </div><div class="form-row"> <p id="dob">Date of birth <span class="optional">(optional)</span></p><p class="form-hint">For example, 8 3 1955</p><div id="groupErrorPlacement"><span class="dob-col day"> <label id="day" for="certificate_day">Day</label> <input type="number" aria-labelledby="dob day" id="certificate_day" name="certificate-day"> </span><span class="dob-col month"> <label id="month" for="certificate_month">Month</label> <input type="number" aria-labelledby="dob month" id="certificate_month" name="certificate-month"> </span><span class="dob-col year"> <label id="year" for="certificate_year">Year</label> <input type="number" aria-labelledby="dob year" id="certificate_year" name="certificate-year"> </span></div></div><div class="form-row dob-approx"> <input id="certificate_dob_approx" type="checkbox" name="certificate-dob-approx" value="Yes"> <label for="certificate_dob_approx">Tick here if the date of birth is an approximation.</label> </div><div class="form-row"> <label for="certificate_postal_address">Address at time of registration <span class="optional">(optional)</span></label> <textarea id="certificate_postal_address" name="certificate-postal-address"></textarea> </div><div class="form-row form-nav"> <a href="#" title="continue" class="button" style="display: block;">Continue</a> </div></fieldset> <fieldset class="form-step-2" style="display: none;"> <legend>Certificate details (optional)</legend> <div class="form-row form-nav"> <a href="#" title="back" class="button-back" style="display: block;">❮ Back</a> </div><div class="form-row"> <p>If you know any details of the certificate, please provide them below. This will help us narrow down our search.</p></div><div class="form-row"> <label for="certificate_issued_country">Country of issue <span class="optional">(optional)</span></label> <input type="text" id="certificate_issued_country" name="certificate-issued-country"> </div><div class="form-row"> <label for="certificate_number">Certificate number <span class="optional">(optional)</span></label> <input type="text" id="certificate_number" name="certificate-number"> </div><div class="form-row registration-year"> <p><label id="year-of-registration" class="form-label" for="certificate_year_issued_from">Year of registration <span class="optional">(optional)</span></label></p><label id="from" class="form-label" for="certificate_year_issued_from">from</label> <select id="certificate_year_issued_from" name="certificate-year-issued-from"> <option value="" aria-label="Certificate year of registration from (optional). Please select a year.">Please select</option> <option value="1949">1949</option> <option value="1950">1950</option> <option value="1951">1951</option> <option value="1952">1952</option> <option value="1953">1953</option> <option value="1954">1954</option> <option value="1955">1955</option> <option value="1956">1956</option> <option value="1957">1957</option> <option value="1958">1958</option> <option value="1959">1959</option> <option value="1960">1960</option> <option value="1961">1961</option> <option value="1962">1962</option> <option value="1963">1963</option> <option value="1964">1964</option> <option value="1965">1965</option> <option value="1966">1966</option> <option value="1967">1967</option> <option value="1968">1968</option> <option value="1969">1969</option> <option value="1970">1970</option> <option value="1971">1971</option> <option value="1972">1972</option> <option value="1973">1973</option> <option value="1974">1974</option> <option value="1975">1975</option> <option value="1976">1976</option> <option value="1977">1977</option> <option value="1978">1978</option> <option value="1979">1979</option> <option value="1980">1980</option> <option value="1981">1981</option> <option value="1982">1982</option> <option value="1983">1983</option> <option value="1984">1984</option> <option value="1985">1985</option><option value="1986">1986</option> </select> <label id="to" class="form-label" for="certificate_year_issued_to">to</label> <select id="certificate_year_issued_to" name="certificate-year-issued-to"> <option value="" aria-label="Certificate year of registration to (optional). Please select a year.">Please select</option> <option value="1949">1949</option> <option value="1950">1950</option> <option value="1951">1951</option> <option value="1952">1952</option> <option value="1953">1953</option> <option value="1954">1954</option> <option value="1955">1955</option> <option value="1956">1956</option> <option value="1957">1957</option> <option value="1958">1958</option> <option value="1959">1959</option> <option value="1960">1960</option> <option value="1961">1961</option> <option value="1962">1962</option> <option value="1963">1963</option> <option value="1964">1964</option> <option value="1965">1965</option> <option value="1966">1966</option> <option value="1967">1967</option> <option value="1968">1968</option> <option value="1969">1969</option> <option value="1970">1970</option> <option value="1971">1971</option> <option value="1972">1972</option> <option value="1973">1973</option> <option value="1974">1974</option> <option value="1975">1975</option> <option value="1976">1976</option> <option value="1977">1977</option> <option value="1978">1978</option> <option value="1979">1979</option> <option value="1980">1980</option> <option value="1981">1981</option> <option value="1982">1982</option> <option value="1983">1983</option> <option value="1984">1984</option> <option value="1985">1985</option><option value="1986">1986</option> </select> </div><div class="form-row form-nav "> <a href="#" title="continue" class="button" style="display: block;">Continue</a> </div></fieldset> <fieldset class="form-step-3" style="display: none;"> <legend>Contact details</legend> <div class="form-row form-nav"> <a href="#" title="back" class="button-back" style="display: block;">❮ Back</a> </div><div class="form-row"> <p id="provide_details">Please provide your details so we can let you know whether we\'ve found the certificate.</p></div><div class="form-row"> <label id="full_name_label" for="full_name">Full name</label> <input type="text" aria-labelledby="provide_details full_name_label" id="full_name" name="full-name" aria-required="true" required=""> </div><div class="form-row"> <p id="prefer-contact">Do you have an email address ?</p><div id="groupErrorPlacement"><div class="form-col pref_contact"> <input id="contact_email" aria-labelledby="we-can-let prefer-contact email-label" type="radio" name="preferred-contact" value="Email"> <label id="email-label" for="contact_email">Yes</label> </div><div class="form-col pref_contact"> <input id="contact_postal" aria-labelledby="prefer-contact post-label" type="radio" name="preferred-contact" value="Post"> <label id="post-label" for="contact_postal">No</label> </div></div></div><div class="email-wrapper" style="display: none;"> <div class="form-row"> <label for="email">Email address</label> <input type="email" id="email" name="email"> </div><div class="form-row"> <label for="confirm_email">Please re-type your email address</label> <input type="email" id="confirm_email" name="confirm-email"> </div></div><div class="form-row address-wrapper" style="display: none;"> <label for="postal_address">Postal address</label> <textarea id="postal_address" name="postal-address"></textarea> </div><div class="form-row hidden"> <label for="skype_name">Skype name (please ignore this field)</label> <input type="text" id="skype_name" name="skype-name-16"> </div><div class="form-row"> <input type="submit" alt="Submit" name="submit-bc" id="submit-tna-form" value="Submit" disabled=""> </div></fieldset> </form>';

describe('Test serializeData module', () => {
    it('if data type returned is a string', () => {
        let _array = [],
            _errorArray = [],
            form = document.getElementsByClassName('form-abandonment'),
            errorMsg = document.getElementsByClassName('form-error'),
            formID = form[0].getAttribute('id');

        // Call the components and collect the data from the DOM
        getElemIDOnBlur(form, _array);
        getElemErrorID(_errorArray, errorMsg);

        // ---------------------------------------------------------------------------------------------------------------------
        expect(typeof serializeData(formID,_array,_errorArray)).toBe('string');
        expect(serializeData(formID,_array,_errorArray) === 'ID: naturalisation  > Error: certificate_name-error').toBeTruthy();
        // ---------------------------------------------------------------------------------------------------------------------
        formID = ''; _array = []; _errorArray = [];
        expect(serializeData(formID,_array,_errorArray) === 'ID: naturalisation  > Error: certificate_name-error').toBeFalsy();

    });
});