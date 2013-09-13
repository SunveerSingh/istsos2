/*
 * File: app/view/ui/contactinfo.js
 * Date: Fri Sep 13 2013 10:56:44 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.view.ui.contactinfo', {
    extend: 'Ext.form.Panel',

    border: 0,
    id: 'contactinfo',
    bodyPadding: 10,
    bodyStyle: 'centerBody',
    title: '',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'displayfield',
                    hidden: true,
                    id: 'messageField',
                    fieldStyle: 'color: red;',
                    name: 'message',
                    fieldLabel: 'Message',
                    labelStyle: 'color: red;',
                    anchor: '100%'
                },
                {
                    xtype: 'textfield',
                    name: 'contact',
                    fieldLabel: 'Contact',
                    anchor: '100%'
                },
                {
                    xtype: 'textfield',
                    name: 'organization',
                    fieldLabel: 'Organization',
                    anchor: '100%'
                },
                {
                    xtype: 'textfield',
                    name: 'position',
                    fieldLabel: 'Position',
                    anchor: '100%'
                },
                {
                    xtype: 'textfield',
                    name: 'addressType',
                    fieldLabel: 'Address type',
                    anchor: '100%'
                },
                {
                    xtype: 'textfield',
                    name: 'address',
                    fieldLabel: 'Address',
                    anchor: '100%'
                },
                {
                    xtype: 'textfield',
                    name: 'city',
                    fieldLabel: 'City',
                    anchor: '100%'
                },
                {
                    xtype: 'textfield',
                    name: 'state',
                    fieldLabel: 'State',
                    anchor: '100%'
                },
                {
                    xtype: 'textfield',
                    name: 'zipCode',
                    fieldLabel: 'ZIP code',
                    anchor: '100%'
                },
                {
                    xtype: 'textfield',
                    name: 'country',
                    fieldLabel: 'Coutry',
                    anchor: '100%'
                },
                {
                    xtype: 'textfield',
                    name: 'telephone',
                    fieldLabel: 'Telephone',
                    anchor: '100%'
                },
                {
                    xtype: 'textfield',
                    name: 'fax',
                    fieldLabel: 'Fax',
                    anchor: '100%'
                },
                {
                    xtype: 'textfield',
                    name: 'email',
                    fieldLabel: 'Email',
                    anchor: '100%'
                }
            ]
        });

        me.callParent(arguments);
    }
});