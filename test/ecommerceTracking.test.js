import{calculateQuantity} from '../src/modules/ecommerceTracking/calculateQuantity';
import{buildProductsObjArray} from '../src/modules/ecommerceTracking/buildProductsObjArray';
import{extractMetaTagContent} from '../src/modules/extractMetaTagContent';
import{extractProductName} from '../src/modules/ecommerceTracking/extractProductName';
import{buildEcommerceObj} from '../src/modules/ecommerceTracking/buildEcommerceObj';
import{stringOrNull} from '../src/modules/stringOrNull';
import{populateActionField} from '../src/modules/ecommerceTracking/populateActionField';

document.body.innerHTML =
    '<meta name="WT.si_n" content="Discovery store">' +
    '<meta name="WT.si_p" content="Step 4">' +
    '<meta name="WT.pn_fa" content="Digital Record">' +
    '<meta name="WT.pn_gr" content="The National Archives">' +
    '<meta name="WT.pn_sku" content="AIR 50/163/32">' +
    '<meta name="WT.tx_u" content="1">' +
    '<meta name="WT.tx_s" content="3.50">' +
    '<meta name="WT.tx_total" content="3.50">' +
    '<meta name="WT.tx_id" content="I/657715845504212R">';

describe('Checking that the content attribute is returned', () => {
    it('Should return the meta tag content if the tag exists', () => {
        expect(extractMetaTagContent('WT\\.si_n')).toBe('Discovery store');
        expect(extractMetaTagContent('WT\\.si_p')).toBe('Step 4');
        expect(extractMetaTagContent('WT\\.pn_fa')).toBe('Digital Record');
        expect(extractMetaTagContent('WT\\.pn_gr')).toBe('The National Archives');
        expect(extractMetaTagContent('WT\\.pn_sku')).toBe('AIR 50/163/32');
        expect(extractMetaTagContent('WT\\.tx_u')).toBe('1');
        expect(extractMetaTagContent('WT\\.tx_s')).toBe('3.50');
        expect(extractMetaTagContent('WT\\.tx_total')).toBe('3.50');
        expect(extractMetaTagContent('WT\\.tx_id')).toBe('I/657715845504212R');
        expect(extractMetaTagContent('metaTagDoesNotExist')).toBe(null);
    });
});

describe('Checking that the quantity is calculated correctly', () => {
    it('Should return an array of values/quantities', () => {
        expect(calculateQuantity(['Product 1', 'Product 1', 'Product 2', 'Product 2', 'Product 3'])).toEqual({
            'Product 1': [0, 1],
            'Product 2': [2, 3],
            'Product 3': [4]
        });
    });
    it('Should return undefined if parameter is not an array', () => {
        expect(calculateQuantity('Some value')).toBe('The parameter is of the incorrect data type.');
        expect(calculateQuantity({})).toBe('The parameter is of the incorrect data type.');
    });
});

describe('Checking that the name is extracted correctly', () => {
    it('Should return all values before the first slash in the record ID (with duplicates removed)', () => {
        expect(extractProductName(['AIR 50/163/32','CO 700/BARBADOS9A', 'WO 398/188/14', 'PROB 11/611/331'])).toEqual(['AIR 50', 'CO 700', 'WO 398', 'PROB 11']);
    });
    it('Should return undefined if parameter is not an array', () => {
        expect(extractProductName('someString')).toEqual('The parameter is of the incorrect data type.');
        expect(extractProductName(1)).toEqual('The parameter is of the incorrect data type.');
    });
});

describe('Checking that the \'products\' object property is of type array', () => {
    it('Should return true if the parameters are of the correct data type', () => {
        expect(Array.isArray(buildProductsObjArray([], [], [], [], {}))).toBeTruthy();
    });
    it('Should return false if the parameters are the incorrect data type', () => {
        expect(Array.isArray(buildProductsObjArray('someString',2,true,[],{}))).toBeFalsy();
        expect(buildProductsObjArray('someString',2,true,[],{})).toBe('The parameters are of the incorrect data type.');
    });
});

