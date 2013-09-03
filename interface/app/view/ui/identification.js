/*
 * File: app/view/ui/identification.js
 * Date: Tue Sep 03 2013 18:36:29 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.view.ui.identification', {
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
                    title: 'Service Identification:',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'title',
                            fieldLabel: 'Title',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'abstract',
                            fieldLabel: 'Abstract',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'keywords',
                            fieldLabel: 'Keywords',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'fees',
                            fieldLabel: 'Fees',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'accessconstrains',
                            fieldLabel: 'Access constrains',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'authority',
                            fieldLabel: 'URN authority',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'urnversion',
                            fieldLabel: 'URN version',
                            anchor: '100%'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});