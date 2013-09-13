/*
 * File: app/view/ui/VirtualProcedureEditor.js
 * Date: Fri Sep 13 2013 10:56:44 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.view.ui.VirtualProcedureEditor', {
    extend: 'Ext.panel.Panel',

    layout: {
        type: 'border'
    },
    title: '',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    height: 50,
                    bodyPadding: 10,
                    title: '',
                    region: 'north',
                    items: [
                        {
                            xtype: 'combobox',
                            id: 'vpcmbplist',
                            fieldLabel: 'Virtual procedure',
                            labelWidth: 150,
                            allowBlank: false,
                            displayField: 'name',
                            forceSelection: true,
                            store: 'vplist',
                            valueField: 'name',
                            anchor: '100%'
                        }
                    ]
                },
                {
                    xtype: 'tabpanel',
                    id: 'vppanel',
                    activeItem: 0,
                    title: '',
                    activeTab: 1,
                    flex: 1,
                    region: 'center',
                    items: [
                        {
                            xtype: 'panel',
                            layout: {
                                align: 'stretch',
                                type: 'vbox'
                            },
                            title: 'Rating curve',
                            dockedItems: [
                                {
                                    xtype: 'toolbar',
                                    flex: 1,
                                    dock: 'top',
                                    items: [
                                        {
                                            xtype: 'tbtext',
                                            text: 'ADD'
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'vpbtnaddrc',
                                            text: '> at end'
                                        },
                                        {
                                            xtype: 'button',
                                            disabled: true,
                                            id: 'vpbtnaddaboverc',
                                            text: '> above selected'
                                        },
                                        {
                                            xtype: 'button',
                                            disabled: true,
                                            id: 'vpbtnaddbelowrc',
                                            text: '> below selected'
                                        },
                                        {
                                            xtype: 'tbseparator',
                                            margin: '0px 8px 0px 8px'
                                        },
                                        {
                                            xtype: 'button',
                                            disabled: true,
                                            id: 'vpbtnremoverc',
                                            text: 'Remove selected'
                                        }
                                    ]
                                }
                            ],
                            items: [
                                {
                                    xtype: 'gridpanel',
                                    border: 0,
                                    id: 'vpgridratingcurve',
                                    title: '',
                                    store: 'ratingcurve',
                                    flex: 1,
                                    columns: [
                                        {
                                            xtype: 'datecolumn',
                                            sortable: false,
                                            dataIndex: 'from',
                                            flex: 0.13,
                                            text: 'From',
                                            format: 'Y-m-d',
                                            field: {
                                                xtype: 'datefield',
                                                name: 'from',
                                                fieldLabel: 'Label',
                                                hideLabel: true,
                                                format: 'Y-m-d'
                                            }
                                        },
                                        {
                                            xtype: 'datecolumn',
                                            sortable: false,
                                            dataIndex: 'to',
                                            flex: 0.13,
                                            text: 'To',
                                            format: 'Y-m-d',
                                            field: {
                                                xtype: 'datefield',
                                                name: 'to',
                                                fieldLabel: 'Label',
                                                hideLabel: true,
                                                format: 'Y-m-d'
                                            }
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            sortable: false,
                                            dataIndex: 'low_val',
                                            flex: 0.13,
                                            text: 'Low',
                                            field: {
                                                xtype: 'numberfield',
                                                fieldLabel: 'Label',
                                                hideLabel: true
                                            }
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            sortable: false,
                                            dataIndex: 'up_val',
                                            flex: 0.13,
                                            text: 'Up',
                                            field: {
                                                xtype: 'numberfield',
                                                fieldLabel: 'Label',
                                                hideLabel: true
                                            }
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            sortable: false,
                                            dataIndex: 'A',
                                            flex: 0.13,
                                            text: 'A',
                                            field: {
                                                xtype: 'numberfield',
                                                fieldLabel: 'Label',
                                                hideLabel: true
                                            }
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            sortable: false,
                                            dataIndex: 'B',
                                            flex: 0.13,
                                            text: 'B',
                                            field: {
                                                xtype: 'numberfield',
                                                fieldLabel: 'Label',
                                                hideLabel: true
                                            }
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            sortable: false,
                                            dataIndex: 'C',
                                            flex: 0.13,
                                            text: 'C',
                                            field: {
                                                xtype: 'numberfield',
                                                fieldLabel: 'Label',
                                                hideLabel: true
                                            }
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            sortable: false,
                                            dataIndex: 'K',
                                            flex: 0.13,
                                            text: 'K',
                                            field: {
                                                xtype: 'numberfield',
                                                fieldLabel: 'Label',
                                                hideLabel: true
                                            }
                                        }
                                    ],
                                    viewConfig: {

                                    },
                                    plugins: [
                                        Ext.create('Ext.grid.plugin.CellEditing', {

                                        })
                                    ],
                                    selModel: Ext.create('Ext.selection.RowModel', {
                                        allowDeselect: true
                                    })
                                },
                                {
                                    xtype: 'panel',
                                    border: 0,
                                    height: 60,
                                    layout: {
                                        align: 'stretch',
                                        padding: '8px 0px 8px 0px',
                                        type: 'hbox'
                                    },
                                    title: '',
                                    items: [
                                        {
                                            xtype: 'container',
                                            width: 40
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'vpbtndeleterc',
                                            text: 'Delete Rating Curve File',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'container',
                                            width: 40
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'vpbtnsaverc',
                                            text: 'Store the File',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'container',
                                            width: 40
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            layout: {
                                align: 'stretch',
                                type: 'vbox'
                            },
                            title: 'Code',
                            items: [
                                {
                                    xtype: 'form',
                                    id: 'vpcodingform',
                                    layout: {
                                        type: 'fit'
                                    },
                                    bodyPadding: 10,
                                    title: '',
                                    flex: 1
                                },
                                {
                                    xtype: 'panel',
                                    border: 0,
                                    height: 60,
                                    layout: {
                                        align: 'stretch',
                                        padding: '8px 0px 8px 0px',
                                        type: 'hbox'
                                    },
                                    title: '',
                                    items: [
                                        {
                                            xtype: 'container',
                                            width: 40
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'vpbtndeletecode',
                                            text: 'Delete Code File',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'container',
                                            width: 40
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'vpbtnsavecode',
                                            text: 'Save the Python Code',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'container',
                                            width: 40
                                        }
                                    ]
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