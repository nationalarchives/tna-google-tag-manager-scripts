import { verifyUrl } from '../src/modules/discoveryServerSide/verifyURL';
import { extractMetaTagContent } from '../src/modules/extractMetaTagContent';

document.body.innerHTML = '<meta name="DCSext.signedin" content="signed-in" />';

describe('Checks that the correct value is returned depending on the URL', () => {
    let url = 'http://test.discovery.nationalarchives.gov.uk/account/bookmarks';
    let signedInStatus = extractMetaTagContent('DCSext\\.signedin');

    it('Should return account if the path /account/ is passed, else returns null', () => {
        expect(verifyUrl(url, '/account/', signedInStatus, 'defaultValue')).toBe('Customer account');
        expect(verifyUrl(url, 'abcdefg', signedInStatus, 'defaultValue')).toBe('defaultValue');
    });
});

describe('Checks that the parameters are of type string', () => {
    let url = 'http://test.discovery.nationalarchives.gov.uk/account/bookmarks';
    let signedInStatus = extractMetaTagContent('DCSext\\.signedin');

    it('Should return account if the path /account/ is passed, else returns null', () => {
        expect(verifyUrl(url, '/account/', signedInStatus, 'defaultValue')).toBe('Customer account');
        expect(verifyUrl(123, 'abcdefg', signedInStatus, 'defaultValue')).toBe(null);
    });
});