describe('Checking the ecommerce is built correctly', () => {
    it('Should have the defined properties', () => {
        expect(buildEcommerceObj('arg1','arg2','arg3','arg4','arg5','arg6','arg7','arg8',[{'arg2' : 'someValue'}])).toHaveProperty('event');
        expect(buildEcommerceObj('arg1','arg2','arg3','arg4','arg5','arg6','arg7','arg8',[{'arg2' : 'someValue'}])).toHaveProperty('ecommerce');
        expect(buildEcommerceObj('arg1','arg2','arg3','arg4','arg5','arg6','arg7','arg8',[{'arg2' : 'someValue'}]).ecommerce.arg2).toHaveProperty('actionField');
        expect(buildEcommerceObj('arg1','arg2','arg3','arg4','arg5','arg6','arg7','arg8',[{'arg2' : 'someValue'}]).ecommerce.arg2).toHaveProperty('products');
        expect(buildEcommerceObj('arg1','arg2','arg3','arg4','arg5','arg6','arg7','arg8',[{'arg2' : 'someValue'}]).ecommerce.arg2.actionField).toHaveProperty('step');
        expect(buildEcommerceObj('arg1','arg2','arg3','arg4','arg5','arg6','arg7','arg8',[{'arg2' : 'someValue'}]).ecommerce.arg2.actionField).toHaveProperty('id');
        expect(buildEcommerceObj('arg1','arg2','arg3','arg4','arg5','arg6','arg7','arg8',[{'arg2' : 'someValue'}]).ecommerce.arg2.actionField).toHaveProperty('affiliation');
        expect(buildEcommerceObj('arg1','arg2','arg3','arg4','arg5','arg6','arg7','arg8',[{'arg2' : 'someValue'}]).ecommerce.arg2.actionField).toHaveProperty('revenue');
        expect(buildEcommerceObj('arg1','arg2','arg3','arg4','arg5','arg6','arg7','arg8',[{'arg2' : 'someValue'}]).ecommerce.arg2.actionField).toHaveProperty('tax');
        expect(buildEcommerceObj('arg1','arg2','arg3','arg4','arg5','arg6','arg7','arg8',[{'arg2' : 'someValue'}]).ecommerce.arg2.actionField).toHaveProperty('shipping');
    });
    it('Should have the defined types', () => {
        expect(typeof buildEcommerceObj('arg1','arg2','arg3','arg4','arg5','arg6','arg7','arg8',[{'arg2' : 'someValue'}]).event).toBe('string');
        expect(typeof buildEcommerceObj('arg1','arg2','arg3','arg4','arg5','arg6','arg7','arg8',[{'arg2' : 'someValue'}]).ecommerce).toBe('object');
        expect(typeof buildEcommerceObj('arg1','arg2','arg3','arg4','arg5','arg6','arg7','arg8',[{'arg2' : 'someValue'}]).ecommerce.arg2).toBe('object');
        expect(typeof buildEcommerceObj('arg1','arg2','arg3','arg4','arg5','arg6','arg7','arg8',[{'arg2' : 'someValue'}]).ecommerce.arg2.actionField).toBe('object');
        expect(typeof buildEcommerceObj('arg1','arg2','arg3','arg4','arg5','arg6','arg7','arg8',[{'arg2' : 'someValue'}]).ecommerce.arg2.actionField.step).toBe('string');
        expect(typeof buildEcommerceObj('arg1','arg2','arg3','arg4','arg5','arg6','arg7','arg8',[{'arg2' : 'someValue'}]).ecommerce.arg2.actionField.id).toBe('string');
        expect(typeof buildEcommerceObj('arg1','arg2','arg3','arg4','arg5','arg6','arg7','arg8',[{'arg2' : 'someValue'}]).ecommerce.arg2.actionField.affiliation).toBe('string');
        expect(typeof buildEcommerceObj('arg1','arg2','arg3','arg4','arg5','arg6','arg7','arg8',[{'arg2' : 'someValue'}]).ecommerce.arg2.actionField.revenue).toBe('string');
        expect(typeof buildEcommerceObj('arg1','arg2','arg3','arg4','arg5','arg6','arg7','arg8',[{'arg2' : 'someValue'}]).ecommerce.arg2.actionField.tax).toBe('string');
        expect(typeof buildEcommerceObj('arg1','arg2','arg3','arg4','arg5','arg6','arg7','arg8',[{'arg2' : 'someValue'}]).ecommerce.arg2.actionField.shipping).toBe('string');
        expect(Array.isArray(buildEcommerceObj('arg1','arg2','arg3','arg4','arg5','arg6','arg7','arg8',[{'arg2' : 'someValue'}]).ecommerce.arg2.products)).toBeTruthy();
    });
    describe('Checking the ecommerce is built correctly', () => {
        it('Should return undefined if the parameters are of the wrong data type', () => {
            expect(buildEcommerceObj(true,false,[],{},123)).toBe('The parameters are of the incorrect data type.');
        });
    });
});

describe('Checking that the correct data types are passed to buildEcommerceObj.js', () => {
    it('Should return true if all values are of type string or null. The stringOrNull function skips over arrays if these are passed.', () => {
        expect(stringOrNull(['String 1','String 2','String 3','String 4',[], 'String 5'])).toBeTruthy();
    });
    it('Should return false if an incorrect data type e.g. integer is passed to buildEcommerceObj.js', () => {
        expect(stringOrNull([1, 1.5])).toBeFalsy();
        expect(stringOrNull(['string', [], {}])).toBeFalsy();
    });
});

describe('Checks that the actionField object is populated with the correct properties', () => {
    it('Should return all properties as null if step != "Step 4"', () => {
        expect(populateActionField('1')).toEqual({
            id : null,
            affiliation : null,
            revenue : null,
            tax : null,
            shipping : null
        });
    });
    it('Should use content from meta tags to populate the actionField object if step="Step 4"', () => {
        expect(populateActionField('4')).toEqual({
            id : extractMetaTagContent('WT\\.tx_id'),
            affiliation : extractMetaTagContent('WT\\.si_n'),
            revenue : extractMetaTagContent('WT\\.tx_total').slice(1, extractMetaTagContent('WT\\.tx_total').length),
            tax : '0',
            shipping : '0'
        });
    });
});

describe('Checks that actionField object is built correctly', () => {
    it('Should have the defined properties', () => {
        expect(populateActionField('4')).toHaveProperty('id');
        expect(populateActionField('4')).toHaveProperty('affiliation');
        expect(populateActionField('4')).toHaveProperty('revenue');
        expect(populateActionField('4')).toHaveProperty('tax');
        expect(populateActionField('4')).toHaveProperty('shipping');
    });
    it('Should have the defined types', () => {
        expect(typeof populateActionField('4').id).toBe('string');
        expect(typeof populateActionField('4').affiliation).toBe('string');
        expect(typeof populateActionField('4').revenue).toBe('string');
        expect(typeof populateActionField('4').tax).toBe('string');
        expect(typeof populateActionField('4').shipping).toBe('string');
    });
});
