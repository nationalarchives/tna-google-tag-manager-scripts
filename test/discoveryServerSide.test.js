import{buildObject} from '../src/modules/buildObject';
import{removeNullValues} from '../src/modules/removeNullValues';
import{ecommerceObject} from '../src/modules/ecommerceObj';
import{defaultObject} from '../src/modules/defaultObj';
import{extractMetaTagContent} from '../src/modules/extractMetaTagContent';
import{watermarkCheck} from '../src/modules/watermarkCheck';

document.body.innerHTML =
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>' +
    //<meta name="WT.cg_n" content="View records of other archives">
    '<meta name="DCSext.filtertype" content="Date">' +
    '<meta name="DCSext.searchtype" content="Records filtered search">' +
    '<meta name="DCSext.colltype" content="NRA" />' +
    '<meta name="DCSext.dsource" content="MDR" />' +
    '<meta name="DCSext.place" content="Hornby, Yorkshire" />' +
    '<meta name="DCSext.rdata" content="GB/NNAF/M172908">' +
    '<meta name="DCSext.repository" content="London Metropolitan Archives" />' +
    '<meta name="WT.cg_n" content="View TNA record description">' +
    '<meta name="DCSext.docref" content="Division within WO">' +

    //Stage 1 Default
    '<meta name="DCSext.signedin" content="Not signed-in" />' +
    '<meta name="DCSext.subscription" content="not subscribed">' +
    '<meta name="DCSext.imgviewer" content="Image Viewer Watermarked">';

describe('Gets meta tag content', () => {
    it('Should return value of content attribute', () => {
        expect(extractMetaTagContent('DCSext\\.signedin', 'msg')).toBe('Not signed-in');
        expect(extractMetaTagContent('DCSext\\.subscription', 'msg')).toBe('not subscribed');
        expect(extractMetaTagContent('DCSext\\.imgviewer', 'msg')).toBe('Image Viewer Watermarked');
        expect(extractMetaTagContent('DCSext\\.docref', 'msg')).toBe('Division within WO');
        expect(extractMetaTagContent('WT\\.cg_n', 'msg')).toBe('View TNA record description');
    });
});

describe('Checking that a custom message is returned if meta tag does not exist', () => {
    it('Should return custom message', () => {
        expect(extractMetaTagContent('nonExistentMetaTag', 'This meta tag does not exist')).toBe('This meta tag does not exist');
        expect(extractMetaTagContent('nonExistentMetaTag', 'Custom message...')).toBe('Custom message...');
        expect(extractMetaTagContent('nonExistentMetaTag', null)).toBe(null);
    });
});

describe('Checking the object is built correctly', () => {
    it('Should return type object', () => {
        expect(typeof buildObject(true)).toBe('object');
        expect(typeof buildObject(false)).toBe('object');
    });
});

describe('Checking the data type of the parameter passed to removeNullValues', () => {
    it('Should be an object', () => {
        expect(typeof removeNullValues({})).toBe('object');
        expect(typeof removeNullValues({'someProperty' : 'someValue'})).toBe('object');
    });
});

describe('Checking that null values are removed', () => {
    it('Should remove any null values/properties from the object', () => {
        expect(removeNullValues(defaultObject(extractMetaTagContent('WT\\.cg_n', 'Content Group not available'),
            extractMetaTagContent('metaTagDoesNotExist', null), extractMetaTagContent('DCSext\\.subscription', 'Subscriber info not available'),
            extractMetaTagContent('DCSext\\.signedin', 'Registered info not available')))).toEqual({
            'ContentGroup'      : 'View TNA record description',
            'customDimension2'  : 'not subscribed',
            'customDimension3'  : 'Not signed-in'
        });
    });
});

describe('Checking the correct elements are added/subtracted from the object', () => {
    it('Should return ecommerce if the watermark exists, else excludes it', () => {
        expect(buildObject(true)).toEqual(Object.assign(ecommerceObject('ivp', extractMetaTagContent(
            'DCSext\\.imgviewer', 'Meta tag not available'), 'Image viewer', 'Below record description'), defaultObject(extractMetaTagContent('WT\\.cg_n', 'Content Group not available'),
            extractMetaTagContent('DCSext\\.docref', 'Meta tag not available'), extractMetaTagContent('DCSext\\.subscription', 'Subscriber info not available'),
            extractMetaTagContent('DCSext\\.signedin', 'Registered info not available'))));
        expect(buildObject(false)).toEqual(defaultObject(extractMetaTagContent('WT\\.cg_n', 'Content Group not available'), extractMetaTagContent('DCSext\\.docref', 'Meta tag not available'), extractMetaTagContent('DCSext\\.subscription', 'Subscriber info not available'), extractMetaTagContent('DCSext\\.signedin', 'Registered info not available')));
    });
});

