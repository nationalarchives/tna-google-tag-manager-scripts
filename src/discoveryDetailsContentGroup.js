/**
 * ------------  THE NATIONAL ARCHIVES  -----------------
 * JS - getting the content group in Discovery Details page for Google Tag Manager
 * Developer: Punal Chotrani
 **/

let discoveryDetailsContentGroup = () => {
    let $metaTag = document.querySelector('meta[name=WT\\.cg_n]'),
        $metaDataContent = $metaTag.getAttribute('content'),
        $metaDataName = $metaTag.getAttribute('name'),
        $discovery = 'Discovery';

    if ($metaDataName === 'WT.cg_n' ) {
        return  {
            'event'         : $discovery,
            'eventCategory' : $discovery,
            'eventAction'   : $metaDataName,
            'eventLabel'    : $metaDataContent,
            'ContentGroup' :  $metaDataContent
        };
    }
};

//let stuff = Object.getOwnPropertyNames(discoveryDetailsContentGroup());
//console.log(Object.getOwnPropertyNames(discoveryDetailsContentGroup()));

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports.discoveryDetailsContentGroup = discoveryDetailsContentGroup;
    //module.exports.hello = hello;
}