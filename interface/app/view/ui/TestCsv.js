/*
 * File: app/view/ui/TestCsv.js
 * Date: Tue Sep 03 2013 18:36:29 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.view.ui.TestCsv', {
    extend: 'Ext.container.Viewport',

    layout: {
        type: 'fit'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    layout: {
                        type: 'border'
                    },
                    title: '',
                    items: [
                        {
                            xtype: 'form',
                            width: 300,
                            bodyPadding: 16,
                            title: 'FILE',
                            region: 'west',
                            items: [
                                {
                                    xtype: 'combobox',
                                    id: 'cmbServices',
                                    fieldLabel: 'Service',
                                    labelWidth: 70,
                                    displayField: 'service',
                                    store: 'storeServices',
                                    valueField: 'service',
                                    anchor: '100%'
                                },
                                {
                                    xtype: 'combobox',
                                    id: 'oeCbOffering',
                                    name: 'offering',
                                    fieldLabel: 'Offering',
                                    labelWidth: 70,
                                    displayField: 'name',
                                    queryMode: 'local',
                                    store: 'offerings',
                                    valueField: 'name',
                                    anchor: '100%'
                                },
                                {
                                    xtype: 'combobox',
                                    id: 'oeCbProcedure',
                                    name: 'procedure',
                                    fieldLabel: 'Procedure',
                                    labelWidth: 70,
                                    displayField: 'name',
                                    queryMode: 'local',
                                    store: 'procedurelist',
                                    valueField: 'name',
                                    anchor: '100%'
                                },
                                {
                                    xtype: 'filefield',
                                    id: 'btncsv',
                                    fieldLabel: 'CSV',
                                    labelWidth: 70,
                                    anchor: '100%'
                                }
                            ],
                            dockedItems: [
                                {
                                    xtype: 'toolbar',
                                    dock: 'top',
                                    layout: {
                                        align: 'middle',
                                        type: 'hbox'
                                    },
                                    items: [
                                        {
                                            xtype: 'button',
                                            text: 'Action!',
                                            flex: 1
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            bodyPadding: 16,
                            title: '',
                            region: 'center',
                            items: [
                                {
                                    xtype: 'textareafield',
                                    height: 155,
                                    id: 'logger',
                                    readOnly: true,
                                    fieldLabel: 'Log',
                                    hideLabel: true,
                                    anchor: '100%'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});