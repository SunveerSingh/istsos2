/*
 * File: app/store/MyArrayStore.js
 * Date: Tue Sep 03 2013 18:36:29 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.store.MyArrayStore', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'MyArrayStore',
            proxy: {
                type: 'ajax',
                reader: {
                    type: 'array',
                    idProperty: 'xx'
                }
            }
        }, cfg)]);
    }
});