/*
 * File: app/view/ui/provider.js
 * Date: Fri Sep 13 2013 10:56:44 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.view.ui.provider', {
    extend: 'Ext.form.Panel',

    border: 0,
    bodyPadding: 10,
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
                    xtype: 'fieldset',
                    title: 'Service Provider:',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'providername',
                            fieldLabel: 'Name',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'providersite',
                            fieldLabel: 'Web site',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'contactname',
                            fieldLabel: 'Contact name',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'contactposition',
                            fieldLabel: 'Contact position',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'contactvoice',
                            fieldLabel: 'Voice',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'contactfax',
                            fieldLabel: 'Fax',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'contactemail',
                            fieldLabel: 'Email',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'contactdeliverypoint',
                            fieldLabel: 'Address',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'contactpostalcode',
                            fieldLabel: 'Postal code',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'contactcity',
                            fieldLabel: 'City',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'contactadminarea',
                            fieldLabel: 'State',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'contactcountry',
                            fieldLabel: 'Country',
                            anchor: '100%'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});