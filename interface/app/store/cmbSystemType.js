/*
 * File: app/store/cmbSystemType.js
 * Date: Fri Sep 13 2013 10:56:44 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.store.cmbSystemType', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            storeId: 'systemtype',
            proxy: {
                type: 'ajax',
                url: 'app/data/cmbsystemtype.json',
                reader: {
                    type: 'json',
                    idProperty: 'definition',
                    root: 'data'
                }
            },
            fields: [
                {
                    name: 'name',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});