describe('Checking the default object has correct properties and value types', () => {
    it('Should have the defined property', () => {
        expect(defaultObject('arg1', 'arg2', 'arg3', 'arg4')).toHaveProperty('ContentGroup');
        expect(defaultObject('arg1', 'arg2', 'arg3', 'arg4')).toHaveProperty('customDimension1');
        expect(defaultObject('arg1', 'arg2', 'arg3', 'arg4')).toHaveProperty('customDimension2');
        expect(defaultObject('arg1', 'arg2', 'arg3', 'arg4')).toHaveProperty('customDimension3');
    });
    it('Should have the defined value types', () => {
        expect(typeof defaultObject('arg1', 'arg2', 'arg3', 'arg4').ContentGroup).toBe('string');
        expect(typeof defaultObject('arg1', 'arg2', 'arg3', 'arg4').customDimension1).toBe('string');
        expect(typeof defaultObject('arg1', 'arg2', 'arg3', 'arg4').customDimension2).toBe('string');
        expect(typeof defaultObject('arg1', 'arg2', 'arg3', 'arg4').customDimension3).toBe('string');
    });
});

describe('Checking the ecommerce object has correct properties and value types', () => {
    it('Should have the defined properties', () => {
        expect(ecommerceObject('ivp', extractMetaTagContent('DCSext\\.imgviewer'), 'Image viewer', 'Below record description')).toHaveProperty('ecommerce');
        expect(ecommerceObject('ivp', extractMetaTagContent('DCSext\\.imgviewer'), 'Image viewer', 'Below record description').ecommerce).toHaveProperty('promoView');
        expect(ecommerceObject('ivp', extractMetaTagContent('DCSext\\.imgviewer'), 'Image viewer', 'Below record description').ecommerce.promoView).toHaveProperty('promotions');
        expect(ecommerceObject('ivp', extractMetaTagContent('DCSext\\.imgviewer'), 'Image viewer', 'Below record description').ecommerce.promoView.promotions[0]).toHaveProperty('id');
        expect(ecommerceObject('ivp', extractMetaTagContent('DCSext\\.imgviewer'), 'Image viewer', 'Below record description').ecommerce.promoView.promotions[0]).toHaveProperty('name');
        expect(ecommerceObject('ivp', extractMetaTagContent('DCSext\\.imgviewer'), 'Image viewer', 'Below record description').ecommerce.promoView.promotions[0]).toHaveProperty('creative');
        expect(ecommerceObject('ivp', extractMetaTagContent('DCSext\\.imgviewer'), 'Image viewer', 'Below record description').ecommerce.promoView.promotions[0]).toHaveProperty('position');

    });
    it('Should have the defined value types', () => {
        expect(typeof ecommerceObject('arg1', 'arg2', 'arg3', 'arg4')).toBe('object');
        expect(typeof ecommerceObject('arg1', 'arg2', 'arg3', 'arg4').ecommerce).toBe('object');
        expect(typeof ecommerceObject('arg1', 'arg2', 'arg3', 'arg4').ecommerce.promoView).toBe('object');
        expect(typeof ecommerceObject('arg1', 'arg2', 'arg3', 'arg4').ecommerce.promoView.promotions).toBe('object');
        expect(typeof ecommerceObject('arg1', 'arg2', 'arg3', 'arg4').ecommerce.promoView.promotions[0].id).toBe('string');
        expect(typeof ecommerceObject('arg1', 'arg2', 'arg3', 'arg4').ecommerce.promoView.promotions[0].name).toBe('string');
        expect(typeof ecommerceObject('arg1', 'arg2', 'arg3', 'arg4').ecommerce.promoView.promotions[0].creative).toBe('string');
        expect(typeof ecommerceObject('arg1', 'arg2', 'arg3', 'arg4').ecommerce.promoView.promotions[0].position).toBe('string');
    });
});

describe('Checking the response depending on whether a watermark exists or not', () => {
    it('Should return true if watermark exists, else return false', () => {
        expect(watermarkCheck('DCSext\\.imgviewer')).toBeTruthy();
        expect(watermarkCheck('metaTagDoesNotExist')).toBeFalsy();
    });
});